import React from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import { useSignOut} from 'react-auth-kit';

interface AppHeaderProps {
    logo_url: string;
}

export const AppHeader = ({logo_url}: AppHeaderProps) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  // const  signOut  = useSignOut();

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // signOut();
    handleClose();
  };

  return (
    <div>
      <AppBar position="static" color="primary" sx={{ backgroundColor: '#000' }}>
        <Toolbar className="flex justify-between">
          <img src={logo_url} alt="Logo" className="mr-8 h-12 w-12" />
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Button variant="outlined" color="secondary" sx={{ borderColor: '#000' }}>Profile</Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button variant="outlined" color="secondary" sx={{ borderColor: '#000' }}>My account</Button>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <Button variant="outlined" color="secondary" sx={{ borderColor: '#000' }}>Logout</Button>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppHeader;
