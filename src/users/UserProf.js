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

export default function UserProf() {



    
  return (
    <MDBCard>
      <MDBCardImage position='top' alt='...' src='https://mdbootstrap.com/img/new/standard/city/062.webp' />
      <MDBCardBody>
        <MDBCardTitle>Profile</MDBCardTitle>
        <MDBCardText>
          Hey its harsha here, this is my profile
        </MDBCardText>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem>Name: Harsha</MDBListGroupItem>
        <MDBListGroupItem>Email: ChandraHarsha.kethavarapu@pec.edu</MDBListGroupItem>
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
        
      </MDBCardBody>
    </MDBCard>
  );
}