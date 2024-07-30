import React from 'react'

function ComplienceProgressOppositeComponent(props) {
  return (
    <>
    <div className="complienceProgressStart">
      <div className="complienceProgress">
      
      <div className="complienceProgress_Image">
          <img src="../src/Asset/Complience_Progress.png" alt="" />
        </div>
        <div className="complienceProgress_Description">
          <h1 className='complienceProgress_Description-heading'>{props.heading}</h1>

          <p>{props.description}</p>
        </div>
        
      </div>
      </div>
    </>
  )
}

export default ComplienceProgressOppositeComponent