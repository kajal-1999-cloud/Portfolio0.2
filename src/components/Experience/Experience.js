import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";
import AchievementCard from "./AchievementCard";
import { experienceData, achievementsData } from "./experienceData";
import "./Experience.css";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <section className="experience-block">
          <h1 className="project-heading">
            Work <strong className="purple">Experience</strong>
          </h1>
          {/* <p className="experience-intro" style={{textAlign: "center"}}>
            Production modules and client deliverables.
          </p> */}

          <Row className="experience-cards-row">
            {experienceData.map((item) => (
              <Col
                key={item.id}
                xl={5}
                lg={6}
                md={10}
                className="experience-col"
              >
                <ExperienceCard data={item} />
              </Col>
            ))}
          </Row>
        </section>

        <section className="achievements-block">
          <h1 className="project-heading">
            <strong className="purple">Achievements</strong>
          </h1>
          <p className="experience-intro">
            Milestones beyond code — problem solving, discipline, and growth.
          </p>

          <div className="achievements-scroll">
            {achievementsData.map((item) => (
              <AchievementCard key={item.id} data={item} />
            ))}
          </div>
        </section>
      </Container>
    </Container>
  );
}

export default Experience;
