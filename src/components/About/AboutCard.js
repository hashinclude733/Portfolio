import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nikhilesh Pandey </span>
            from <span className="purple"> Uttarakhand, India.</span>
            <br /> I have a strong educational background in Computer Science and Engineering (CSE), having completed my B.Tech degree in the field.
            <br />
            With expertise in languages such as Java, JavaScript, Node.js, and React, I possess a solid foundation in both front-end and back-end development. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nikhilesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
