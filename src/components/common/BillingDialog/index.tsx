import { enqueueSnackbar } from 'notistack';

import Dialog from '@/components/forms/Dialog';
import Button from '@/components/forms/Button';
import PricePlans from '@/components/pages/about/PricePlans';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { updateSubscribe } from '@/redux/reducers/auth';
import HttpService from '@/services/HttpService';

import classes from './index.module.scss';

interface IBillingDialogProps {
  open: boolean;
  onClose: () => void;
}

function BillingDialog({
  open = false,
  onClose = () => { },
}: IBillingDialogProps) {
  const dispatch = useAppDispatch();
  const premiumPlan = useAppSelector(state => state.auth.account?.auth) || 0;
  const subscribeID = useAppSelector(state => state.auth.account?.subscribeID);

  const onBillingClose = () => {
    onClose();
  };

  const onCancelClick = () => {
    HttpService.post(
      '/user/cancel_subscription',
      {},
      { subscription_id: subscribeID }
    ).then(response => {
      const { status } = response;
      if (status === 'success') {
        dispatch(updateSubscribe(null));
        enqueueSnackbar('Subscription canceled.', { variant: 'success' });
      }
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
            <div className={classes.header}>
              <p>Current Subscription</p>
              {premiumPlan === 0 ? (
                <span className={classes.free}>Free</span>
              ) : premiumPlan === 1 ? (
                <span className={classes.premium}>Pro</span>
              ) : (
                <span className={classes.platinum}>Platinum</span>
              )}
            </div>
            <PricePlans isDialog={true} />
            {premiumPlan > 0 && (
              <div className={classes.subscription}>
                <div className={classes.buttons}>
                  {/* <Switch
                    checked={status}
                    onChange={setStatus}
                    label="Auto Renew"
                  /> */}
                  <Button
                    className={classes.button}
                    color="secondary"
                    onClick={onCancelClick}
                  >
                    Cancel subscription
                  </Button>
                </div>
              </div>
            )}
          </div>
        }
        fullHeight={false}
      />
    )
  );
}

export default BillingDialog;
