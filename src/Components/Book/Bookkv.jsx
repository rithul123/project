import React, { useState } from 'react'


const Bookkv = () => {
    const[viewd,setViewdata]=useState([]);
    const readbookdata=(event)=>
    fetch("https://joyaljojo-69ea8-default-rtdb.firebaseio.com/book.json").then((response) =>{
    return response.json()
    }).then((data)=>{
    
       console.log(data);
       setViewdata(snapshotoArray(data));
    })
    function snapshotoArray(snapshot){
        const array=[];
        Object.keys(snapshot).foreach((key)=>{
            array.push(snapshot[key]);
        });
        return array;
    }
return(
<div>
    <input type='submit'></input>

    <table border="1">
        <tr> 
            <th>Bookname</th>
            <th>Author</th>
            <th>Publisher</th>
            </tr>
            {viewd.map((value,index)=>{
                return(
                    <tr keys={index}>
                    <td key={value.index}></td>
                    <td key={value.index}></td>
                    <td key={value.index}></td>
                    </tr>

                )
            })
            }
       
      </table>
    </div>
  
)
}


export default Bookkv
