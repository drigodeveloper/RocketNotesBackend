class SessionsController {
    async create(response, request) {
        const { email, password } = request.body

        return response.json({ email, password });
    }
};

module.exports = SessionsController;