const path = require("path");
const multer = require("multer");
const crypto = require("crypto");

const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp");
const UPLOAD_FOLDER = path.resolve(TMP_FOLDER, "uploads");


const MULTER = { 
    storage: multer.diskStorage({
        destination: TMP_FOLDER,
        filename(request, file, callback) {
            const fileHash = crypto.randomBytes(10).toString("hex"); //função criada usando crypto para gerar um hash, para dar um nome para o arquivo, é usado o hash para evitar que dois arquivos tenham nomes iguais 
            const filaName = `${fileHash}-${file.originalname}`;

            return callback(null, filaName);
        }

    })
};

module.exports = {
    TMP_FOLDER,
    UPLOAD_FOLDER,
    MULTER
};
