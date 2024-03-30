import React from "react";
import { Container, Row, Col, AccordionHeader } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import HighWaves from "../../assets/Highwaves.png";
import CryptoAstic from "../../assets/cryptoAstic.png";
import Shopping from "../../assets/shopping.png";
import ChatApp from "../../assets/chatroom_app.png";
import TodoBackend from "../../assets/Todo_Backend.png";
import ShoInfy from "../../assets/shopinfy.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HighWaves}
              title="HighWaves"
              description="High waves is an podcast app. where user can. create own podcast explore listen famous podcast ."
              ghLink="https://github.com/kajal-1999-cloud/podcast_app"
              demoLink="https://podcast-app-nine-red.vercel.app/home/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CryptoAstic}
              title="CryptoAstic"
              description="This website provides user information about the cypto market. user can analyze, compare, track the crypto coin."
              ghLink="https://github.com/kajal-1999-cloud/CryptoTracker"
              demoLink="https://crypto-tracker-five-sigma.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ShoInfy}
              title="ShopInfy"
              description="Ecommerce app using ReactJS, Redux, Firebase, RazorPay, Tailwind, Material UI, Context API . User can search their product, see the Description of the product, buy, pay . Products in the portal is added using Admin dashboard by firebase."
              ghLink ="https://github.com/kajal-1999-cloud/ShopInfy_Store"              
              demoLink="https://shop-infy-store-mo5u.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Shopping}
              title="My-Online-Store"
              description="It's an simple basic ecommerce store using HTML, CSS, JavaScript where user can explore products save their favourites and buy the products"
              ghLink="https://github.com/kajal-1999-cloud/Shoping_Cart2"
              demoLink="https://kajal-1999-cloud.github.io/Shoping_Cart2/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChatApp}
              title="Chat App"
              description="Its a simple real time chat app build using Socket.IO . user can chat realtime."
              ghLink="https://github.com/kajal-1999-cloud/Real_Time_Chat-App"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TodoBackend}
              title="Todo App Backend"
              description="A simple todo app made using nodeJS, expressJS, mongoDB, vueJS. it includes session base Authentication, rate Limiting0, functionality of add, delete, edit, show more,  logout, logout from all devices."
              ghLink="https://github.com/kajal-1999-cloud/Todo_backend"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;





























