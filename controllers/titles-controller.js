const knex = require("knex")(require("../knexfile"));

const getTitleById = async (req, res) => {
    try {
        const titlesFound = await knex("titles")
            .where({ id: req.params.id });

        if (titlesFound.length === 0) {
            return res.status(404).json({
                message: `Title with ID ${req.params.id} not found`
            });
        }

        const titleData = titlesFound[0];
        res.json(titleData);
    } catch (error) {
        res.status(500).json({
            message: `Unable to retrieve title data for title with ID ${req.params.id}`,
        });
    }
}

const getAllTitles = async (_req, res) => {
    const { searchTitle } = _req.query;

    let query = knex("titles");

    if (searchTitle) {
        query = query.whereRaw('UPPER(title) LIKE ?', [`%${searchTitle.toUpperCase()}%`]);
    }

    try {
        const titles = await query;

        res.status(200).json(titles);
    } catch (error) {
        res.status(400).json({
            message: `Error retrieving titles: ${error}`,
        });
    }
};

const createTitle = async (req, res) => {
    if (!req.body.title) {
        return res.status(400).json({
            message: "Please provide a title in the request",
        });
    }

    try {
        const result = await knex("titles").insert(req.body);

        const newTitleId = result[0];
        const createdTitle = await knex("titles").where({ id: newTitleId });

        res.status(201).json(createdTitle);
    } catch (error) {
        res.status(500).json({
            message: `Unable to create new title: ${error}`,
        });
    }
}

const updateTitle = async (req, res) => {
    try {
        const rowsUpdated = await knex("titles")
            .where({ id: req.params.id })
            .update(req.body);

        if (rowsUpdated === 0) {
            return res.status(404).json({
                message: `Title with ID ${req.params.id} not found`
            });
        }

        const updatedTitle = await knex("titles")
            .where({
                id: req.params.id,
            });

        res.json(updatedTitle[0]);
    } catch (error) {
        res.status(500).json({
            message: `Unable to update title with ID ${req.params.id}: ${error}`
        });
    }
}

const deleteTitle = async (req, res) => {
    try {
        const rowsDeleted = await knex("titles")
            .where({ id: req.params.id })
            .delete();

        if (rowsDeleted === 0) {
            return res
                .status(404)
                .json({ message: `Title with ID ${req.params.id} not found` });
        }

        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message: `Unable to delete ttile: ${error}`
        });
    }
}

module.exports = {
    getTitleById,
    getAllTitles,
    createTitle,
    updateTitle,
    deleteTitle,
};