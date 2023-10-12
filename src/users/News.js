import React from "react";
import {
Card,CardBody,CardLink,CardTitle,
	
} from "reactstrap";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple,
    MDBBadge,
    MDBCardFooter,
    MDBRow,
    MDBCol,
    MDBIcon
  } from 'mdb-react-ui-kit';
import img from "./img1.jpeg";
import ig from "./img2.jpeg";


const Example = (props) => {
return (
	<div>
	<Card>
		<CardBody>
		<CardTitle tag="h5">Curioso Event! </CardTitle>
		<img
		width="50%"
		src={img}
		alt="Card image cap"
		/>
		
			
		<h3>
			prize distribution and the play
            The importance of being earnest - skit written by oscar wilde
		</h3>

		</CardBody>
		
		<CardBody>
		
		<CardLink href="https://www.geeksforgeeks.org/html-images/">
			To knbow more about us...
		</CardLink>

		</CardBody>
	</Card>

    <Card>
		<CardBody>
		<CardTitle tag="h5">3 rd Year exam schedule has been released</CardTitle>
		<img
		width="50%"
		src={ig}
		alt="Card image cap"
		/>
		
			
		<p>
			The exam schedule for 3rd year has been released
            
		</p>

		</CardBody>
		
		<CardBody>
		
		<CardLink href="https://www.geeksforgeeks.org/html-images/">
			To View the exam schedule...
		</CardLink>

		</CardBody>
	</Card>
    <>
    <Card>
		<CardBody>
		<CardTitle tag="h5">End semester practical examination starts from 2 nd of MAY</CardTitle>
		<MDBIcon icon='camera-retro' />
        <img
		width="50%"
		src="https://media.geeksforgeeks.org/wp-content/
			uploads/20210728115525/imggggg.png"
		alt="Card image cap"
		/>
		
			
		<p>
			The Best Data Structures Course Available Online From Skilled
			And Experienced Faculty. Learn Data Structures In A Live
			Classroom With The Best Of Faculty In The Industry.
			Classroom Experience.
		</p>

		</CardBody>
		
		<CardBody>
		
		<CardLink href="https://www.geeksforgeeks.org/html-images/">
			To knbow more about us...
		</CardLink>

		</CardBody>
	</Card>

    </>
    <>
    <Card>
		<CardBody>
		<CardTitle tag="h5">GFG Practice Portal </CardTitle>
		<img
		width="50%"
		src="https://media.geeksforgeeks.org/wp-content/
			uploads/20210728115525/imggggg.png"
		alt="Card image cap"
		/>
		
			
		<p>
			The Best Data Structures Course Available Online From Skilled
			And Experienced Faculty. Learn Data Structures In A Live
			Classroom With The Best Of Faculty In The Industry.
			Classroom Experience.
		</p>

		</CardBody>
		
		<CardBody>
		
		<CardLink href="https://www.geeksforgeeks.org/html-images/">
			To knbow more about us...
		</CardLink>

		</CardBody>
	</Card>

    </>
    
    <>
    {/* import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit'; */}


<h2>The Photography club of PTU invites for Participants to show their skillz! </h2>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/slides/041.webp'
            alt='...'
            position='top'
          />
          
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/nature/111.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/043.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  
    </>

	</div>
    
    
    
);
};

export default Example;
