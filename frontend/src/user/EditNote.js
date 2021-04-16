import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

import { fetchNote, updateNote, deleteNote } from "../core/apicalls";

const EditNote = ({ noteid = "" }) => {
  const [data, setData] = useState({
    title: "",
    content: "",
    loading: false,
    success: false,
    message: "",
  });

  useEffect(() => {
    preFetchNote(noteid);
  }, []);

  const preFetchNote = (id) => {
    if (!id) {
      return;
    }

    fetchNote(id)
      .then((noteData) => {
        if (noteData.error) {
          console.log("Error occured in Note fetching" + noteData.error);
        } else {
          console.log(noteData);
          setData({
            ...data,
            title: noteData.note.title,
            content: noteData.note.content,
          });
        }
      })
      .catch((error) => console.log(error));
  };

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
    const note = { title: data.title, content: data.content, _id: noteid };
    updateNote(note)
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
        }
      })
      .catch((err) => {
        setData({
          ...data,
          loading: false,
          success: false,
          message: err,
        });
        document.querySelector(".message").classList.add("error");
      });
  };

  const performRedirect = () => {
    if (data.success) {
      return <Redirect to="/home" />;
    } else {
      return <div></div>;
    }
  };

  const onDelete = () => {
    deleteNote(noteid)
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
          setData({
            ...data,
            loading: false,
            success: true,
            message: data.message,
            title: "",
            content: "",
          });
          document.querySelector(".message").classList.add("success");
        }
      })
      .catch((err) => {
        setData({
          ...data,
          loading: false,
          success: false,
          message: err,
        });
        document.querySelector(".message").classList.add("error");
      });
  };

  return (
    <form className="form">
      <div className="header">
        <h4> {data.title} </h4>
        <div className="controls">
          <i className="fas fa-trash fa-lg" onClick={onDelete}></i>
          <Link to="/home" style={{ color: "#603F8B" }}>
            <i className="fas fa-plus-circle fa-lg"></i>
          </Link>
        </div>
      </div>
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
        value={data.loading ? "Updating Note..." : "Edit Note"}
        className="btn btn-primary btn-lg btn-save"
        onClick={onSubmit}
      />
      <p className="message"> {data.message} </p>
      {performRedirect()}
    </form>
  );
};

export default EditNote;
