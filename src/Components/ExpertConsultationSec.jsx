import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import IconButton from '@mui/material/IconButton';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Button from '@mui/material/Button';

function ExpertConsultationSec() {
  return (
    <>
      <div className="expertConsultation">
        <div className="expertConsultation_image">

        </div>
        <div className="expertConsultation_description">
          <h1>Expert Consultation</h1>
          <p>Get personalized legal and financial guidance from anywhere with our online platform connecting you to certified experts.</p>
          <li><span><CheckCircleIcon fontSize="small" color="success" style={{ marginRight: "5px", fontSize: "17px" }} /></span>   Expert guidance 24*7</li>
          <li> <span><CheckCircleIcon fontSize="small" color="success" style={{ marginRight: "5px", fontSize: "17px" }} /></span>  Experienced lawyers and chartered accountants from all over India</li>
          <li> <span><CheckCircleIcon fontSize="small" color="success" style={{ marginRight: "5px", fontSize: "17px" }} /></span> Get transcription and recordings of consultation for future reference</li>
          <div className='expertConsultation_Button'>
            <Button variant="contained">Learn More</Button>
          </div>
        </div>
      </div>
      <div className="iocn">
          <IconButton>
            <FiberManualRecordIcon />
            <FiberManualRecordIcon/>
          </IconButton>
        </div>
    </>
  )
}

export default ExpertConsultationSec