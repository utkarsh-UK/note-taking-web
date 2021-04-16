const { validationResult } = require("express-validator");

const Note = require("../models/note");

exports.addNote = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: errors.array()[0].msg,
      error: errors.array()[0].msg,
      param: errors.array()[0].param,
    });
  }

  const note = new Note(req.body);

  note.save((error, savedNote) => {
    if (error) {
      return res.status(400).json({ message: "Could not create note.", error });
    }

    return res.json({
      message: "Note created",
      note: {
        _id: savedNote._id,
        title: savedNote.title,
        content: savedNote.content,
      },
    });
  });
};

exports.updateNote = (req, res) => {
  Note.findByIdAndUpdate(
    req.params.noteid,
    req.body,
    { new: true },
    (err, updatedNote) => {
      if (err || !updatedNote) {
        return res
          .status(400)
          .json({ message: "Could not update note.", error: err });
      } else {
        return res.json({
          message: "Note has been updated",
          note: updatedNote,
        });
      }
    }
  );
};

exports.getAllNotes = (req, res) => {
  Note.find()
    .sort({ createdAt: "desc" })
    .select("_id title content createdAt")
    .exec((err, notes) => {
      if (err || !notes) {
        return res
          .status(400)
          .json({ message: "Could not fetch notes.", error: err });
      }

      return res.json({ message: "Successfully fetched all notes", notes });
    });
};

exports.getNote = (req, res) => {
  return res.json({ message: "Note fetched successfully", note: req.note[0] });
};

exports.deleteNote = (req, res) => {
  Note.findByIdAndDelete(req.params.noteid, {}, (err, note) => {
    if (err || !note) {
      return res
        .status(400)
        .json({ message: "Could not delete note.", error: err });
    } else {
      return res.json({
        message: "Note has been deleted",
        note: note,
      });
    }
  });
};

// Middlewares
exports.getNoteById = (req, res, next, id) => {
  Note.find({ _id: id })
    .select("_id title content createdAt")
    .exec((err, note) => {
      if (err || !note) {
        return res
          .status(400)
          .json({ message: "Could not fetch note.", error: err });
      }

      req.note = note;
      next();
    });
};
