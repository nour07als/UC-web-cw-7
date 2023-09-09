let movie1={
name:"Matlida",
src:"https://m.media-amazon.com/images/M/MV5BMWE2YTBhYzItZDAxZS00Mjc3LWIxNmYtMzljZjIxMGE1NmY2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg"
}
let movie2= {
    name:"Paddington",
    src:"https://m.media-amazon.com/images/M/MV5BMTAxOTMwOTkwNDZeQTJeQWpwZ15BbWU4MDEyMTI1NjMx._V1_.jpg"
}
let movie3 = {
name:"Oppenheimer",
src: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg"
}

let movies = [];
movies.push(movie1,movie2,movie3);

let movieContainer = document.getElementById("container");

movies.forEach((movie) => {

    movieContainer.innerHTML += `
 <div class="movie">
 <img src="${movie.src}" alt="movie picture" />
 <h2>${movie.name}</h2>
 </div>
`;

});