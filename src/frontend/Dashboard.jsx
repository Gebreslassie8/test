
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const userData = [
    { id: 1, name: "John Doe", role: "Admin" },
    { id: 2, name: "Alice Smith", role: "Content Manager" },
    { id: 3, name: "Bob Brown", role: "User" }
  ];

  const adminActivities = [
    "Added new user: Alice Smith",
    "Deleted resource: Sample.pdf",
    "Updated user role: Bob Brown to Content Manager",
    "Generated report: Monthly Downloads"
  ];

  const barData = {
    labels: ["Uploads", "Downloads", "Views"],
    datasets: [
      {
        label: "Content Analytics",
        backgroundColor: "#007bff",
        data: [50, 75, 100]
      }
    ]
  };

  return (
    <Container fluid className="p-4 bg-light min-vh-100">
      <Row>
        <Col md={3} className="bg-success text-white p-3">
          <h4>Admin Dashboard</h4>
          <ul className="list-unstyled">
            <li><Button variant="outline-light" className="w-100 my-2">Users</Button></li>
            <li><Button variant="outline-light" className="w-100 my-2">Content</Button></li>
            <li><Button variant="outline-light" className="w-100 my-2">Reports</Button></li>
            <li><Button variant="outline-light" className="w-100 my-2">Admin Activity</Button></li>
            <li><Button variant="outline-light" className="w-100 my-2">Admin Settings</Button></li>
          </ul>

          <h5 className="mt-4">Admin Activity</h5>
          <ul className="list-unstyled">
            {
            adminActivities.map((activity, index) => (
              <li key={index} className="border-bottom py-2">{activity}</li>
            ))
            }
          </ul>

          <h5 className="mt-4">Admin Settings</h5>
          <ul className="list-unstyled">
             <li><Button variant="outline-light" className="w-100 my-2">Change Profile</Button></li>
            <li><Button variant="outline-light" className="w-100 my-2">Change Password</Button></li>
            <li><Button variant="outline-light" className="w-100 my-2">Manage Roles</Button></li>
            <li><Button variant="outline-light" className="w-100 my-2">System Preferences</Button></li>
          </ul>
        </Col>

        <Col md={9}>
          <Row>
            <Col md={4}>
              <Card className="mb-4 shadow-sm">
                <Card.Body>
                  <h5>Users</h5>
                  <p>10 Active Users</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4 shadow-sm">
                <Card.Body>
                  <h5>Resources</h5>
                  <p>200 Files Uploaded</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4 shadow-sm">
                <Card.Body>
                  <h5>Downloads</h5>
                  <p>500 Total Downloads</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={8}>
              <Card className="shadow-sm">
                <Card.Body>
                  <h5>Analytics</h5>
                  <Bar data={barData} />
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="shadow-sm">
                <Card.Body>
                  <h5>Recent Users</h5>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userData.map((user) => (
                        <tr key={user.id}>
                          <td>{user.name}</td>
                          <td>{user.role}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
