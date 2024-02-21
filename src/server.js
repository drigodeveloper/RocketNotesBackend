require("dotenv/config.js")
require("express-async-errors")
const express = require("express");
const uploadConfig = require("./config/upload.js")

const migrationsRun = require("./database/sqlite/migrations/index.js")

const routes = require("./routes/index.js");

const AppError = require("./utils/AppError.js");
const cors = require("cors")

const app = express();
app.use(cors());
app.use(express.json());

app.use("/files", express.static(uploadConfig.UPLOAD_FOLDER))

app.use(routes);

migrationsRun();

app.use((error, request, response, next) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }


    return response.status(500).json({
        status: "Error",
        message: "Internal server error",
    })
});

const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));