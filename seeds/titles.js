exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('titles').del()
  await knex('titles').insert([
    { id: 1, title: "The Shawshank Redemption" },
    { id: 2, title: "The Godfather" },
    { id: 3, title: "The Dark Knight" },
    { id: 4, title: "Pulp Fiction" },
    { id: 5, title: "Schindler's List" },
    { id: 6, title: "Forrest Gump" },
    { id: 7, title: "The Matrix" },
    { id: 8, title: "Inception" },
    { id: 9, title: "Fight Club" },
    { id: 10, title: "The Lord of the Rings: The Fellowship of the Ring" }
  ]);
};
