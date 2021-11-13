import React, { useState, useEffect } from "react";
import {
  FaTwitterSquare,
  FaPhoneSquareAlt,
  FaFacebookSquare,
  FaInstagramSquare,
  FaSnapchatSquare,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { GiClockwork } from "react-icons/gi";
import { Col, Row, Container } from "react-bootstrap";
import "../styles/globalStyle.css";
export default function Footer(props) {
  return (
    <div className="footer-contaner">
      <Container fluid>
        <Row>
          <Col xs={7} className="icons mt-2">
            <MdEmail />
            email
          </Col>
          <Col className="icons mt-2">
            <FaFacebookSquare />
            Facebook
          </Col>
        </Row>
        <Row>
          <Col xs={7} className="icons">
            <FaPhoneSquareAlt /> 0501234567
          </Col>
          <Col className="icons">
            <FaInstagramSquare /> Instagram
          </Col>
        </Row>
        <Row>
          <Col xs={7} className="icons">
            <MdLocationOn />
            .loction
          </Col>
          <Col className="icons">
            <FaSnapchatSquare /> Snapchat
          </Col>
        </Row>
        <Row>
          <Col xs={7} className="icons">
            <GiClockwork />
            workHours
          </Col>
          <Col className="icons">
            <FaTwitterSquare />
            Twitter
          </Col>
        </Row>
        <Row>
          <Col xs={7} className="icons mt-2">
            Accessibility statement
          </Col>
          <Col className="icons mt-2">Terms&conditions</Col>
        </Row>
        <Row>
          <Col className="icons mb-1 mt-1 ml-4"></Col>
        </Row>
      </Container>
    </div>
  );
}
