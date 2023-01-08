import React, { useState } from 'react';
import "./Navbar.css";
import { AppBar, Box, createTheme, Divider, Drawer, IconButton, List, ThemeProvider, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff"
    }
  }
});


const Navbar = (props) => {
  const [mobileOpen, setMobileOpen] = useState (false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <NavLink to="/">
          
          <img
            src="https://www.almabetter.com/_next/image?url=https%3A%2F%2Falmablog-media.s3.ap-south-1.amazonaws.com%2Flogo1_edfc81b31b.png&w=256&q=75"
            height="30px"
            alt="Logo"
          />
        </NavLink>
      </Typography>
      <Divider />
      <List
        className="drawerLinks"
        sx={{
          display: "flex",
          textAlign: "left",
          paddingLeft: "20px",
          flexDirection: "column",
        }}>
        <NavLink className="nav-link" to="/" color="inherit">
          Resume Templates
        </NavLink>
        <NavLink to="/my/resumes" className="nav-link" color="inherit">
          My Resumes
        </NavLink>
        <NavLink to="/about-us" color="inherit" className="nav-link">
          About us
        </NavLink>
      </List>
    </Box>
  );

  return (

    <>
      <Box sx={{ display: "flex"  }}>
        <ThemeProvider theme={theme}  >
          <AppBar  className='Appbar' sx={{ boxShadow: "5" }} >
            <Toolbar >
              <IconButton color='inherit' id='icon' onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }} >
                <MenuIcon />
              </IconButton>

              <Typography variant='h6' sx={{ 
                flexGrow: 1,
                display: { sm: "block" },
                fontSize: "25px",
                position: "relative",
                top: "5px",
              }}>
                <NavLink to="/">
                  
                  <img
                    src="http://resumewritingninja.com/wp-content/uploads/2021/08/High_Resolution-011-scaled-e1630103992865.jpg"
                    height="30px"
                    alt="Logo" />
                </NavLink>
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <NavLink to="/" className="nav-link" color="inherit">
                  Resume Templates
                </NavLink>
                <NavLink to="/my/resumes" className="nav-link" color="inherit">
                  My Resumes
                </NavLink>
                <NavLink to="/about-us" className="nav-link aboutUs" color="inherit">
                  About Us
                </NavLink>
              </Box>

            </Toolbar>

          </AppBar>
        </ThemeProvider>
        <Box >
          <Drawer 
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepmounted: true
            }} sx={{
              display: { xs: "block", sm: "none" },
              
            }}>
            {drawer}
          </Drawer>
        </Box>

      </Box>
    </>
  )
}

export default Navbar