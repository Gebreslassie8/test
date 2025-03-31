import React, { useState, useEffect } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Student() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  // Fetch student list on page load
  useEffect(() => {
    axios
      .get("http://localhost:5000/student")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/create", { name, email })
      .then((res) => {
        console.log(res.data);
        setStudents([...students, { name, email }]); // Update UI immediately
        setMessage(res.data.message);// Set the success message
        setName(""); // Clear form fields
        setEmail("");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container mt-5">
              {/* Display success messages */}
         {message && <div className="alert alert-success">{message}</div>}
      
       {/* Bootstrap Form */}
      <div className="card p-4 shadow bg-secondary">
        <h3 className="text-center">Add New Data</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
               placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
           submit
          </button>
        </form>
      </div>
     
    </div>
  );
}

export default Student;
