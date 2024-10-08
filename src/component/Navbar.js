import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          Mohamed ElZehiri
        </a>
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
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cv">
                CV
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/interview-questions">
                Interview Questions
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
          </ul>

          {/* تحريك الأيقونات الاجتماعية إلى أقصى اليمين */}
          <div className="social-icons d-flex ms-auto align-items-center">
            <a
              className="nav-link"
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "10px" }} // إضافة هامش بين الأيقونات
            >
              <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff" }} />
            </a>
            <a
              className="nav-link"
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "10px" }} // إضافة هامش بين الأيقونات
            >
              <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffffff" }} />
            </a>
            <a
              className="nav-link"
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "10px" }} // إضافة هامش بين الأيقونات
            >
              <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff" }} />
            </a>
            <a
              className="btn btn-success ms-3 d-flex align-items-center"
              href="https://wa.me/yourwhatsapplink"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.8rem", padding: "0.2rem 0.5rem" }} // تقليل حجم الخط والبادنج
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                style={{ color: "#25D366", marginRight: "4px" }} // إضافة هامش بين الأيقونة والنص
              />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
