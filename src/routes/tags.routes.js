const { Router } = require("express");

const TagsController = require("../controllers/tagsController");
const ensureAuthentication = require("../middlewares/ensureAuthentication");

const tagsRouter = Router();

const tagsController = new TagsController();

tagsRouter.get("/", ensureAuthentication, tagsController.index);

module.exports = tagsRouter;