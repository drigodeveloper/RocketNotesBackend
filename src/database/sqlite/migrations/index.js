const sqlConnections = require("../../sqlite");

const createUsers = require("./createUsers");

async function migrationsRun() {
    const schemas = [
        createUsers
    ].join('');
    sqlConnections()
    .then(db => db.exec(schemas))
    .catch(error => console.error(error));
}

module.exports = migrationsRun;