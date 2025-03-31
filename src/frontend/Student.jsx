import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Student() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/student')
      .then(res => setStudents(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/delete/${id}`)
      .then(res => {
        console.log(res.data);
        window.location.reload();  // Use window.location instead of just location
      })
      .catch(err => console.log(err));
  };
  

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-4">
        <h3 className="text-center text-primary">Student List</h3>

        <div className="d-flex justify-content-start mb-3">
          <Link to="/create" className="btn btn-success">Add+</Link>
        </div>

        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((data, i) => (
              <tr key={i}>
                <td>{data.Name}</td>
                <td>{data.Email}</td>
                <td>
                  <Link to={`/Read/${data.Id}`} className="btn btn-success">Read</Link>
                  <Link to={`/Update/${data.Id}`} className="btn btn-primary ms-2">Update</Link>
                  <button onClick={() => handleDelete(data.Id)} className="btn btn-danger ms-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Student;

