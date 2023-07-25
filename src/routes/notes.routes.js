const { Router } = require("express");

const NotesConrtoller = require("../controllers/NotesConrtoller")

const notesRoutes = Router();

const notesConrtoller = new NotesConrtoller()


notesConrtoller.post("/:user_id", notesConrtoller.create);

module.exports = NotesConrtoller;