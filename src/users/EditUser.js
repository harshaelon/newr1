import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link,useNavigate, useNavigation, useParams } from 'react-router-dom'

export default function EditUser() {

    const {id} =useParams()
    let navigate = useNavigate()
        const [user,setUser]=useState({
        name:"",
        comment:"",
        abt:"",
        hashtag:"",
        likes:"",
        place:""
    })

    const {name,hashtag,place}=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    };
    useEffect (()=>{
        loadUser();
    },[]);

    const onSubmit= async (e) =>  {
        e.preventDefault()
        await axios.put(`http://localhost:8080/user/${id}`,user)
        navigate("/")
    };


    const loadUser = async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

  return (
    <div className='container'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Edit User</h2>

        <form onSubmit={(e)=> onSubmit(e)}>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>
                    Name
                </label>
                <input
                 type={'text'}
                 className='form-control'
                 placeholder='enter your name'
                 name = 'name'
                 value={name}
                 onChange={(e)=>onInputChange(e)}
                
                
                />




            </div>
            <div className='mb-3'>
                <label htmlFor='hashtag' className='form-label'>
                    Hashtag
                </label>
                <input
                 type={'text'}
                 className='form-control'
                 placeholder='enter your U-name'
                 name = 'hashtag'
                 value={hashtag}
                 onChange={(e)=>onInputChange(e)}
                
                
                />




            </div>
            <div className='mb-3'>
                <label htmlFor='place' className='form-label'>
                    Place
                </label>
                <input
                 type={'text'}
                 className='form-control'
                 placeholder='enter your email'
                 name = 'place'
                value={place}
                onChange={(e)=>onInputChange(e)}
                />




            </div>
            <button className='btn btn-outline-primary'>
                Submit
            </button>

            <Link className='btn btn-outline-danger ' to="/">
            Cancel
            </Link>


        </form>
        </div>

    </div>
    )
}
