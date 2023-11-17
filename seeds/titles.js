exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("titles").del()
  await knex("titles").insert([
    { id: 1, service_id: 1, title: "The Shawshank Redemption", genres: "Drama, Crime", rank: 1 },
    { id: 2, service_id: 1, title: "The Godfather", genres: "Crime, Drama", rank: 2 },
    { id: 3, service_id: 1, title: "The Dark Knight", genres: "Action, Crime, Drama", rank: 3 },
    { id: 4, service_id: 3, title: "Pulp Fiction", genres: "Crime, Drama", rank: 4 },
    { id: 5, service_id: 3, title: "Schindler's List", genres: "Biography, Drama, History", rank: 5 },
    { id: 6, service_id: 2, title: "Forrest Gump", genres: "Drama, Romance", rank: 6 },
    { id: 7, service_id: 1, title: "The Matrix", genres: "Action, Sci-Fi", rank: 7 },
    { id: 8, service_id: 2, title: "Inception", genres: "Action, Adventure, Sci-Fi", rank: 8 },
    { id: 9, service_id: 1, title: "Fight Club", genres: "Drama", rank: 9 },
    { id: 10, service_id: 1, title: "The Lord of the Rings: The Fellowship of the Ring", genres: "Action, Adventure, Drama, Fantasy", rank: 10 },
    { id: 11, service_id: 4, title: "Stranger Things", genres: "Drama, Fantasy, Horror, Mystery, Sci-Fi, Thriller", rank: 1 },
    { id: 12, service_id: 1, title: "Breaking Bad", genres: "Crime, Drama, Thriller", rank: 2 },
    { id: 13, service_id: 1, title: "Game of Thrones", genres: "Action, Adventure, Drama, Fantasy, Romance", rank: 3 },
    { id: 14, service_id: 2, title: "The Simpsons", genres: "Animation, Comedy", rank: 4 },
    { id: 15, service_id: 3, title: "Black Mirror", genres: "Drama, Sci-Fi, Thriller", rank: 5 },
    { id: 16, service_id: 3, title: "The Sopranos", genres: "Crime, Drama", rank: 6 },
    { id: 17, service_id: 1, title: "Stranger Things", genres: "Drama, Fantasy, Horror, Mystery, Sci-Fi, Thriller", rank: 7 },
    { id: 18, service_id: 1, title: "The Wire", genres: "Crime, Drama, Thriller", rank: 8 },
    { id: 19, service_id: 2, title: "Friends", genres: "Comedy, Romance", rank: 9 },
    { id: 20, service_id: 3, title: "Westworld", genres: "Drama, Mystery, Sci-Fi, Western", rank: 10 },
    { id: 21, service_id: 3, title: "The Crown", genres: "Biography, Drama, History", rank: 1 },
    { id: 22, service_id: 1, title: "The Big Bang Theory", genres: "Comedy, Romance", rank: 2 },
    { id: 23, service_id: 1, title: "Sherlock", genres: "Crime, Drama, Mystery, Thriller", rank: 3 },
    { id: 24, service_id: 1, title: "Mindhunter", genres: "Crime, Drama, Thriller", rank: 4 },
    { id: 25, service_id: 4, title: "The Mandalorian", genres: "Action, Adventure, Fantasy, Sci-Fi", rank: 5 }
  ]);
};
