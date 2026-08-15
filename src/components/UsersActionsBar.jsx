import React from 'react';
import {
  Box,
  Button,
  Stack,
} from '@mui/material';


export const UsersActionsBar = ({
  hasSelection,
  onAddClick,
  onViewDetailsClick,
  onEditClick,
  onDeleteClick,
}) => {
  const disabledButtons = [
    'گروه‌های عضو',
    'نقش‌ها',
    'طرح‌های کاربر',
    'بازنشانی رمز',
    'سوابق ورود',
    'تغییر وضعیت تایید',
    'تنظیم درگاه',
    'تغییر وضعیت',
  ];

  return (
    <Box sx={{ p: 2, backgroundColor: '#f9f9f9', borderRadius: 1 }}>
      <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={onAddClick}
          sx={{ mb: 1 }}
        >
          اضافه کردن
        </Button>

        {disabledButtons.map((label) => (
          <Button
            key={label}
            variant="outlined"
            disabled
            onClick={() => console.log(`${label} clicked`)}
            sx={{ mb: 1 }}
          >
            {label}
          </Button>
        ))}

        <Button
          variant="outlined"
          disabled={!hasSelection}
          onClick={onViewDetailsClick}
          sx={{ mb: 1 }}
        >
          اطلاعات بیشتر
        </Button>

        <Button
          variant="outlined"
          disabled={!hasSelection || true}
          onClick={onEditClick}
          sx={{ mb: 1 }}
        >
          ویرایش
        </Button>

        <Button
          variant="outlined"
          color="error"
          disabled={!hasSelection}
          onClick={onDeleteClick}
          sx={{ mb: 1 }}
        >
          حذف
        </Button>
      </Stack>
    </Box>
  );
};
