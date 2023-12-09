import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { PhoneIphone } from '@mui/icons-material';
import { logoutThunk } from 'redux/authOperations';
const pagesPublic = ['Home'];
const pages = ['Home', 'Contacts'];
export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { isLoggedIn, user } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const handleLogOutClick = () => {
    dispatch(logoutThunk());
  };

  const navigate = useNavigate();
  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = page => {
    setAnchorElNav(null);
    navigate(`${page.toLowerCase()}`);
  };
  const handleCloseBurger = () => {
    setAnchorElNav(null);
  };
  const handleLoginClick = () => {
    navigate('/login');
  };

  // const handleContactsShow = () => {
  //   navigate('/contacts');
  // };
  return (
    <div>
      {/* <Navigation /> */}
      {/* <NavLink to="/">Home</NavLink> */}
      {/* {isLoggedIn ? <UserMenu /> : <AuthNavigation />} */}

      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <PhoneIphone sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseBurger}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {isLoggedIn
                  ? pages.map(page => (
                      <MenuItem
                        key={page}
                        onClick={() => handleCloseNavMenu(page)}
                      >
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))
                  : pagesPublic.map(page => (
                      <MenuItem
                        key={page}
                        onClick={() => handleCloseNavMenu(page)}
                      >
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))}
              </Menu>
            </Box>
            <PhoneIphone sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {isLoggedIn
                ? pages.map(page => (
                    <Button
                      role="link"
                      key={page}
                      onClick={() => handleCloseNavMenu(page)}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page}
                    </Button>
                  ))
                : pagesPublic.map(page => (
                    <Button
                      role="link"
                      key={page}
                      onClick={() => handleCloseNavMenu(page)}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page}
                    </Button>
                  ))}
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' },
              }}
            >
              <Typography align="center" display="flex" alignItems="center">
                {isLoggedIn ? user.name : ''}
              </Typography>
              {isLoggedIn ? (
                <Button
                  onClick={handleLogOutClick}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  role="link"
                  onClick={handleLoginClick}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Login
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
