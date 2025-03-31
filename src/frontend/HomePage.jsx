
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
const HomePage = () => {
  return (
    <div>
      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/ITpark1.png"
            alt="First slide"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Welcome to Our Website</h3>
            <p>Explore our services and features.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/ITpark2.png"
            alt="Second slide"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Explore Our Features</h3>
            <p>Innovative solutions for your needs.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/ITpark3.jpg"
            alt="Third slide"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Join Us Today</h3>
            <p>Start your journey with us now.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Main Content */}
      <Container className="mt-4">
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/500x300?text=Card+Image+1" />
              <Card.Body>
                <Card.Title>Card Title 1</Card.Title>
                <Card.Text>
                  This is a short description of the card. Learn more about this service.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/500x300?text=Card+Image+2" />
              <Card.Body>
                <Card.Title>Card Title 2</Card.Title>
                <Card.Text>
                  This is a short description of the card. Learn more about this service.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/500x300?text=Card+Image+3" />
              <Card.Body>
                <Card.Title>Card Title 3</Card.Title>
                <Card.Text>
                  This is a short description of the card. Learn more about this service.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <h2>Why Choose Us?</h2>
            <p>
              We provide exceptional service with a customer-centric approach. Our innovative solutions are designed to help you succeed.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
