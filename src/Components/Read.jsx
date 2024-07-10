import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Read = () => {
    const [apidata,setApiData] = useState([]);
    const callApi = ()=>{
        axios.get("https://6672e6736ca902ae11b2480a.mockapi.io/Crud-new")
        .then((res)=>{
            // console.log(res.data)
            setApiData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const handleDelete = (id)=>{
           axios.delete(`https://6672e6736ca902ae11b2480a.mockapi.io/Crud-new/${id}`)
           .then(()=>{
            callApi();
           })
    }

    const setLocalStorage = (id,name,email)=>{
        localStorage.setItem("id",id);
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
    }

    useEffect(()=>{
        callApi();
    },[])
  return (
    <div className="p-4">
    {apidata.map((item, index) => (
      <div key={index} className="flex justify-between items-center p-2 border-b">
        <span>{item.id}</span>
        <span>{item.name}</span> 
        <span>{item.email}</span>
        <div>
        <NavLink to= "/">
                <button  onClick={()=>setLocalStorage(item.id,item.name,item.email)} className="bg-green-500 text-white p-1 mr-2">Add New</button>
            </NavLink>
            <NavLink to= "/update">
                <button  onClick={()=>setLocalStorage(item.id,item.name,item.email)} className="bg-yellow-500 text-white p-1 mr-2">Edit</button>
            </NavLink>
          <button onClick={()=>handleDelete(item.id)} className="bg-red-500 text-white p-1">Delete</button>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Read
