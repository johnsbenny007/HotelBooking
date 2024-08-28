import React from 'react'
import './Maillist.css'
function Maillist() {
  return (
    <div className='Maillist'>
      <div className='MailContainer'>
        <div className='MailDetail'>
            <span>Save time,Save money</span>
            <p>Signup and we will send best details to you</p>
        </div>
        <div className='Mailbox'>
            <input placeholder='Your Mail' className='input' type='text'></input>
            <button className='subscribe'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Maillist
