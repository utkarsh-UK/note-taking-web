import React from "react";
import { useParams } from "react-router-dom";

import NotesList from "./NotesList";
import EditNote from "./EditNote";

const FakeHome = () => {
  const { noteid } = useParams();

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
        <EditNote noteid={noteid} />
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

export default FakeHome;
