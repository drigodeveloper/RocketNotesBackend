const { Router, response } = require("express");
const path = require("path");
const multer = require("multer");
const uploadConfig = require("../config/upload");

const UsersController = require("../controllers/UsersController");
const UserAvatarController = require("../controllers/UserAvatarController");
const ensureAuthentication = require("../middlewares/ensureAuthentication");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER)

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();


usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthentication, usersController.update);
usersRoutes.patch("/avatar", ensureAuthentication, upload.single("avatar"), userAvatarController.update);

module.exports = usersRoutes;