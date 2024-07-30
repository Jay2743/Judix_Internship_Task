import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ComputerIcon from '@mui/icons-material/Computer';

function Slider() {
    const [focusedIndex, setFocusedIndex] = useState(0);

    const items = [
        { icon: <BusinessCenterIcon style={{ fontSize: 40, color: '#2196f3' }} />, content: 'Current processes are inefficient, resulting in wasted time and resources, as well as a lack of accountability.' },
        { icon: <ComputerIcon style={{ fontSize: 40, color: '#2196f3' }} />, content: 'Lack of digitization and excessive reliance on outdated tools such as MS Excel, Word, and emails.' },
    ];

    return (
        <div className="cardSlider">
            <Typography variant="h4" component="h3" className="cardSlide_heading" style={{marginTop:'30px', fontSize: '24px'}}>
                Managing legal affairs is complicated!
            </Typography> 
            <Box display="flex" justifyContent="center" mb={2} style={{marginTop:'40px'}}>
                <Grid container spacing={2} justifyContent="center">
                    {items.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Card raised={index === focusedIndex} style={{ width: '100%', maxWidth: 500, textAlign: 'center' , borderRadius:'25px',padding:'10px' }}>
                                <CardContent>
                                    {item.icon}
                                    <Typography variant="body2" color="text.secondary" style={{marginTop:'30px',fontSize:'18px'}}>
                                        {item.content}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box display="flex" justifyContent="center">
                {items.map((_, index) => (
                    <IconButton
                        key={index}
                        color={index === focusedIndex ? 'primary' : 'default'}
                        onClick={() => setFocusedIndex(index)}
                    >
                        <FiberManualRecordIcon />
                    </IconButton>
                ))}
            </Box>
        </div>
    );
}

export default Slider;
