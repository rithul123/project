import React from 'react'
import './TransferData.css'
const TransferData = (props) => {
  return (
    <div>
      <h1 className='aa'>WELCOME</h1>
      <p className='aa'>
        Username: &nbsp;{props.username}
        <br></br>
        Password:&nbsp;&nbsp;{props.password} 
        <br></br>
        Usertype:&nbsp;&nbsp;{props.usertype} 
        </p>
    </div>
  )
}

export default TransferData
