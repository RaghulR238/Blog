import axios from 'axios';
import React, { useState } from 'react'

export default function Add_blog() {
    const[title,settitle]=useState();
    const[content,setContent]=useState();
    const[author,setAuth]=useState();

    async function handleClick()
    {
        try{
            console.log("yes");
            const res=await axios.post("http://localhost:3001/createBlog",{
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
