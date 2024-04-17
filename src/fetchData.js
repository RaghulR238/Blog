import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "./fetchData.css";
export default  function FetchData() {  //create a component
    const[data1,setData]=useState();    //usestate to store fetched data
 

    async function fetchData()      //async to sync the incoming data from server side
    {
        try{
            const res=await axios.get("https://blog-backend-2svq.onrender.com/displayAll");   //localhost3001 is the server port
            setData(res.data);              // store the data in state variable
            console.log(res.data);
        }
        catch(err)
        {
            console.log(err);
        }
    }

    useEffect(()=>{                     //useEffect to call function only once
        fetchData();
    },[])

    const navigate=useNavigate();

    async function handleDelete(blog_data)
    {
      try{
        console.log(blog_data);
        const delete_id=blog_data._id;
        const res=await axios.delete(`https://blog-backend-2svq.onrender.com/deleteBlog/${delete_id}`);
        fetchData();
      }
      catch(err){
        console.log(err.message);
      }
    }

 


  return (
    <div    >
        
      {data1&&data1.map((blog_data)=>  //map function to map over many data
      {
        return(
        <div className='box'>
      <h1>{blog_data.title}</h1>
      <h1>{blog_data.content}</h1>
      <h1>{blog_data.author}</h1>
      <button onClick={()=>handleDelete(blog_data)}>Delete</button>
      <button  onClick={() =>navigate("/update_blog", { state: { data: blog_data } })}>Update</button>
      </div>
        )
      }
      )}
    </div>
  )
}
