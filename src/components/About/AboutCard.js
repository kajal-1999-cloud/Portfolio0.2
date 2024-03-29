import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import   "./About.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kajal Kumari Gupta </span>
            from <span className="purple"> Kolkata, India.</span>
            <br />
             I'm MERN stack developer and a passionate coder
            <br />
            {/* I have completed my Master's in Finance and Economics but  */}
            I explored the field of development and landed myself in the coding journey to become a coder, developer and problem solver
            <br />
            <br />
          
            <br />
            Apart from coding, some activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> classical dancing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Explore! Code! Develop! and Solve!"{" "}
          </p>
          <footer className="blockquote-footer">Kajal Gupta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;