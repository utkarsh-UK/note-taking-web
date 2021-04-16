const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const {
  addNote,
  updateNote,
  getAllNotes,
  getNoteById,
  getNote,
  deleteNote,
} = require("../controllers/note");

router.param("noteid", getNoteById);

router.post(
  "/note/add",
  [
    check("title", "title should be min 3 char in length").isLength({ min: 3 }),
    check("content", "content should be min 10 char in length").isLength({
      min: 5,
    }),
  ],
  addNote
);

router.get("/notes/all", getAllNotes);

router.get("/notes/:noteid", getNote);
router.put("/notes/:noteid", updateNote);
router.delete("/notes/:noteid", deleteNote);

module.exports = router;
