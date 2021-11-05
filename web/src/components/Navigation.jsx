import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from '../pages/About';
import Home from '../pages/Home';

import React from 'react';

const Navigation = () => {
    return (
        <Router>
        <div>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                            <MenuIcon />
                        </IconButton>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            VTC
                        </Typography>

                        <Button>
                            <Link to="/" underline="none" className="lien_menu">Accueil</Link>
                        </Button>

                        <Button>
                            <Link to="/about" underline="none" className="lien_menu">About</Link>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />
          </Routes>
        </div>
        </Router>
    );
};

export default Navigation;