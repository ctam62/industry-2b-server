exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("services").del()
    await knex("services").insert([
        {
            id: 1,
            name: "Netflix",
            description: "Netflix is a popular streaming service offering a wide range of movies, TV shows, and original content."
        },
        {
            id: 2,
            name: "Hulu",
            description: "Hulu provides a diverse selection of streaming content, including current-season TV episodes, movies, and original programming."
        },
        {
            id: 3,
            name: "Amazon Prime Video",
            description: "Amazon Prime Video offers a vast library of movies, TV shows, and original series, available to Amazon Prime members."
        },
        {
            id: 4,
            name: "Disney+",
            description: "Disney+ is a family-friendly streaming service with a collection of Disney, Pixar, Marvel, Star Wars, and National Geographic content."
        }
    ]);
};