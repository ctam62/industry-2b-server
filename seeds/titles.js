exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("titles").del()
  await knex("titles").insert([
    { id: 1, service_id: 1, title: "The Shawshank Redemption", genres: "Drama, Crime", rank: 1, img: "/images/TheShawshankRedemption.jpeg" },
    { id: 2, service_id: 1, title: "The Godfather", genres: "Crime, Drama", rank: 2, img: "/images/TheGodfather.jpeg" },
    { id: 3, service_id: 1, title: "The Dark Knight", genres: "Action, Crime, Drama", rank: 3, img: "/images/TheDarkKnight.jpeg" },
    { id: 4, service_id: 3, title: "Pulp Fiction", genres: "Crime, Drama", rank: 4, img: "/images/PulpFiction.jpeg" },
    { id: 5, service_id: 3, title: "Schindler's List", genres: "Biography, Drama, History", rank: 5, img: "/images/SchindlerList.jpeg" },
    { id: 6, service_id: 2, title: "Forrest Gump", genres: "Drama, Romance", rank: 6, img: "/images/ForrestGump.jpeg" },
    { id: 7, service_id: 1, title: "The Matrix", genres: "Action, Sci-Fi", rank: 7, img: "/images/TheMatrix.jpeg" },
    { id: 8, service_id: 2, title: "Inception", genres: "Action, Adventure, Sci-Fi", rank: 8, img: "/images/Inception.jpeg" },
    { id: 9, service_id: 1, title: "Fight Club", genres: "Drama", rank: 9, img: "/images/FightClub.jpeg"  },
    { id: 10, service_id: 1, title: "The Lord of the Rings: The Fellowship of the Ring", genres: "Action, Adventure, Drama, Fantasy", rank: 10, img: "/images/TheLordoftheRings.jpeg" },
    { id: 11, service_id: 4, title: "Stranger Things", genres: "Drama, Fantasy, Horror, Mystery, Sci-Fi, Thriller", rank: 1, img: "/images/StrangerThings.jpeg" },
    { id: 12, service_id: 1, title: "Breaking Bad", genres: "Crime, Drama, Thriller", rank: 2, img: "/images/BreakingBad.jpeg" },
    { id: 13, service_id: 1, title: "Game of Thrones", genres: "Action, Adventure, Drama, Fantasy, Romance", rank: 3, img: "/images/GameofThrones.jpeg" },
    { id: 14, service_id: 2, title: "The Simpsons", genres: "Animation, Comedy", rank: 4, img: "/images/TheSimpsons.jpeg" },
    { id: 15, service_id: 3, title: "Black Mirror", genres: "Drama, Sci-Fi, Thriller", rank: 5, img: "/images/BlackMirror.jpeg" },
    { id: 16, service_id: 3, title: "The Sopranos", genres: "Crime, Drama", rank: 6, img: "/images/TheSopranos.jpeg" },
    { id: 17, service_id: 1, title: "Stranger Things", genres: "Drama, Fantasy, Horror, Mystery, Sci-Fi, Thriller", rank: 7, img: "/images/strangerthings.jpg" },
    { id: 18, service_id: 1, title: "The Wire", genres: "Crime, Drama, Thriller", rank: 8, img: "/images/wire.jpg" },
    { id: 19, service_id: 2, title: "Friends", genres: "Comedy, Romance", rank: 9, img: "/images/friends.jpg" },
    { id: 20, service_id: 3, title: "Westworld", genres: "Drama, Mystery, Sci-Fi, Western", rank: 10, img: "/images/westworld.jpg" },
    { id: 21, service_id: 3, title: "The Crown", genres: "Biography, Drama, History", rank: 1, img: "/images/crown.jpg" },
    { id: 22, service_id: 1, title: "The Big Bang Theory", genres: "Comedy, Romance", rank: 2, img: "/images/bigbangtheory.jpg" },
    { id: 23, service_id: 1, title: "Sherlock", genres: "Crime, Drama, Mystery, Thriller", rank: 3, img: "/images/sherlock.jpg" },
    { id: 24, service_id: 1, title: "Mindhunter", genres: "Crime, Drama, Thriller", rank: 4, img: "/images/mindhunter.jpg" },
    { id: 25, service_id: 4, title: "The Mandalorian", genres: "Action, Adventure, Fantasy, Sci-Fi", rank: 5, img: "/images/mandalorian.jpg" }
    { id: 36, service_id: 1, title: "Avatar", genres: "Action, Adventure, Fantasy, Sci-Fi", rank: 21, img: "/images/Avatar.jpeg" },
    { id: 37, service_id: 4, title: "Narcos", genres: "Biography, Crime, Drama, Thriller", rank: 22, img: "/images/Narcos.jpeg" },
    { id: 38, service_id: 1, title: "The Princess Bride", genres: "Adventure, Family, Fantasy, Romance", rank: 23, img: "/images/ThePrincessBride.jpeg" },
    { id: 39, service_id: 2, title: "Deadpool", genres: "Action, Adventure, Comedy, Sci-Fi", rank: 24, img: "/images/Deadpool.jpeg" },
    { id: 40, service_id: 3, title: "The Witch", genres: "Horror, Mystery", rank: 25, img: "/images/TheWitch.jpeg" },
    { id: 41, service_id: 2, title: "The Office", genres: "Comedy", rank: 26, img: "/images/TheOffice.jpeg" },
    { id: 42, service_id: 3, title: "Handmaid's Tale", genres: "Drama, Sci-Fi, Thriller", rank: 27, img: "/images/HandmaidsTale.jpeg" },
    { id: 43, service_id: 4, title: "Fargo", genres: "Crime, Drama, Thriller", rank: 28, img: "/images/Fargo.jpeg" },
    { id: 44, service_id: 1, title: "Casablanca", genres: "Drama, Romance, War", rank: 29, img: "/images/Casablanca.jpeg" },
    { id: 45, service_id: 2, title: "The Great Gatsby", genres: "Drama, Romance", rank: 30, img: "/images/TheGreatGatsby.jpeg" }
  ]);
};
