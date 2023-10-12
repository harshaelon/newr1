//import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import img from "./img1.jpeg";
import CardActions from "@material-ui/core/CardActions";
import ig from "./img2.jpeg";
import { CardLink } from "reactstrap";
//import { Link } from "react-router-dom";
import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link,useNavigate, useNavigation, useParams } from 'react-router-dom'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



export default function UserPhoto() {



  const {id} =useParams()
    let navigate = useNavigate()
        const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    })

    const {name,username,email}=user

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


  <form onSubmit={(e)=> onSubmit(e)}>
	<div style={{
        //display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>



	<h4>CollegeSphere News</h4>
	<Card style={{ width: 400 }} >
		<CardActionArea>
		<CardMedia
			alt="GeeksforGeeks"
			component="img"
			title="GeeksforGeeks"
			height="150"
			img src={ig}

		/>
    <CardContent>
			<Typography gutterBottom variant="h5" component="h2">
			Exam Schedule
			</Typography>
			<Typography variant="body2"
						color="textSecondary"
						component="p">
			Department of CSE			</Typography>
		</CardContent>
		</CardActionArea>
		<CardActions>
		<Button size="small" color="primary">
			Comment
		</Button>
		<Button size="small" color="primary">
			Share
		</Button>
    {/* <Link to={"/adduser"}>edit?

    </Link> */}
		
		</CardActions>
	</Card>
    
    <br></br>
    <div style={{
        //display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>
    <Card style={{ width: 400 }}>
		<CardActionArea>
		<CardMedia
			alt="GeeksforGeeks"
			component="img"
			title="GeeksforGeeks"
			height="150"
			img src={img}

		/>
		<CardContent>
			<Typography gutterBottom variant="h5" component="h2">
			Curioso
			</Typography>
			<Typography variant="body2"
						color="textSecondary"
						component="p">
			awesome play by students of PTU, a skit by Oscar Wilde</Typography>
		</CardContent>
		</CardActionArea>
		<CardActions>
		<Button size="small" color="primary">
			Comments
		</Button>
		<Button size="small" color="primary">
			Share
		</Button>
        <Button size="small" color="primary">
			Like
		</Button>
		<Popup trigger=
                {<button> Click to open popup </button>}
                position="right center">
                <div>GeeksforGeeks</div>
                <button>Click here</button>
            </Popup>
		
		</CardActions>
	</Card>
    </div>
    <div style={{
        //display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>
    <Card style={{ width: 400 }}>
		<CardActionArea>
		<CardMedia
			alt="GeeksforGeeks"
			component="img"
			title="GeeksforGeeks"
			height="150"
			img src={img}

		/>
		<CardContent>
			<Typography gutterBottom variant="h5" component="h2">
			GeeksforGeeks
			</Typography>
			<Typography variant="body2"
						color="textSecondary"
						component="p">
			Best Computer Science Portal #Best
			#CS #ComputerScience #website
			</Typography>
		</CardContent>
		</CardActionArea>
		<CardActions>
		<Button size="small" color="primary">
			Comment
		</Button>
		<Button size="small" color="primary">
			Share
		</Button>
        <Button size="small" color="primary">
			Like
		</Button>
		
		</CardActions>
	</Card>
    </div>
    
		<div style={{ margin: 100 }}>
            
			<h1 style={{ color: 'green' }}>GeeksforGeeks</h1>
			<h3><u>React MUI CardMedia API</u></h3>
        
			<Card raised={true} sx={{ maxWidth: 400 }}>
				<CardMedia
					component="img"
					height="100"
					image=
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png'
					alt="GFG Logo"
				/>
				<CardContent sx={{ bgcolor: "#E8E8E8" }}>
					<h3>DSA Self Paced Course</h3>
					<h4 style={{ color: "green" }}>
						Most popular course on DSA trusted by
						over 75,000 students! Built with years
						of experience by industry experts and
						gives you a complete package of video
						lectures, practice problems, quizzes,
						discussion forums and contests.<br />
						Start Today !
					</h4>
				</CardContent>
			</Card>
		</div>
	

    
	</div>
  </form>
);
}
// import React from "react";
// import {
// Card,CardBody,CardLink,CardTitle,
	
// } from "reactstrap";
// import {
//     MDBCard,
//     MDBCardBody,
//     MDBCardTitle,
//     MDBCardText,
//     MDBCardImage,
//     MDBBtn,
//     MDBRipple,
//     MDBBadge,
//     MDBCardFooter,
//     MDBRow,
//     MDBCol,
//     MDBIcon
//   } from 'mdb-react-ui-kit';
// import img from "./img1.jpeg";
// import ig from "./img2.jpeg";


// const  UserPhoto = (props) => {
// return (
// 	<div>
// 	<Card>
// 		<CardBody>
// 		<CardTitle tag="h5">Curioso Event! </CardTitle>
// 		<img
// 		width="50%"
// 		src={img}
// 		alt="Card image cap"
// 		/>
		
			
// 		<h3>
// 			prize distribution and the play
//             The importance of being earnest - skit written by oscar wilde
// 		</h3>

// 		</CardBody>
		
// 		<CardBody>
		
// 		<CardLink href="https://www.geeksforgeeks.org/html-images/">
// 			To knbow more about us...
// 		</CardLink>

// 		</CardBody>
// 	</Card>

//     <Card>
// 		<CardBody>
// 		<CardTitle tag="h5">3 rd Year exam schedule has been released</CardTitle>
// 		<img
// 		width="50%"
// 		src={ig}
// 		alt="Card image cap"
// 		/>
		
			
// 		<p>
// 			The exam schedule for 3rd year has been released
            
// 		</p>

// 		</CardBody>
		
// 		<CardBody>
		
// 		<CardLink href="https://www.geeksforgeeks.org/html-images/">
// 			To View the exam schedule...
// 		</CardLink>

// 		</CardBody>
// 	</Card>
//     <>
//     <Card>
// 		<CardBody>
// 		<CardTitle tag="h5">End semester practical examination starts from 2 nd of MAY</CardTitle>
// 		<MDBIcon icon='camera-retro' />
//         <img
// 		width="50%"
// 		src="https://media.geeksforgeeks.org/wp-content/
// 			uploads/20210728115525/imggggg.png"
// 		alt="Card image cap"
// 		/>
		
			
// 		<p>
// 			The Best Data Structures Course Available Online From Skilled
// 			And Experienced Faculty. Learn Data Structures In A Live
// 			Classroom With The Best Of Faculty In The Industry.
// 			Classroom Experience.
// 		</p>

// 		</CardBody>
		
// 		<CardBody>
		
// 		<CardLink href="https://www.geeksforgeeks.org/html-images/">
// 			To knbow more about us...
// 		</CardLink>

// 		</CardBody>
// 	</Card>

//     </>
//     <>
//     <Card>
// 		<CardBody>
// 		<CardTitle tag="h5">GFG Practice Portal </CardTitle>
// 		<img
// 		width="50%"
// 		src="https://media.geeksforgeeks.org/wp-content/
// 			uploads/20210728115525/imggggg.png"
// 		alt="Card image cap"
// 		/>
		
			
// 		<p>
// 			The Best Data Structures Course Available Online From Skilled
// 			And Experienced Faculty. Learn Data Structures In A Live
// 			Classroom With The Best Of Faculty In The Industry.
// 			Classroom Experience.
// 		</p>

// 		</CardBody>
		
// 		<CardBody>
		
// 		<CardLink href="https://www.geeksforgeeks.org/html-images/">
// 			To knbow more about us...
// 		</CardLink>

// 		</CardBody>
// 	</Card>

//     </>
    
//     <>
//     {/* import React from 'react';
// import {
//   MDBCard,
//   MDBCardImage,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBRow,
//   MDBCol
// } from 'mdb-react-ui-kit'; */}


// <h2>The Photography club of PTU invites for Participants to show their skillz! </h2>
//     <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
//       <MDBCol>
//         <MDBCard>
//           <MDBCardImage
//             src='https://mdbootstrap.com/img/new/slides/041.webp'
//             alt='...'
//             position='top'
//           />
          
//           <MDBCardBody>
//             <MDBCardTitle>Card title</MDBCardTitle>
//             <MDBCardText>
//               This is a longer card with supporting text below as a natural lead-in to additional content.
//               This content is a little bit longer.
//             </MDBCardText>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//       <MDBCol>
//         <MDBCard>
//           <MDBCardImage
//             src='https://mdbootstrap.com/img/new/standard/nature/111.webp'
//             alt='...'
//             position='top'
//           />
//           <MDBCardBody>
//             <MDBCardTitle>Card title</MDBCardTitle>
//             <MDBCardText>
//               This is a longer card with supporting text below as a natural lead-in to additional content.
//               This content is a little bit longer.
//             </MDBCardText>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//       <MDBCol>
//         <MDBCard>
//           <MDBCardImage
//             src='https://mdbootstrap.com/img/new/standard/city/043.webp'
//             alt='...'
//             position='top'
//           />
//           <MDBCardBody>
//             <MDBCardTitle>Card title</MDBCardTitle>
//             <MDBCardText>
//               This is a longer card with supporting text below as a natural lead-in to additional content.
//               This content is a little bit longer.
//             </MDBCardText>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//       <MDBCol>
//         <MDBCard>
//           <MDBCardImage
//             src='https://mdbootstrap.com/img/new/standard/city/044.webp'
//             alt='...'
//             position='top'
//           />
//           <MDBCardBody>
//             <MDBCardTitle>Card title</MDBCardTitle>
//             <MDBCardText>
//               This is a longer card with supporting text below as a natural lead-in to additional content.
//               This content is a little bit longer.
//             </MDBCardText>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//     </MDBRow>
  
//     </>
    
//       <h4>How to use CardMedia Component in ReactJS?</h4>
//       <Card style={{ width: 400 }}>
//         <CardActionArea>
//           <CardMedia
//             alt="GeeksforGeeks"
//             component="img"
//             title="GeeksforGeeks"
//             height="150"
//             image=
// "https://write.geeksforgeeks.org/static/media/Group%20210.08204759.svg"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//               GeeksforGeeks
//             </Typography>
//             <Typography variant="body2" 
//                         color="textSecondary" 
//                         component="p">
//               Best Computer Science Portal #Best
//               #CS #ComputerScience #website
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary">
//             Comment
//           </Button>
//           <Button size="small" color="primary">
//             Share
//           </Button>
//         </CardActions>
//       </Card>

// 	</div>
    
    
    
// );
// };

// export default UserPhoto;

