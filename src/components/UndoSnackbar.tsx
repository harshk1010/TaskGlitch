import { Snackbar, Button } from '@mui/material';

interface Props {
  open: boolean;
  onClose: () => void;
  onUndo: () => void;
}

export default function UndoSnackbar({ open, onClose, onUndo }: Props) {
  const handleUndo = () => {
    if (!open) return; 
    onUndo();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      message="Task deleted"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      onClose={onClose}
      action={
        <Button
          color="secondary"
          size="small"
          onClick={handleUndo}
        >
          Undo
        </Button>
      }
    />
  );
}
