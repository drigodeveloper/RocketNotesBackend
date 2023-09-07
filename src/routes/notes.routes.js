const { Router } = require("express");

const NotesController = require("../controllers/NotesController");
const ensureAuthentication = require("../middlewares/ensureAuthentication");

const notesRoutes = Router();

const notesConrtoller = new NotesController();

notesRoutes.use(ensureAuthentication)

notesRoutes.get("/", notesConrtoller.index);
notesRoutes.post("/", notesConrtoller.create);
notesRoutes.get("/:id", notesConrtoller.show);
notesRoutes.delete("/:id", notesConrtoller.delete);

module.exports = notesRoutes;

//criar a rota de tags