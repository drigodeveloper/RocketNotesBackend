const { Router } = require("express");

const NotesController = require("../controllers/NotesController")

const notesRoutes = Router();

const notesConrtoller = new NotesController();

notesRoutes.get("/", notesConrtoller.index);
notesRoutes.post("/:user_id", notesConrtoller.create);
notesRoutes.get("/:id", notesConrtoller.show);
notesRoutes.delete("/:id", notesConrtoller.delete);

module.exports = notesRoutes;