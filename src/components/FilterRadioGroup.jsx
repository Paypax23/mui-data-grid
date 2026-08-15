import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
} from '@mui/material';

export const FilterRadioGroup = ({ selectedFilter, onFilterChange }) => {
  const filterOptions = [
    { value: 'همه', label: 'همه' },
    { value: 'در انتظار تأیید ثبت‌نام', label: 'در انتظار تأیید' },
    { value: 'تأییدشده', label: 'تأییدشده' },
    { value: 'رد شده', label: 'رد شده' },
  ];

  return (
    <Box sx={{ mb: 3, p: 2, backgroundColor: '#fff', borderRadius: 5}}>
      <FormControl sx={{flexDirection:"row"}} component="fieldset">
        <FormLabel component="legend" sx={{ mb: 1 }}>
          نمایش انتخابی:
        </FormLabel>
        <RadioGroup
          row
          aria-label="approval-status-filter"
          name="approval-status-filter"
          value={selectedFilter}
          onChange={(e) => onFilterChange(e.target.value)}
        >
          {filterOptions.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
