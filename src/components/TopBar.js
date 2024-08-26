import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    useTheme,
} from "@mui/material";
import React from "react";

const TopBar = ({ isDarkMode, handleToggleTheme }) => {
  const theme = useTheme(); // Access the current theme

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: isDarkMode
          ? theme.palette.background.paper
          : theme.palette.primary.main,
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          OneBox
        </Typography>
        <IconButton edge="end" color="inherit" onClick={handleToggleTheme}>
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
