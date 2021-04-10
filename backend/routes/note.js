const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { addNote, getAllNotes } = require("../controllers/note");

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

module.exports = router;
