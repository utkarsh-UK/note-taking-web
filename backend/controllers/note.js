const Note = require("../models/note");
const { validationResult } = require("express-validator");

exports.addNote = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: errors.array()[0].msg,
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
