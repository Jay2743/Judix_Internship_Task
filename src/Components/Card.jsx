import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

function CustomCard() {
  return (
    <Card sx={{ maxWidth: 800, margin: 'auto', mt: 5, p: 3, borderRadius: 2, boxShadow: 3,mb:5, }} style={{justifyContent:"center"}}>
      <CardContent>
        <Typography variant="h4" component="div" gutterBottom style={{textAlign:'center'}}>
          Your Startup' s Legal Partner : <span style={{ color: '#FF9800' }}>Transparent</span>
        </Typography>
        <Typography variant="body1" color="textSecondary" style={{textAlign:"center",fontSize:"bold"}} sx={{ mb: 3 } }>
          Want to know more or have a chat?
        </Typography>
        <Box textAlign="center">
          <Button variant="contained" color="warning" sx={{ borderRadius: 25, px: 4 }}>
            Request a callback
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CustomCard;
