import './App.css';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { rtlTheme, rtlCache } from './theme/rtlTheme';
import { UsersPage } from './components/UsersPage';

function App() {
  return (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={rtlTheme}>
        <Box dir="rtl" sx={{ width: '100%', minHeight: '100vh', backgroundColor: '#fafafa' }}>
          <UsersPage />
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
