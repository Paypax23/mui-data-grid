import { Box, Paper, Avatar, Stack, Chip, Button } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { CustomSwitch } from "../CustomSiwtch.tsx";

export const TopBar = ({ onThemeToggle }) => {
  const theme = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme.palette.mode === "dark");

  const handleThemeToggle = (event) => {
    setIsDarkMode(event.target.checked);
    if (onThemeToggle) {
      onThemeToggle(event.target.checked);
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        position: "fixed",
        top: 4,
        borderRadius: "100px",
        left: 0,
        right: 30,
        width: "90%",
        height: "64px",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: 3,
        borderBottom: "1px solid #e0e0e0",
        zIndex: 1100,
        direction: "ltr",
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Button
          endIcon={<KeyboardArrowDown />}
          startIcon={
            <Box
              as="span"
              sx={{
                width: 12,
                height: 8,
                borderRadius: "2px",
                display: "inline-block",
              }}
            />
          }
          sx={{
            backgroundColor: "#eee",
            color: "#333",
            borderRadius: 22,
            textTransform: "none",
            fontSize: "14px",
          }}
        >
          کسب و کار فعال
        </Button>
        <Chip
          label="اطلاعات کاربران"
          variant="filled"
          sx={(theme) => ({
            backgroundColor: theme.palette.primary.main,
            color: "white",
            borderRadius: "20px",
          })}
        />
      </Stack>

      <Stack direction="row" spacing={1.5} alignItems="center">
        <CustomSwitch checked={isDarkMode} onChange={handleThemeToggle} />

        <Avatar
          sx={{
            width: 40,
            height: 40,
            backgroundColor: "#e0e0e0",
            fontSize: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          🇮🇷
        </Avatar>
      </Stack>
    </Paper>
  );
};
