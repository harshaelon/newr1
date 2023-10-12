import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";
import { useParams } from "react-router-dom";

const Pricing = () => {
  const [profileName, setProfileName] = useState("");
  const [profileCell, setProfileCell] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [profileEmail, setProfileEmail] = useState("");
  const [name,setname]=useState("");
 const[username,setusername]=useState("");
 const[email,setemail]=useState("")
  const {id} =useParams();
  const [user,setUser] = useState({
    name:"",
    username:"",
    email:""
})

  const profileData = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data);
    }catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    profileData();
  }, []);

  return (
    <div>
      <button onClick={() => profileData()}>New Person</button>
      <div className="card">
        <img src={profileImage} style={{ width: "100%" }} />
        <h1>{name}</h1>
        <p className="title">{email}</p>
        <p>{username}</p>
        <p>
          <button>Contact</button>
        </p>
      </div>
    </div>
  );
};

export default Pricing;