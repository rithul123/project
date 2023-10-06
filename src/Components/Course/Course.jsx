import React, { useState } from 'react'
import './Course.css'
const Course = () => {
const [cn,setUn] =useState('');
const [du,setPy] =useState('');
const [fee,setPl] =useState('');
    const readcoursename=(event) =>{
        console.log(event.target.value);
        setUn(event.target.value);
    
    }
    const readDuration=(event) =>{
        console.log(event.target.value);
        setPy(event.target.value);
    
    }
    const readfee=(event) =>{
        console.log(event.target.value);
        setPl(event.target.value);
    
    }
  return (
    <div>
      <form>
    <h1 className='ki'>STUDENT DETAILS</h1>
    <p className='ki'>
    COURSENAME:&nbsp;<input type='text'onChange={readcoursename}/><br></br>
    Duration:&nbsp;<input type='text'onChange={readDuration}/><br></br>
    Fee:&nbsp;<input type='text'onChange={readfee}/><br></br>  
    

    <button class="btn success">Login</button>
    
    </p></form>
    </div>
  )
}

export default Course
