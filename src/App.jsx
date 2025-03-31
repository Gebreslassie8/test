
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import Global CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Import Reusable Components
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
// Import Pages
import Home from "./frontend/HomePage";
import About from "./frontend/AboutPage";
import Contact from "./frontend/ContactPage";
import LoginPage from "./frontend/LoginPage";
import Dashboard from "./frontend/Dashboard";
import UserDashboard from './frontend/UserDashboard';
import ContentManagerDashboard from "./frontend/ContentManagerDashboard";
//crude operation
import Student from "./frontend/Student";
import Create from "./frontend/Create";
import Update from "./frontend/Update";
import Read from "./frontend/Read";

function App() {
  return (
  
  <Router>
      <Navbar /> 
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/admindashboard" element={<Dashboard />} /> 
        <Route path="/userdashboard" element={<UserDashboard />} /> 
        <Route path="/contentdashboard" element={<ContentManagerDashboard />} />
        
            {/* crude operation bellow */}
        <Route path="/student" element={<Student />} />
        <Route path="/create" element={<Create />} />
        <Route path="/Update/:id" element={<Update />} />
        <Route path="/read/:id" element={<Read />} />
    </Routes>
      <Footer />
    </Router>
  );
}

export default App;
