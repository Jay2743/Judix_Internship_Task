import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos, FiberManualRecord } from '@mui/icons-material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import GavelIcon from '@mui/icons-material/Gavel';

function Specification() {
    const [focusedIndex, setFocusedIndex] = useState(1);

    const items = [
        { icon: <ChatIcon style={{ fontSize: 40, color: '#2196f3' }} />, title: 'AI Legal Chatbot', content: 'Access instant legal guidance and support through an interactive AI legal chatbot available 24*7.' },
        { icon: <BusinessCenterIcon style={{ fontSize: 40, color: '#2196f3' }} />, title: 'Contracts Lifecycle', content: 'End to end lifecycle covering auto generation, collaboration, execution and management of contracts & agreements.' },
        { icon: <GavelIcon style={{ fontSize: 40, color: '#2196f3' }} />, title: 'Business & Licenses', content: 'Get your business registered as per government guidelines and obtain necessary licenses with ease.' },
    ];

    const handlePrevious = () => {
        setFocusedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 1));
    };

    const handleNext = () => {
        setFocusedIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div className="headDivSpecification">


            <div className="headDivSpecification_specificationSlider">
            <Typography variant="h6" component="h2" style={{ color:'#8F8D8E'  }}>
                        That's where we come
                    </Typography>
                <div className='headDivSpecification_specificationSlider-typo'>
                    <Typography variant="h5" component="h4" style={{ marginBottom: 20 }}>
                        Judix: The smarter way to manage your legal and financial matters.
                    </Typography>
                    <div className="headDivSpecification_specificationSlider-icon">
                        <IconButton onClick={handlePrevious} style={{ color: 'black', backgroundColor: '#DDDDDD ', marginRight: '5px', borderRadius: '3px' }}>
                            <ArrowBackIos />
                        </IconButton>
                        <IconButton onClick={handleNext} style={{ color: 'black', backgroundColor: '#DDDDDD', borderRadius: '3px' }}>
                            <ArrowForwardIos />
                        </IconButton>
                    </div>
                </div>

                <Box display="flex" justifyContent="center" alignItems="center">

                    <Grid container spacing={2} justifyContent="center">
                        {items.map((item, index) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                key={index}
                                style={{
                                    display: 'block',
                                    opacity: index !== focusedIndex ? '0.5' : '1',
                                    textAlign: 'center',
                                }}
                            >
                                <Card style={{ borderRadius: '25px' }} raised>
                                    <CardContent style={{ padding: '30px' }}>

                                        <Typography variant="h6" component="h1" style={{ color: '#2196f3', marginBottom: '10px' }}>
                                            {item.icon} {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{ textAlignLast: 'center', textAlign: 'center' }}>
                                            {item.content}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box display="flex" justifyContent="center" mt={2}>
                    {items.map((_, index) => (
                        <IconButton
                            key={index}
                            color={index === focusedIndex ? 'primary' : 'default'}
                            onClick={() => setFocusedIndex(index)}
                        >
                            <FiberManualRecord />
                        </IconButton>
                    ))}
                </Box>
            </div>
        </div>
    );
}

export default Specification;
