exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('titles').del()
  await knex('titles').insert([
    { id: 1, title: "The Shawshank Redemption", genres: "Drama, Crime" },
    { id: 2, title: "The Godfather", genres: "Crime, Drama" },
    { id: 3, title: "The Dark Knight", genres: "Action, Crime, Drama" },
    { id: 4, title: "Pulp Fiction", genres: "Crime, Drama" },
    { id: 5, title: "Schindler's List", genres: "Biography, Drama, History" },
    { id: 6, title: "Forrest Gump", genres: "Drama, Romance" },
    { id: 7, title: "The Matrix", genres: "Action, Sci-Fi" },
    { id: 8, title: "Inception", genres: "Action, Adventure, Sci-Fi" },
    { id: 9, title: "Fight Club", genres: "Drama" },
    { id: 10, title: "The Lord of the Rings: The Fellowship of the Ring", genres: "Action, Adventure, Drama, Fantasy" }
  ]);
};
