import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  Typography,
  Box,
} from '@mui/material';


export const UserDetailsModal = ({ open, user, onClose }) => {
  if (!user) return null;

  const fields = [
    { label: 'نام کاربری', value: user.username },
    { label: 'مشخصات کاربر', value: user.userSpec },
    { label: 'نوع کاربر', value: user.userType },
    { label: 'هویت', value: user.identity },
    { label: 'شناسه/کدملی', value: user.nationalId },
    { label: 'نحوه ثبت‌نام', value: user.registrationMethod },
    { label: 'ایمیل', value: user.email },
    { label: 'تلفن همراه', value: user.mobile },
    { label: 'وضعیت تأیید', value: user.approvalStatus },
    { label: 'وضعیت', value: user.status },
  ];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          direction: 'rtl',
          borderRadius: 3,
        },
      }}
    >
      <DialogTitle sx={{ textAlign: 'left', pb: 1, fontWeight: 'bold' }}>
        اطلاعات کاربر: {user.username}
      </DialogTitle>
      <DialogContent sx={{ direction: 'rtl', textAlign: 'right', px: 3, py: 2 }}>
        <Box sx={{ mt: 1 }}>
          <Grid container spacing={1.5} direction="row-reverse">
            {fields.map((field) => (
              <Grid item xs={12} key={field.label}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 2,
                    flexDirection: 'row-reverse',
                    pb: 1,
                    borderBottom: '1px solid #eee',
                    minHeight: 42,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 'bold',
                      color: '#333',
                      textAlign: 'right',
                      minWidth: 120,
                    }}
                  >
                    {field.label}:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: 'left',
                      color: '#555',
                      wordBreak: 'break-word',
                      flex: 1,
                    }}
                  >
                    {field.value}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'flex-start', p: 2 }}>
        <Button onClick={onClose} variant="contained" sx={{ borderRadius: 2 }}>
          بستن
        </Button>
      </DialogActions>
    </Dialog>
  );
};
