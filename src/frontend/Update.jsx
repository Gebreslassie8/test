
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const [message, setMessage] = useState("");

  // Fetch the current student details on page load
  useEffect(() => {
    axios
      .get("http://localhost:5000/Update/" + id)
      .then((res) => {
        // Assuming API returns an object with keys Name and Email or name and email.
        const student = res.data;
        // Adjust property names based on backend response.
        setName(student.Name || student.name);
        setEmail(student.Email || student.email);
      })
      .catch((err) => console.log("Error fetching student details:", err));
  }, [id]);

  // Handle form submission to update student info
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/Update/" + id, { name, email })
      .then((res) => {
        console.log(res.data);
        setMessage(res.data.message);
        // Optionally clear form fields or redirect after update
      })
      .catch((err) => {
        console.error("Error updating student:", err);
      });
  };

  return (
    <div className="container mt-5">
      {/* Display success message */}
      {message && <div className="alert alert-success">{message}</div>}

      {/* Bootstrap Form */}
      <div className="card p-4 shadow bg-info">
        <h3 className="text-center">Update Data</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
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
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Update;
