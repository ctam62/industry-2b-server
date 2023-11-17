exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("services").del()
    await knex("services").insert([
        {
            id: 1,
            name: "Netflix",
            logo: "/logos/netflix.svg",
            description: "Netflix is a popular streaming service offering a wide range of movies, TV shows, and original content."
        },
        {
            id: 2,
            name: "Hulu",
            logo: "/logos/hulu.svg",
            description: "Hulu provides a diverse selection of streaming content, including current-season TV episodes, movies, and original programming."
        },
        {
            id: 3,
            name: "Amazon Prime Video",
            logo: "/logos/amazon.svg",
            description: "Amazon Prime Video offers a vast library of movies, TV shows, and original series, available to Amazon Prime members."
        },
        {
            id: 4,
            name: "Disney+",
            logo: "/logos/disney.svg",
            description: "Disney+ is a family-friendly streaming service with a collection of Disney, Pixar, Marvel, Star Wars, and National Geographic content."
        },
        {
            id: 5,
            name: "Stream-R",
            logo: "/logos/streamr.png",
            description: "Stream-r is your go-to family-friendly streaming service, providing a secure and delightful experience for enjoying a vast library of movies and TV shows in real-time, all while prioritizing privacy and security through cutting-edge blockchain technology."
        }
    ]);
};