import { GoogleLogin,GoogleLogout } from 'react-google-login';
import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { AttractionsOutlined } from '@mui/icons-material';


const clientId="849129082731-qskc577e7efifla11i6av8b7t1j0bo6r.apps.googleusercontent.com";

function Login() {
    const onSuccess=(res)=>{
        console.log("Login Success! Chandra Harsha",res.profileObj);
    }

    const onFailure=(res)=>{
        console.log("Login Failed! res:",res);
    }
    const onSuccess1=()=>{
      alert("log out successfull");
  }

    return(


        
        <div id="signInButton">
            <>
            <MDBCard>
      <MDBCardImage position='top' alt='...' src='https://mdbootstrap.com/img/new/standard/city/062.webp' />
      <MDBCardBody>
        <MDBCardTitle>Profile</MDBCardTitle>
        <MDBCardText>
          Hey its harsha here, this is my instagram profile
        </MDBCardText>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem>Name: Harsha</MDBListGroupItem>
        <MDBListGroupItem>Age:21</MDBListGroupItem>
        <MDBListGroupItem>Posts: 4</MDBListGroupItem>
        <MDBListGroupItem>Following :2</MDBListGroupItem>
        <MDBListGroupItem>Followers : 5</MDBListGroupItem>
        <MDBListGroupItem>Bio: Interested in learning new things, carpedium and Explorer!</MDBListGroupItem>
      </MDBListGroup>
      <MDBCardBody>
        <Link to={'/adduser'}>Add Post</Link>
        <br></br>
        <Link to={'/edituser/:id'}>Edit Post</Link>
        <br></br>
        <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}/>
        <br></br>
        <Link to="/"><GoogleLogout
            clientId={clientId}
            buttonText={"logout"}
            onLogoutSuccess={onSuccess1}
            /></Link>
        
      </MDBCardBody>
    </MDBCard>



            </>
            {/* <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}/> */}
            </div>
    )
}

export default Login;