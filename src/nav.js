import React from 'react';
import "./navbar.css";
import {useNavigate} from "react-router-dom"

export default function Nav() {
  const  navigate=useNavigate();  
  return (
    <div className='nav'>
      <h1>Blogging Website</h1>
      <div className='navcontent'>
        <h1>Home</h1>
        <h1 onClick={()=>navigate('/find')}>Find</h1>
        <h1 onClick={()=>navigate('/add_blog')}>Add Blog</h1>
      </div>
    </div>
  )
}
