import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { StripeCardElement } from '@stripe/stripe-js';
import { enqueueSnackbar } from 'notistack';
import clsx from 'clsx';

import { STRIPE_PRICE_ID } from '@/config';
import Dialog from '@/components/forms/Dialog';
import Button from '@/components/forms/Button';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { loadAccount, updateSubscribe } from '@/redux/reducers/auth';
import HttpService from '@/services/HttpService';

import classes from './index.module.scss';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#a4c8ff',
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};

interface IBillingDialogProps {
  open: boolean;
  onClose: () => void;
}

function BillingDialog({
  open = false,
  onClose = () => {},
}: IBillingDialogProps) {
  const dispatch = useAppDispatch();
  const userID = useAppSelector(state => state.auth.account?.userID);
  const subscribeID = useAppSelector(state => state.auth.account?.subscribeID);
  const customerID = useAppSelector(state => state.auth.account?.customerID);

  const stripe = useStripe();
  const stripeElements = useElements();

  const onBillingClose = () => {
    onClose();
  };

  const onCancelClick = () => {
    HttpService.post(
      '/user/cancel_subscription',
      {},
      { subscription_id: subscribeID }
    ).then(response => {
      dispatch(updateSubscribe(null));
      enqueueSnackbar('Subscription canceled.', { variant: 'success' });
    });
  };

  const onUpgradeClick = async () => {
    console.log('Upgrade Click');
    if (!stripe || !stripeElements) {
      enqueueSnackbar('Stripe connection failed.', { variant: 'warning' });
      return;
    }

    const cardElement: StripeCardElement = stripeElements.getElement(
      CardElement
    ) as StripeCardElement;
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      enqueueSnackbar('Payment failed.', { variant: 'error' });
      return;
    }

    HttpService.post('/user/create_subscription', {
      user_id: userID,
      customer_id: customerID,
      payment_method_id: paymentMethod?.id,
      price_id: STRIPE_PRICE_ID,
    }).then(response => {
      dispatch(loadAccount(response));
      enqueueSnackbar('Billing upgraded.', { variant: 'success' });
    });
  };

  return (
    open && (
      <Dialog
        open={true}
        onClose={onBillingClose}
        header={<p className={classes.header}>Billing</p>}
        body={
          <div className={classes.billing}>
            <div className={classes.section}>
              <div className={classes.header}>
                <p>Current Subscription</p>
                <CardElement
                  className={classes.cardElement}
                  options={CARD_ELEMENT_OPTIONS}
                />
              </div>
              {subscribeID && (
                <div className={classes.content}>
                  <div>
                    <label>Expires</label>
                    <p>3 days</p>
                  </div>
                  <div>
                    <label>Expiration Date</label>
                    <p>04/05/2024</p>
                  </div>
                </div>
              )}
              <div className={classes.buttons}>
                <Button
                  className={clsx(classes.cancelBtn, classes.button)}
                  color="secondary"
                  disabled={!subscribeID}
                  onClick={onCancelClick}
                >
                  Cancel subscription
                </Button>
                <Button
                  className={clsx(classes.upgradeBtn, classes.button)}
                  color="success"
                  onClick={onUpgradeClick}
                >
                  Upgrade subscription
                </Button>
              </div>
            </div>
          </div>
        }
        maxWidth="sm"
        fullHeight={false}
      />
    )
  );
}

export default BillingDialog;
