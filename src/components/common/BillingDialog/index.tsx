import { enqueueSnackbar } from 'notistack';
import clsx from 'clsx';

import { STRIPE_PRICE_ID } from '@/config';
import Dialog from '@/components/forms/Dialog';
import Button from '@/components/forms/Button';
import Switch from '@/components/forms/Switch';
import PricePlans from '@/components/pages/about/PricePlans';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { loadAccount, updateSubscribe } from '@/redux/reducers/auth';
import HttpService from '@/services/HttpService';

import classes from './index.module.scss';
import { useState } from 'react';

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

  const [status, setStatus] = useState(true);

  const onBillingClose = () => {
    onClose();
  };

  const onCancelClick = () => {
    // HttpService.post(
    //   '/user/cancel_subscription',
    //   {},
    //   { subscription_id: subscribeID }
    // ).then(response => {
    //   dispatch(updateSubscribe(null));
    //   enqueueSnackbar('Subscription canceled.', { variant: 'success' });
    // });
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
              {subscribeID ? (
                <span className={classes.premium}>Premium</span>
              ) : (
                <span className={classes.free}>Free</span>
              )}
            </div>
            {!subscribeID ? (
              <PricePlans isDialog={true} />
            ) : (
              <div className={classes.subscription}>
                <div className={classes.buttons}>
                  <Switch
                    checked={status}
                    onChange={setStatus}
                    label="Auto Renew"
                  />
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
