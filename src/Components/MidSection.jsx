import React from 'react'


function MidSection() {
    return (
        <>
            <div className="midSection">
                <div className="midSection_advertiseBanner">
                    <h2 className='midSection_heading'>Your Startup's legal partner. Simplified, transparent,
                        automated. <span className='midSection_heading-special'>From Start to Scale.</span></h2>
                    <p className='midSection_content'>The only end-to-end platform offering integrated legal solutions that combines human intelligence and technology to automate all your legal and taxation complexities and provides you with a peace of mind to focus on your startup.</p>
                    <button className='midSection_book_button'>Book a demo</button>
                    <div className="midSection_brands">

                        <h2 className='midSection_brands-heading'>TRUSTED BY STARTUPS <span className='midSection_brands-special'>LIKE YOURS</span></h2>

                        <div className="midSection_brands_images">
                            <img src='../src/Asset/Pwc_icon.png' alt="Pwc" className='midSection_brands_images-pwc' />
                            <img src="../src/Asset/Zerodha.png" alt="Zerodha" className='midSection_brands_images-zerodha' />
                            <img src="../src/Asset/Boat.png" alt="Boat" className='midSection_brands_images-boat' />
                            <img src="../src/Asset/Phone_pe.png" alt="PhonePe" className='midSection_brands_images-phonepe' />
                            <img src="../src/Asset/Rapido.png" alt="Rapido" className='midSection_brands_images-rapido' />
                            <img src="../src/Asset/Lenskart.png" alt="Lenskart" className='midSection_brands_images-lenskart' />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MidSection