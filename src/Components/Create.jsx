import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
          e.preventDefault();
    }

    const handleAllSubmit = ()=>{
         axios.post('https://6672e6736ca902ae11b2480a.mockapi.io/Crud-new',{
            name:name,
            email:email,
         })
         .then(()=>{
          navigate("/read");
         })
    }
    return (
        <div>
            <h1 className='text-center text-[30px] font-bold'>Create Operation</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center mt-4">
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
                <button type="submit" onClick={handleAllSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">Submit
                </button>
                <NavLink to = "/read">
                    <button className='p-4 bg-pink-400 mt-4 text-white rounded-lg'> Show All Data</button>
                </NavLink>
            </form>
        </div>
    )
}

export default Create
