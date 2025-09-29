import React from "react";
import { Col, Row } from "react-bootstrap";

// Icons from 'si' (Simple Icons)
import {
  SiVisualstudiocode, 
  SiSlack,            
  SiStreamlit,        
  SiVercel,           
  SiGooglecolab,     
} from "react-icons/si";

// Icons from 'di' (Devicons)
import {
  DiGithubBadge,      // NEW: GitHub
} from "react-icons/di";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {/* Visual Studio Code */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      
      {/* GitHub (New addition) */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge />
      </Col>
      
      {/* Slack */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      
      {/* Vercel */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      
      {/* Streamlit */}
      <Col xs={4} md={2} className="tech-icons">
        <SiStreamlit />
      </Col>

      {/* Google Colab (New addition, replacing Google Cloud) */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
