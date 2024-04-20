import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';

import LoadingSpinner from '@/components/common/LoadingSpinner';
import HttpService from '@/services/HttpService';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { loadAccount } from '@/redux/reducers/auth';

function Checkout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const premiumPlan = useAppSelector(state => state.auth.account?.auth) || 0;

  useEffect(() => {
    if (!searchParams) return;
    const redirectUrl = searchParams.get('redirect');
    if (redirectUrl) {
      HttpService.post('/auth', {}).then(response => {
        const { auth: newPremiumPlan } = response;
        if (premiumPlan !== newPremiumPlan) {
          dispatch(loadAccount(response));
          enqueueSnackbar('Subscription upgraded.', { variant: 'success' });
        }
        navigate(redirectUrl);
      });
    }
  }, [searchParams]);

  return <LoadingSpinner />;
}

export default Checkout;
