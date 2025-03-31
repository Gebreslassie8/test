import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './ResponsiveHome.css';  // Custom styles if needed

function ResponsiveHome() {
  return (
    <div className="container">
      {/* Header with responsive Bootstrap navbar */}
      <header className="mb-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">ICT-PARK</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Main content section */}
      <section className="my-4">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <h1 className="display-4">Welcome to ICT-PARK</h1>
            <p className="lead">
              Experience a responsive design built with React and Bootstrap. Discover our services and learn more about what ICT-PARK has to offer.
            </p>
            <button type="button" className="btn btn-primary">
              Learn More
            </button>
          </div>
          <div className="col-lg-6 col-md-12 text-center">
            <img 
              src="./images/ITpark2.png" 
              className="img-fluid" 
              alt="ICT-PARK showcase"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-light text-center py-4">
        <p className="mb-0">&copy; 2023 ICT-PARK. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ResponsiveHome;
