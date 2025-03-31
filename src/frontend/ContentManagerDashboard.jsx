
import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import { FaUpload, FaEdit, FaTrash, FaChartBar, FaBook, FaUser, FaSignOutAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pagecss/Content.css';

const ContentManagerDashboard = () => {
    return (
        <div className="dashboard">
            {/* Navbar */}
            <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
                <Navbar.Brand href="#">Content Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="ms-auto">
                        <Nav.Link href="#profile">
                             <FaUser />Profile
                        </Nav.Link>
                        <Nav.Link href="#logout">
                            <FaSignOutAlt />Logout
                        </Nav.Link>
                    </Nav> 
                </Navbar.Collapse>
            </Navbar>

            {/* Main Content */}
            <Container fluid className="mt-4">
                <Row>
                    {/* Sidebar */}
                    <Col md={3} className="sidebar bg-light p-3">
                        <Nav defaultActiveKey="#dashboard" className="flex-column">
                            <Nav.Link href="#dashboard" className="mb-2">
                                <FaChartBar /> Dashboard
                            </Nav.Link>
                            <Nav.Link href="#upload" className="mb-2">
                                <FaUpload /> Upload Content
                            </Nav.Link>
                            <Nav.Link href="#manage" className="mb-2">
                                <FaEdit /> Manage Content
                            </Nav.Link>
                            <Nav.Link href="#reports" className="mb-2">
                                <FaBook /> Reports
                            </Nav.Link>
                            <Nav.Link href="#profile" className="mb-2">
                                <FaUser /> Profile
                            </Nav.Link>
                            <Nav.Link href="#logout" className="mb-2">
                                <FaSignOutAlt /> Logout
                            </Nav.Link>
                        </Nav>
                    </Col>

                    {/* Dashboard Content */}
                    <Col md={9}>
                        <Row>
                            <Col md={4}>
                                <Card className="shadow p-3 mb-4">
                                    <Card.Body>
                                        <FaUpload size={40} className="text-primary" />
                                        <h5 className="mt-3">Upload New Content</h5>
                                        <p>Upload and categorize new resources.</p>
                                        <Button variant="primary">Go</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={4}>
                                <Card className="shadow p-3 mb-4">
                                    <Card.Body>
                                        <FaEdit size={40} className="text-warning" />
                                        <h5 className="mt-3">Manage Content</h5>
                                        <p>Edit, update, or delete existing resources.</p>
                                        <Button variant="warning">Go</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={4}>
                                <Card className="shadow p-3 mb-4">
                                    <Card.Body>
                                        <FaTrash size={40} className="text-danger" />
                                        <h5 className="mt-3">Delete Content</h5>
                                        <p>Remove outdated or irrelevant content.</p>
                                        <Button variant="danger">Go</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContentManagerDashboard;
