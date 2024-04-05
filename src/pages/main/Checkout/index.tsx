import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';

import LoadingSpinner from '@/components/common/LoadingSpinner';

function Checkout() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams) return;
    const redirectUrl = searchParams.get('redirect');
    if (redirectUrl) {
      enqueueSnackbar('Subscription upgraded.', { variant: 'success' });
      navigate(redirectUrl);
    }
  }, []);

  return <LoadingSpinner />;
}

export default Checkout;
