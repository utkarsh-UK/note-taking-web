import React, { useState, useEffect } from "react";

import noDataImage from "../images/no-data.png";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  const getNotesList = () => {
    return (
      <ul className="mt-3">
        {notes.map((note, index) => (
          <li key={index}>
            <div className="note-tile">
              <h5 className="note-title">Lorem Ipsum</h5>
              <p className="note-content">
                Lorem Ipsum Dolor sit amet. Lorem Ipsum Dolor sit amet. Lorem
                Ipsum Dolor sit amet.Lorem Ipsum Dolor sit amet. Lorem Ipsum
                Dolor sit amet. Lorem Ipsum Dolor sit amet.
              </p>
              <p className="note-date">5th Mar, 2020</p>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  const showNoNotes = () => {
    return (
      <div className="empty-container">
        <img src={noDataImage} alt="Empty Notes" className="no-notes" />
        <h5>No notes yet!</h5>
        <h5>Get started by adding one</h5>
      </div>
    );
  };

  return notes.length ? getNotesList() : showNoNotes();
};

export default NotesList;
