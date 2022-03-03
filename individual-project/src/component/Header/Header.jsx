import React from 'react';
import { Grid, Toolbar, Typography, IconButton, TextField, AppBar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <AppBar>
      <Toolbar variant="dense">
        <IconButton>
          <MenuIcon fontSize="large" color="action" />
        </IconButton>
        <Typography variant="h6">Photos</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
