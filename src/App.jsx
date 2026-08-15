import "./App.css";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { rtlTheme, rtlCache } from "./theme/rtlTheme";
import { UsersPage } from "./components/UsersPage";
import { AppShell } from "./components/layout/AppShell";
import { Breadcrumb } from "./components/layout/Breadcrumb";
import { Paper } from "@mui/material";

function App() {
  return (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={rtlTheme}>
        <Box  sx={{ width: "95%", minHeight: "100vh", backgroundColor: "#eee",marginX:'auto' }}>
          <AppShell>
            <Paper
              elevation={0}
              sx={{ bgcolor: "#fff", borderRadius: "20px" ,marginX:"auto"}}
            >
              <UsersPage />
            </Paper>
          </AppShell>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
