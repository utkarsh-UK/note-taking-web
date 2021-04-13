import React from "react";

import NotesList from "./NotesList";
import AddNote from "./AddNote";

const Home = () => {
  const leftPanel = () => {
    return (
      <div className="col-md-4 notes-section">
        <h1>enote</h1>
        <h4>Your Notes</h4>
        <NotesList />
      </div>
    );
  };

  const rightPanel = () => {
    return (
      <div className="col-md-8 add-note">
        <AddNote />
        <p className="footer-text">
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

export default Home;
