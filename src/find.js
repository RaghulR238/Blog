import axios from 'axios';
import React, { useState } from 'react'

export default function Find() {
    const[title,setTitle]=useState();
    const[data1,setData]=useState();
    async function handleClick()
    {
      try{
        const res=await axios.get(`https://blog-backend-2svq.onrender.com/display/${title}`);
        setData(res.data); 
      }
      catch(err)
      {
        console.log(err.message);
      }
    }
    
  return (
    <div>
      <input type='text' onChange={(e)=>setTitle(e.target.value)}></input>
      <button onClick={handleClick}>find</button>
      {data1&&data1.map((blog_data)=>  //map function to map over many data
      {
        return(
        <div className='box'>
      <h1>{blog_data.title}</h1>
      <h1>{blog_data.content}</h1>
      <h1>{blog_data.author}</h1>
     
      </div>
        )
      }
      )}
    </div>
  )
}
