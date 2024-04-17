import Dialog from '@/components/forms/Dialog';

import classes from './index.module.scss';

interface IPrivatePolicyDialogProps {
  open: boolean;
  onClose: () => void;
}

function PrivatePolicyDialog({
    open, onClose
}: IPrivatePolicyDialogProps) {
  return <Dialog header={<></>} body={<></>} maxWidth="screen" />;
}

export default PrivatePolicyDialog;
