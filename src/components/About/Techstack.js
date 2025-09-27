import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython } from "react-icons/di";
import { SiNumpy, SiPandas, SiScikitlearn } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /> {/* placeholder for Matplotlib */}
        <p style={{ fontSize: "0.8em" }}>Matplotlib</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /> {/* placeholder for Seaborn */}
        <p style={{ fontSize: "0.8em" }}>Seaborn</p>
      </Col>
    </Row>
  );
}

export default Techstack;
