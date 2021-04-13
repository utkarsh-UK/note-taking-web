import React from "react";

const AddNote = () => {
  return (
    <form className="form">
      <h4>Add New</h4>
      <input
        type="text"
        placeholder="Add title here..."
        id="title"
        name="title"
        required
        className="input-title"
      />
      <textarea
        id="content"
        name="content"
        placeholder="Your content goes here...&#10;Feel free to note anything and everything!"
        required
        rows="10"
        cols="50"
      />
      <input
        type="button"
        name="save"
        id="save"
        value="Save Note"
        className="btn btn-primary btn-lg btn-save"
      />
    </form>
  );
};

export default AddNote;
