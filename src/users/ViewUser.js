import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import img1 from '../users/img1.jpeg'
import img2 from '../users/img2.jpeg'
import img3 from '../images/img3.jpg'
export default function ViewUser() {
    const [user,setUser] = useState({
        name:"",
        comment:"",
        abt:"",
        hashtag:"",
        likes:"",
        place:"",
        photo:""
    })

    const {id} =useParams();
    useEffect(()=> {
        loadUser();
    }, []);

    const loadUser = async ()=>
    {
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data);
    }







  return (
    <div className='container'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'> Post Details</h2>
            <div className='card'>
                <div className='card-header'>
                    Details of Post id:{user.id}
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <b>image:</b>
                            { <img src={img3} width={195} height={180}></img> }
                            {/* {user.photo} */}

                        </li>
                        <li className='list-group-item'>
                            <b>Comment :</b>
                            {user.comment}
                        </li>

                        <li className='list-group-item'>
                            <b>About :</b>
                            {user.abt}
                        </li>
                        <li className='list-group-item'>
                            <b>Hashtag :</b>
                            {user.hashtag}
                        </li>
                        <li className='list-group-item'>
                            <b>Likes :</b>
                            {user.likes}
                        </li>
                        <li className='list-group-item'>
                            <b>Place :</b>
                            {user.place}
                        </li>
                        
                     </ul>
                </div>
            </div>
            <Link className='btn btn-primary my-2' to={"/"}>Back to home</Link>
        </div>
    </div>
  );
}
