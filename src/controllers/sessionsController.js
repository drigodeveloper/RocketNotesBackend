const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const { Compare, compare } = require("bcryptjs");
const authConfig = require("./config/auth")
const { sign } = require("jsonwebtoken");
const auth = require("./config/auth");

class SessionsController {
    async create(request, response) {
        const { email, password } = request.body

        const user = await knex("users").where({ email }).first();

        if(!user) {
            throw new AppError("Email e ou senha incorretas", 401)
        }

        const passwordChecked = await compare(password, user.password);

        if(!passwordChecked) {
            throw new AppError("E mail e ou senha incorreta", 401);
        }

        const { secret, expiresIn } = authConfig.jwt;
        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        })

        return response.json({ user, token });
    }
};

module.exports = SessionsController;


// { email, password }