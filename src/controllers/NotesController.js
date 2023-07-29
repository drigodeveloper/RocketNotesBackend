const knex = require("../database/knex");

class NotesConrtoller { 
    async create(request, response) {
        const { title, description, tags, links } = request.body;
        const { user_id } = request.params;

        const [note_id] = await knex("notes").insert({
            title,
            description, 
            user_id
        });

        const LinksInsert = links.map(link => {
            return {
                note_id,
                url: link
            }
        });

        await knex("links").insert(LinksInsert);

        const TagsInsert = tags.map(name => {
            return {
                note_id,
                name,
                user_id
            }
        });

        await knex("tags").insert(TagsInsert)
        response.json();
    };

    async show(request, response) {
        const { id } = request.params;

        const note = await knex("notes").where({ id }).first();
        const tags = await knex("tags").where({ note_id: id }).orderBy("name");
        const links = await knex("links").where({ note_id: id }).orderBy("created_at");

        return response.json({
            ...note,
            tags,
            links
        });
    }
}

module.exports = NotesConrtoller; 
                