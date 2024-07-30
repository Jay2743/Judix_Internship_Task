import React from 'react';
import { Box, Typography, Button, IconButton, Grid, Link } from '@mui/material';
import { Email, Phone, Instagram, LinkedIn, Twitter, WhatsApp } from '@mui/icons-material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#0B2C4B', color: 'white', p: 3,padding:2, }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={3}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <img src="../src/Asset/judixlogo.png" alt="Logo" style={{ width: 200, marginTop: '30px' }} />
            <Button variant="outlined" sx={{ color: '#FF9800', borderColor: '#FF9800', textTransform: 'none',position:'absolute',left:'290px',top:'5230px' }}>
              Lawyer/CA click here
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography variant="h6" sx={{fontSize:'15px'}}>Plans & Pricing</Typography>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography variant="h6" sx={{fontSize:'15px'}}>Products</Typography>
          <Typography sx={{fontSize:'15px'}}>Features</Typography>
          <Typography sx={{fontSize:'15px'}}>Talk to a Lawyer</Typography>
          <Typography sx={{fontSize:'15px'}}>Talk to a CA</Typography>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography variant="h6" sx={{fontSize:'15px'}}>About Us</Typography>
          <Typography sx={{fontSize:'15px'}}>Contact Us</Typography>
          <Typography sx={{fontSize:'15px'}}>Careers</Typography>
        </Grid>
        <Grid item xs={12} sm={3} sx={{fontSize:'15px'}}>
          <Typography variant="h6" sx={{fontSize:'15px'}}><IconButton sx={{ color: '#7DB1D1' }}>
              <Phone />
            </IconButton>Request a Callback</Typography>
          <Typography sx={{fontSize:'15px'}}><IconButton sx={{ color: '#7DB1D1' }}>
              <Email />
            </IconButton>projectx@gmail.com</Typography>
          <Box sx={{ display: 'flex', mt: 1 }}>
            <IconButton sx={{ color: '#7DB1D1' }}>
              <Instagram />
            </IconButton>
            <IconButton sx={{ color: '#7DB1D1' }}>
              <WhatsApp />
            </IconButton>
            <IconButton sx={{ color: '#7DB1D1' }}>
              <LinkedIn />
            </IconButton>
            <IconButton sx={{ color: '#7DB1D1' }}>
              <Twitter />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ borderTop: '1px solid #ccc', mt: 3, pt: 2, textAlign: 'start',display: 'flex' }}>
        <Typography>2024 © Black Coat Technologies Pvt. Ltd. | All Rights Reserved</Typography>
        <Box sx={{  marginLeft:'auto', mt: 1 }}>
          <Link href="#" underline="none" sx={{ color: 'white', mx: 1 }}>
            Privacy Policy
          </Link>
          <Link href="#" underline="none" sx={{ color: 'white', mx: 1 }}>
            Terms & Conditions
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
