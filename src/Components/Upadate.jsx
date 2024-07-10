import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Update = () => {

    const navigate = useNavigate();
    const[id,setId] = useState(0);
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");

    useEffect(()=>{
       setId( localStorage.getItem("id"));
       setName( localStorage.getItem("name"));
       setEmail( localStorage.getItem("email"));
    },[])

    const handleAllSubmit = ()=>{
        axios.put(`https://6672e6736ca902ae11b2480a.mockapi.io/Crud-new/${id}`,{
            name:name,
            email:email
        })
        .then(()=>{
            navigate("/read");
        })
    }


  return (
    <div>
            <h1 className='text-center text-[30px] font-bold'>Update Operation</h1>
            <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col items-center mt-4">
                <input
                    type="text"
                    placeholder="Enter the name"
                    className="mb-2 p-2 border border-gray-400 rounded w-[50%]"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Enter the email"
                    className="mb-2 p-2 border border-gray-400 rounded w-[50%]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                />
                <button onClick={handleAllSubmit} type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Update
                </button>
                <NavLink to = "/read">
                    <button className='p-4 bg-green-400 mt-4 text-white rounded-lg'> Go Back</button>
                </NavLink>
            </form>
        </div>
  )
}

export default Update

