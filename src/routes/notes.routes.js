const { Router } = require("express");

const NotesController = require("../controllers/NotesController")

const notesRoutes = Router();

const notesConrtoller = new NotesController();


notesRoutes.post("/:user_id", notesConrtoller.create);
notesRoutes.get("/:id", notesConrtoller.show);

module.exports = notesRoutes;