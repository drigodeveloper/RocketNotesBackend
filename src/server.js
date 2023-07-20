const express = require("express");
const database = require("./database/sqlite")
const routes = require("./routes/index.js");
const AppError = require("./utils/AppError.js");

const app = express();

app.use(express.json());

app.use(routes);
database();
app.use((error, request, response, next) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    console.error(error)
});

const PORT = 3332;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));