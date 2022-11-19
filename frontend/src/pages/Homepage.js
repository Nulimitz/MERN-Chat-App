import React from "react";
import { Container, Card, Row, Col, Tab, Nav } from "react-bootstrap";
import LoginForm from "../components/auth/LoginForm";
import SignupForm from "../components/auth/SignupForm";

const Homepage = () => {
  return (
    <>
      <div className="fullscreen">
        <Tab.Container defaultActiveKey="login">
          <Container>
            <Row className="justify-content-center align-items-center min-vh-100">
              <Col md={5}>
                <Card className="p-5">
                  <Nav className="nav-pills nav-fill pb-5">
                    <Nav.Item>
                      <Nav.Link eventKey="login">Log in</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="signup">Sign up</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="login">
                      <LoginForm />
                    </Tab.Pane>
                    <Tab.Pane eventKey="signup">
                      <SignupForm />
                    </Tab.Pane>
                  </Tab.Content>
                </Card>
              </Col>
            </Row>
          </Container>
        </Tab.Container>
      </div>
    </>
  );
};

export default Homepage;
