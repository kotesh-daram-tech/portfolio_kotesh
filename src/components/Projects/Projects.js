import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Portfolio from "../../Assets/Projects/Portfolio.jpg";
import StudentInfo from "../../Assets/Projects/jewellery-project.jpg";

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
              imgPath={Portfolio}
              isBlog={false}
              title="Personal Portfolio"
              description="My personal portfolio which features some of my github projects as well as my resume and technical skills."
              ghLink="https://github.com/koteshdaram/"
              // demoLink="https://github.com/koteshdaram/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StudentInfo}
              isBlog={false}
              title="Sri Balaji jewellery project"
              description="This is php based Crud Operation project named sri balaji jewellery ster in which we perform crud operations on data like to add or register new customer, update bookings information and delete products etc..."
              ghLink="https://github.com/koteshdaram/"
              // demoLink="https://github.com/koteshdaram/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
