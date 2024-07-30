import React from 'react'
import Stack from '@mui/material/Stack';
import Brandslider from './Brandslider';
import Button from '@mui/material/Button';
import ComplienceProgress from './ComplienceProgress';
import ComplienceProgressOppositeComponent from './ComplienceProgressOppositeComponent';
import Card from './Card'
function Overview() {
    return (
        <>
            <div className="overView">
                <div className="overView_button">

                    <Stack direction="row" spacing={6}>
                        <Button variant="contained" style={{ backgroundColor: "#6986D9", fontSize: "10px", width: "262px", height: "50px" }}>Explore all products</Button>
                        <Button variant="contained" style={{ backgroundColor: "#7091A1", fontSize: "10px", width: "262px", height: "50px" }}>Talk to Experts</Button>
                    </Stack>
                </div>
                <div className="overView_heading">
                    <h1>All You need is <span className='overView_heading-span'>Judix</span></h1>
                </div>

            </div>
            <div className="complienceProgress1">
                <ComplienceProgress heading={"Designed to give you a peace of mind"} description={"Customers experience peace of mind knowing that we handle their legal complexities, allowing them to avoid the stress and burden of managing these issues themselves."} />
            </div>
            <div className='complienceProgress2'>
                <ComplienceProgressOppositeComponent heading={"Save time and reduce costs"} description={"We reduce the burden on founders by freeing up their time, resources, and mental bandwidth, allowing them to concentrate on their core operations and business growth."} />

            </div>
            <div className="complienceProgress3">
                <ComplienceProgress heading={"Unparalleled legal , guidance, and support"} description={"Unparalleled legal , guidance, and support"} />
            </div>

            <div className="judicComparison">
                <img src="../src/Asset/judixCompare.png" alt="" />

            </div>
            <div className="judixClients">
                <div className="judixClients_heading">
                    <h1>What our  <span className='judixClients-span'>users</span>say about us </h1>
                </div>
                
            </div>
            <div className="judixClients-slider">
                <Brandslider/>
            </div>
            <div className="displayCard">
            <Card/>
            </div>
              

        </>

    )
}

export default Overview