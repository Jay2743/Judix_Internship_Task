import React from 'react'


function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__list">
                <li className='navbar__list--product'>Product</li>
                <li className='navbar__list--pricing'>Pricing</li>
                <li className='navbar__list--customers'>Customers</li>
                <li className='navbar__list--lawyerca'>Talk To Lawyer/CA</li>
            </div>
            <div className="navbar__loginSignup">
                <li className='navbar__loginSignup-btn'>Login/Sign Up</li>
               <button className='navbar__loginSignup-Lawyer-CA' >Lawyer/CA click here</button>
               
            </div>

        </div>
    )
}

export default Navbar