import { createTheme } from '@mui/material/styles';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';

export const rtlCache = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});


export const rtlTheme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: '"Vazirmatn", "Arial", sans-serif',
  },
  palette: {
    primary: {
      main: '#07657F',
    },
    success: {
      main: '#4caf50',
    },
    warning: {
      main: '#ff9800',
    },
    error: {
      main: '#f44336',
    },
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          direction: 'rtl',
        },
      },
    },
  },
});
