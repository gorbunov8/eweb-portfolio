import React from "react";
import Typical from "react-typical";
import Button from "react-bootstrap/Button";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://github.com/gorbunov8" target="_blank">
              <i className="fa fa-github-square"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/vladyslavgorbunov/"
              target="_blank"
            >
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a
              href="https://www.xing.com/profile/Vladyslav_Gorbunov/cv"
              target="_blank"
            >
              <i className="fa fa-xing-square"></i>
            </a>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Vladyslav</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  steps={[
                    "Software Engineer",
                    1000,
                    "Product Designer",
                    1000,
                    "Student",
                    1000,
                    "Minimalist",
                    500,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </h1>
            </span>
          </div>
          <div className="profile-options">
            <Button class='custom-button' variant="outline-dark">Hire Me</Button>
            <a href ='cv.pdf' target="_blank">
            <Button class='custom-button' variant="outline-dark">Download CV</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
