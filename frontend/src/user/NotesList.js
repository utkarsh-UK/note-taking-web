import React, { useState, useEffect } from "react";

import noDataImage from "../images/no-data.png";
import { getAllNotes } from "../core/apicalls";
import { Link } from "react-router-dom";

const moment = require("moment");

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    preFetchNotes();
  }, []);

  const preFetchNotes = () => {
    getAllNotes()
      .then((data) => {
        if (data.error) {
          setNotes([]);
        } else {
          setNotes(data.notes);
        }
      })
      .catch((error) => console.log(error));
  };

  const renderNotesList = () => {
    return (
      <ul className="mt-3">
        {notes.map((note, index) => (
          <li key={index}>
            <Link
              to={`/home/note/${note._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="note-tile">
                <h5 className="note-title"> {note.title} </h5>
                <p className="note-content">{note.content.slice(0, 200)}</p>
                <p className="note-date">
                  {" "}
                  {moment(new Date(note.createdAt)).format("ll")}{" "}
                </p>
              </div>
            </Link>
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

  return notes.length ? renderNotesList() : showNoNotes();
};

export default NotesList;
