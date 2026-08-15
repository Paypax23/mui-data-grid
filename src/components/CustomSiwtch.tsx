import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { Box } from '@mui/material';
import { WbSunnyOutlined, DarkModeOutlined } from '@mui/icons-material';
import React from 'react';

const StyledSwitch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    backgroundColor: '#ccc',
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
}));

interface CustomSwitchProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export const CustomSwitch = ({ checked, onChange, disabled }: CustomSwitchProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
      <WbSunnyOutlined sx={{ fontSize: 20, color: '#ff9800' }} />
      <StyledSwitch
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        size="small"
      />
      <DarkModeOutlined sx={{ fontSize: 20, color: '#424242' }} />
    </Box>
  );
};