import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaSearch, FaBook, FaSignOutAlt, FaBars } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className={`bg-dark text-white p-3 ${sidebarOpen ? "d-block" : "d-none d-md-block"}`} style={{ width: "250px", minHeight: "100vh" }}>
        <h4 className="text-center">Library System</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a href="#" className="nav-link text-white"><FaUser /> Profile</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white"><FaBook /> Resources</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white"><FaSignOutAlt /> Logout</a>
          </li>
        </ul>
      </div>
      
      {/* Main Content */}
      <div className="flex-grow-1 p-3" style={{ width: "100%" }}>
        <button className="btn btn-outline-dark d-md-none mb-3" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <h2>Welcome, User</h2>
        
        {/* Search Bar */}
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Search resources..." />
          <button className="btn btn-dark"><FaSearch /></button>
        </div>
        
        {/* Resource List */}
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Resource 1</h5>
                <p className="card-text">Description of the resource.</p>
                <button className="btn btn-primary">
                  <FontAwesomeIcon icon={faDownload} /> Download
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Resource 2</h5>
                <p className="card-text">Another useful resource.</p>
                <button className="btn btn-primary">
                  <FontAwesomeIcon icon={faDownload} /> Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
