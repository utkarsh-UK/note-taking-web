import React from "react";
import "../css/landing.css";
import noteImage from "../images/notes.png";
import confettiiImage from "../images/confettii.png";

const Landing = () => {
  const leftPanel = () => {
    return (
      <div className="col-md-4 left-panel">
        <h1>enote</h1>
        <h4>Plan in analog,</h4>
        <h4>Spend in digital.</h4>
        <img src={confettiiImage} alt="Confettii" className="confettii" />
      </div>
    );
  };

  const rightPanel = () => {
    return (
      <div className="col-md-8 right-panel">
        <div className="promo">
          <h3>Welcome</h3>
          <h6>
            <em>enote</em> is a well designed note taking webapp for your day to
            day activities. Get started with your notes now.
          </h6>
          <img src={noteImage} alt="Take Notes" className="notes-img" />
          <button className="btn btn-primary btn-lg btn-start">
            Get Started
          </button>
        </div>
        <p>
          ❤ Designed & Developed by <em>Utkarsh Kore</em> ❤
        </p>
      </div>
    );
  };

  return (
    <div className="row">
      {leftPanel()}
      {rightPanel()}
    </div>
  );
};

export default Landing;
