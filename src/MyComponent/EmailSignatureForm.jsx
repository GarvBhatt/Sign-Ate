import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import GeneratedSignature from "./GeneratedSignature";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    section: "",
    phone: "",
    email: "",
    socialMedia: {
      facebook: "",
      linkedin: "",
      twitter: "",
      instagram: "",
    },
    imageLink: "",
  });

  const [generatedSignature, setGeneratedSignature] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setFormData((prevData) => ({ ...prevData, [name]: value }));
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSocialMediaChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      socialMedia: { ...prevData.socialMedia, [name]: value },
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setGeneratedSignature(true);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">
        AITR Student Email Signature Generator
      </h2>

      <Form onSubmit={handleFormSubmit} className="bg-light rounded p-4 shadow">
        <Form.Group controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="department">
          <Form.Label>Department (e.g., CSIT, IOT)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="section">
          <Form.Label>Section (e.g., 1 for CSIT-1, IOT-1)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your section"
            name="section"
            value={formData.section}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="imageLink">
          <Form.Control
            type="text"
            placeholder="Enter your custom image link"
            name="imageLink"
            value={formData.imageLink}
            onChange={handleChange}
            className="d-none"
          />
        </Form.Group>

        <Row>
          <Col>
            <Form.Group controlId="facebook">
              <Form.Label>Facebook</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Facebook profile URL"
                name="facebook"
                value={formData.socialMedia.facebook}
                onChange={handleSocialMediaChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="linkedin">
              <Form.Label>LinkedIn</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your LinkedIn profile URL"
                name="linkedin"
                value={formData.socialMedia.linkedin}
                onChange={handleSocialMediaChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="twitter">
              <Form.Label>Twitter</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Twitter profile URL"
                name="twitter"
                value={formData.socialMedia.twitter}
                onChange={handleSocialMediaChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="instagram">
              <Form.Label>Instagram</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Instagram profile URL"
                name="instagram"
                value={formData.socialMedia.instagram}
                onChange={handleSocialMediaChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="mt-3">
          Generate Email Signature
        </Button>
      </Form>

      {/* {generatedSignature && <GeneratedSignature formData={formData} />} */}
    </div>
  );
};

export default StudentForm;
