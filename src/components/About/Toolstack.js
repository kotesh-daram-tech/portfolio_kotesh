import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiMacos,
  SiVisualstudiocode,
  SiPostman,
  SiApachenetbeanside,
  // SiIntellijidea,

} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachenetbeanside />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
     
      
    </Row>
  );
}

export default Toolstack;