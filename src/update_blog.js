import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

export default function Update_blog() {
    const[title,settitle]=useState();
    const[content,setContent]=useState();
    const[author,setAuth]=useState();

    const location=useLocation();
    const id=location.state.data._id;
    async function handleClick()
    {
        console.log(id);
        try{
            console.log("yes");
            const res=await axios.put(`http://localhost:3001/updateBlog/${id}`,{
                title:title,
                content:content,
                author:author
            });
        }
        catch(err)
        {
            console.log("no");
            console.log(err.message);
        }
    }

  return (
    <div className='add_blog'>
        <label>Title</label>
      <input type='text' onChange={(e)=>settitle(e.target.value)}></input><br></br>
      <label>Content</label>
      <input type='text' onChange={(e)=>setContent(e.target.value)}></input><br></br>
      <label>Author</label>
      <input type='text' onChange={(e)=>setAuth(e.target.value)}></input><br></br>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}
