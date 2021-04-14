import React, { useState } from "react";
import { saveNote } from "../core/apicalls";

const AddNote = ({ setReload = (f) => f, reload = undefined }) => {
  const [data, setData] = useState({
    title: "",
    content: "",
    loading: false,
    success: false,
    message: "",
  });

  const handleChange = (name) => (event) => {
    setData({ ...data, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!data.title || !data.content) {
      // both fields are mandatory and cannot be empty
      setData({
        ...data,
        loading: false,
        success: false,
        message: "Title and Content are mandatory fields. Please fill the info",
      });

      document.querySelector(".message").classList.add("error");

      return;
    }

    setData({ ...data, loading: true, message: "" });
    document.querySelector(".message").classList.remove("error");
    document.querySelector(".message").classList.remove("success");
    const note = { title: data.title, content: data.content };
    saveNote(note)
      .then((data) => {
        if (data.error) {
          setData({
            ...data,
            loading: false,
            success: false,
            message: data.message,
          });
          document.querySelector(".message").classList.add("error");
        } else {
          console.log("Successful");
          setData({
            ...data,
            loading: false,
            success: true,
            message: data.message,
            title: "",
            content: "",
          });
          document.querySelector(".message").classList.add("success");
          setReload(!reload);
        }
      })
      .catch((err) => {
        setData({
          ...data,
          loading: false,
          success: false,
          message: err,
          title: "",
          content: "",
        });
        document.querySelector(".message").classList.add("error");
      });
  };

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
        onChange={handleChange("title")}
        value={data.title}
      />
      <textarea
        id="content"
        name="content"
        placeholder="Your content goes here...&#10;Feel free to note anything and everything!"
        required
        rows="10"
        cols="50"
        onChange={handleChange("content")}
        value={data.content}
      />
      <input
        type="button"
        name="save"
        id="save"
        value={data.loading ? "Saving Note..." : "Save Note"}
        className="btn btn-primary btn-lg btn-save"
        onClick={onSubmit}
      />
      <p className="message"> {data.message} </p>
    </form>
  );
};

export default AddNote;
