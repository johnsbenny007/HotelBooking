import React, { useContext } from 'react';
import './Navbar.css'
import { AuthContext } from '../../context/AuthContext';

function Navbar() {
  const {user}=useContext(AuthContext);
  return (
    <div className='Navbar'>
        <div className='NavbarContainer'>
            <span className='NavbarTitle'>BookingApp</span>
            {user? user?.username :<div className='NavbarRegister'>
                <button className='Navbarbtn'>Register</button>
                <button className='Navbarbtn'>Login</button>
            </div>}
        </div>
    </div>
  )
}

export default Navbar
