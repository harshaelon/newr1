import React, { useState } from 'react'
import axios from 'axios'
import { Link,useNavigate, useNavigation } from 'react-router-dom'
import img from "./img1.jpeg";
import ig from "./img2.jpeg";

export default function User() {

    const v1 = img;

    let navigate = useNavigate()
        const [user,setUser]=useState({
        name:"",
        comment:"",
        abt:"",
        hashtag:"",
        likes:"",
        place:""
    })

    const {name,comment,abt,hashtag,likes,place}=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    };

    const onSubmit= async (e) =>  {
        e.preventDefault()
        await axios.post("http://localhost:8080/user",user)
        navigate("/")
    };

  return (
    <div className='container'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Add post</h2>

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
                <label htmlFor='username' className='form-label'>
                    Place
                </label>
                <input
                 type={'text'}
                 className='form-control'
                 placeholder=''
                 name = 'place'
                 value={place}
                 onChange={(e)=>onInputChange(e)}
                
                
                />




            </div>
            <div className='mb-3'>
                <label htmlFor='likes' className='form-label'>
                    likes
                </label>
                <input
                 type={'text'}
                 className='form-control'
                 placeholder=''
                 name = 'likes'
                value={likes}
                onChange={(e)=>onInputChange(e)}
                />




            </div>


            
            
            <div className='mb-3'>
                <label htmlFor='cmt' className='form-label'>
                    Comments
                </label>
                <input
                 type={'text'}
                 className='form-control'
                 placeholder=''
                 name = 'comment'
                value={comment}
                onChange={(e)=>onInputChange(e)}
                />




            </div>
            
            <div className='mb-3'>
                <label htmlFor='about' className='form-label'>
                    about
                </label>
                <input
                 type={'text'}
                 className='form-control'
                 placeholder=''
                 name = 'abt'
                value={abt}
                onChange={(e)=>onInputChange(e)}
                />




            </div>
            
            <div className='mb-3'>
                <label htmlFor='hashtag' className='form-label'>
                    hashtag
                </label>
                <input
                 type={'select'}
                 className='form-control'
                 placeholder='enter your'
                 name = 'hashtag'
                value={hashtag}
                onChange={(e)=>onInputChange(e)}
                />




            </div>
            <div className='mb-3'>
                <label htmlFor='image' className='form-label'>
                    image
                </label>
                <input
                 type={'file'}
                 className='form-control'
                 placeholder='enter your'
                 name = ''
                value={null}
                onChange={(e)=>onInputChange(e)}
                />




            </div>
            {/* <button>
                <img src={img}></img>
            </button> */}
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
