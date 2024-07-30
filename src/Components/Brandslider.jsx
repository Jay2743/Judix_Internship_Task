import React from 'react';
import { Box, Typography, Avatar, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';  // Ensure you import Swiper styles
import SwiperCore, { Pagination } from 'swiper/core';

// Install the Pagination module
SwiperCore.use([Pagination]);

const testimonials = [
  {
    text: "This is one of the best Legal Tech platforms I have ever used. This platform is the one stop solution that most startups should use for their legal and consultation purposes. Kudos to the brains behind this platform.",
    name: "Michael Siebel",
    title: "CEO, Y COMBINATOR",
    image: "../src/Asset/Slider_Image.png", 
  },
  {
    text: "This is one of the best Legal Tech platforms I have ever used. This platform is the one stop solution that most startups should use for their legal and consultation purposes. Kudos to the brains behind this platform.",
    name: "Michael Siebel",
    title: "CEO, Y COMBINATOR",
    image: "/path/to/your/image.png", 
  },
  {
    text: "This is one of the best Legal Tech platforms I have ever used. This platform is the one stop solution that most startups should use for their legal and consultation purposes. Kudos to the brains behind this platform.",
    name: "Michael Siebel",
    title: "CEO, Y COMBINATOR",
    image: "../src/Asset/Slider_Image.png"  , 
  },
  // Add more testimonials as needed
];

function Brandslider() {
  return (
    <Container>
      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} style={{display:"flex"}}>
            <Box
              sx={{
                display: 'flex',
                flexDirection:'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: 4,
                backgroundColor: '#AFAFAF',
                borderRadius: '10px',
                marginBottom:'5%',
                marginTop:'3%'
              }}
            >
              <Typography variant="h6" style={{fontSize:"20px"}} sx={{ mb: 2 }}>
                
                <q>{testimonial.text}</q>
              </Typography>
              <Avatar src={testimonial.image} sx={{ width: 80, height: 80, mb: 2 }} />
              <Typography variant="h6">{testimonial.name}</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {testimonial.title}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Brandslider;
