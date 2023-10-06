import React, { useState } from 'react'
import './Logic.css'
import { Link } from 'react-router-dom';
const Logic = () => {
        const [usr,setUn] =useState('');
        const [pwd,setPs] =useState('');
        const[error,seterror]=useState('');
const readusername=(event) =>{
    event.preventDefault()
    console.log(event.target.value);
    setUn(event.target.value);
}
const readpassword=(event) =>{
    event.preventDefault()
    console.log(event.target.value);
    setPs(event.target.value);

}
const checkfilldata=(event) =>{
    event.preventDefault()
    if(usr.trim()===''|| pwd()==='')
    {
        seterror(true);
        return;
    }

}

  return (
    <div>
      <h1 className='ao'>SIGNIN</h1>
      <p className='aa'>
     
        <center>USERNAME:&nbsp;<input type="text"onChange={readusername}/></center><br></br>
        <center> PASSWORD:&nbsp;<input type="text"onChange={readpassword}/></center><br></br>
        
        <button class="btn success" onClick={checkfilldata}>LOGIN</button><br></br><br></br></p>
        <p className='ap'>
        {error && 'error occured'}
        </p>
    </div>
  )
}

export default Logic
