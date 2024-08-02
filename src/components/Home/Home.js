import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/kjl12.jpeg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Tilt from "react-parallax-tilt";
import Type from "./Type";
import   "./style.css";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> KAJAL KUMARI GUPTA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={4} style={{ paddingBottom: 20 }}>
             <Tilt>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid my-3 mx-5"
                style={{ maxWidth: "340px", borderRadius:"220px" }}
              />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
