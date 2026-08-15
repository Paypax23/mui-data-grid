import { Box } from "@mui/material";
import { TopBar } from "./TopBar";
import { RightIconDock } from "./RightIconDock";
import { useState } from "react";
import { Breadcrumb } from "./Breadcrumb";

export const AppShell = ({ children, onThemeChange }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = (darkMode) => {
    setIsDarkMode(darkMode);
    if (onThemeChange) {
      onThemeChange(darkMode);
    }
  };

  return (
    <Box
      sx={{ width: "95%", minHeight: "100vh", backgroundColor: "#eee" }}
      dir="rtl"
    >
      <TopBar onThemeToggle={handleThemeToggle} />

      <Box
        sx={{
          paddingRight: "100px",
          paddingX: 2,
          paddingY: 2,
          backgroundColor: "#eee",
        }}
      ></Box>
      <Breadcrumb />

      {children}

      <RightIconDock />
    </Box>
  );
};
