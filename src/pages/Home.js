import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import img from "../users/img2.jpeg";
import ig from "../users/img1.jpeg";
export default function Home() {
  
  const {id} = useParams()
  const [users,setUsers] =useState([])


  useEffect(()=>{
    loadUsers();
  },[]);

  const loadUsers = async() =>{
    const result = await axios.get("http://localhost:8080/users")
    setUsers(result.data);
  }

  const deleteUser = async(id)=>{
    await axios.delete(`http://localhost:8080/user/${id}`)
    loadUsers()
  }
    return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
        <thead>
    <tr>
      <th scope="col">s.no</th>
      <th scope="col">name</th>
      <th scope="col">abt</th>
      <th scope="col">comments</th>
      <th scope = "col">hashtag</th>
      <th scope = "col"> Action</th>
     
    </tr>
  </thead>
  <tbody>
    
      {
        users.map((user,index)=>(
            <tr>
                <th scope='row' key={index}>{index+1}</th>
                
                <td>{user.name}</td>
                <td>{user.abt}</td>
                <td>{user.comment}</td>
                <td>{user.hashtag}</td>
                {/* <td>{user.email}</td> */}

                {/* <td>{<img src={img} width={'10px'}></img>}</td> */}
                <td>
                  <Link className='btn btn-primary mx-2' to={`/viewUser/${user.id}`}>View</Link>
                  <Link className='btn btn-outline mx-2' to={`/edituser/${user.id}`}>
                    
                    Edit
                  
                  
                  
                  </Link>
                  <button className='btn btn-danger mx-2'
                  
                  onClick={()=>deleteUser(user.id)}
                  
                  >Delete</button>
                </td>

        </tr>
      ))
  } 
      

    
  </tbody>
</table>

        </div>




    </div>
  )
}
