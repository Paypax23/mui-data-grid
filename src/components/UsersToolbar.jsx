import React from 'react';
import {
  Box,
  TextField,
  IconButton,
  Typography,
  Tooltip,
} from '@mui/material';
import {
  RefreshOutlined,
  CloudUploadOutlined,
  CloudDownloadOutlined,
  TuneOutlined,
  FilterListOutlined,
  SearchOutlined,
} from '@mui/icons-material';


export const UsersToolbar = ({ searchQuery, onSearchChange, filteredRowsCount }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: 2,
        p: 2,
        backgroundColor: '#f9f9f9',
        borderRadius: 1,
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', gap: 0.5 }}>
        <Tooltip title="تازه‌کنی">
          <IconButton
            size="small"
            onClick={() => console.log('Refresh clicked')}
            disabled
          >
            <RefreshOutlined />
          </IconButton>
        </Tooltip>
        <Tooltip title="بارگذاری">
          <IconButton
            size="small"
            onClick={() => console.log('Upload clicked')}
            disabled
          >
            <CloudUploadOutlined />
          </IconButton>
        </Tooltip>
        <Tooltip title="دانلود">
          <IconButton
            size="small"
            onClick={() => console.log('Download 1 clicked')}
            disabled
          >
            <CloudDownloadOutlined />
          </IconButton>
        </Tooltip>
        <Tooltip title="دانلود">
          <IconButton
            size="small"
            onClick={() => console.log('Download 2 clicked')}
            disabled
          >
            <CloudDownloadOutlined />
          </IconButton>
        </Tooltip>
        <Tooltip title="مرتب‌سازی و ستون‌ها">
          <IconButton
            size="small"
            onClick={() => console.log('Sort/Columns clicked')}
            disabled
          >
            <TuneOutlined />
          </IconButton>
        </Tooltip>
        <Tooltip title="فیلتر">
          <IconButton
            size="small"
            onClick={() => console.log('Filter clicked')}
            disabled
          >
            <FilterListOutlined />
          </IconButton>
        </Tooltip>
      </Box>

      <TextField
        size="small"
        placeholder="جستجو در نام خانوادگی/عنوان شرکت/کد ملی/شناسه ملی"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        InputProps={{
          startAdornment: <SearchOutlined sx={{ mr: 1, color: 'gray' }} />,
        }}
        sx={{
          flex: 1,
          minWidth: 300,
        }}
      />

      <Typography variant="body2" sx={{ whiteSpace: 'nowrap', color: '#666' }}>
        تعداد کل رکوردها: {filteredRowsCount}
      </Typography>
    </Box>
  );
};
