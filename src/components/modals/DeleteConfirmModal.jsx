import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';

/**
 * DeleteConfirmModal component - confirmation dialog for deleting a user
 * @param {Object} props
 * @param {boolean} props.open - Whether modal is open
 * @param {string} props.username - Username to be deleted
 * @param {() => void} props.onClose - Callback when modal closes
 * @param {() => void} props.onConfirm - Callback when delete is confirmed
 */
export const DeleteConfirmModal = ({ open, username, onClose, onConfirm }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: { direction: 'rtl' },
      }}
    >
      <DialogTitle sx={{ textAlign: 'right' }}>تأیید حذف</DialogTitle>
      <DialogContent sx={{ direction: 'rtl', textAlign: 'right' }}>
        <Typography variant="body1" sx={{ mt: 2 }}>
          آیا از حذف کاربر «{username}» اطمینان دارید؟
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'flex-start', p: 2, gap: 1 }}>
        <Button onClick={onConfirm} variant="contained" color="error">
          تایید
        </Button>
        <Button onClick={onClose} variant="outlined">
          انصراف
        </Button>
      </DialogActions>
    </Dialog>
  );
};
