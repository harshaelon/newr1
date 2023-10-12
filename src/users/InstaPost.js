import React from "react";
import "./Box.css";
import { Card } from "react-bootstrap";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import img8 from "../images/img8.jpg";
import img9 from "../images/img9.jpg";
import { CardFooter, CardLink, CardText } from "reactstrap";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const InstaPosts = () => {
  const cardInfo = [
    {
      u1:"@jasbir",
      image: img3,
      title: "beautiful!",
      text: "the road way",
      text1:"well great game lads"
    },
    {
      u1:"@Alex",
      image:
        img4,
      title: "Alex Caruso",
      text: "THE TRUE GOAT",
    },
    {
      u1:"@step curry",
      image:
        "https://www.insidehook.com/wp-content/uploads/2020/03/steph-curry-nba-jam-e1583192954848.jpg?fit=734%2C488",
      title: "Steph Curry",
      text: "he good",
      text1:"well not bad i say!"
    },
    {
      u1:"Deepak",
      image:
        "https://i.pinimg.com/originals/03/ce/01/03ce015ea85dc84a17fb4c24a96cd87e.jpg",
      title: "Michael Jordan",
      text: "he is very close to goat",
      text1:"the jump we need to do!"
    },
    {

      u1:"Ankit",
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Lebron James",
      text: "THE GOAT",
      text1:"how i feel when i complete my work"
    },
    {
      u1:"james",
      image:
        img6,
      title: "Alex Caruso",
      text: "THE TRUE GOAT",
    },
    {
      image:
        "https://www.insidehook.com/wp-content/uploads/2020/03/steph-curry-nba-jam-e1583192954848.jpg?fit=734%2C488",
      title: "Steph Curry",
      text: "he good",
    },
    {
      image:
        "https://i.pinimg.com/originals/03/ce/01/03ce015ea85dc84a17fb4c24a96cd87e.jpg",
      title: "Michael Jordan",
      text: "he is very close to goat",
    },
    
  ];



  

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src={card.image}  />
        <Card.Body>
          <Card.Title>{card.u1}: {card.text1}</Card.Title>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
          
            

          
        </Card.Body>
        <CardFooter>
        <Popup trigger=
                {<button> Share to </button>}
                position="right center">
                <div>Deepak</div>
                <div>Kumar</div>
                <div>Sandeep</div>
                <div>Satya</div>

                <button>Click here</button>
            </Popup>
		
        <CardText>Like </CardText>
            <CardText> comment 1: {card.text1}</CardText>
            <CardLink> Comment</CardLink>
        </CardFooter>
      </Card>
    );
  };

  return <div className="grid">{cardInfo.map(renderCard)}</div>;
};

export default InstaPosts;