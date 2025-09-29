import React from "react";
import { Col, Row } from "react-bootstrap";

// Data Science Icons
import { DiPython } from "react-icons/di";
import { SiNumpy, SiPandas, SiScikitlearn } from "react-icons/si";
import { MdOutlineShowChart } from "react-icons/md"; // For Matplotlib
import { FiBarChart } from "react-icons/fi"; // For Seaborn

// NEW: Web Development and General Programming Icons
import { DiJavascript1, DiJava, DiCss3, DiHtml5 } from "react-icons/di"; 

function Techstack() {
  return (
    // Ensure you are using a consistent class name for styling
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* ==================================== */}
      {/* NEW ICONS: Web Dev & General Programming */}
      {/* ==================================== */}
      
      {/* JavaScript */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      {/* Java */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

      {/* CSS */}
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>

      {/* HTML */}
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      
      {/* ==================================== */}
      {/* Existing Data Science Icons */}
      {/* ==================================== */}

      {/* Python */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

      {/* NumPy */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>

      {/* Pandas */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>

      {/* Scikit-learn */}
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>

      {/* Matplotlib (Visualization Icon) */}
      <Col xs={4} md={2} className="tech-icons">
        <MdOutlineShowChart />
        <p style={{ fontSize: "0.8em", marginTop: "5px" }}>Matplotlib</p>
      </Col>

      {/* Seaborn (Visualization Icon) */}
      <Col xs={4} md={2} className="tech-icons">
        <FiBarChart />
        <p style={{ fontSize: "0.8em", marginTop: "5px" }}>Seaborn</p>
      </Col>
      
    </Row>
  );
}

export default Techstack;
