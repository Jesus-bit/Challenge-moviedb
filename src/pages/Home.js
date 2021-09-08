import fetchData from '../utils/getData.js';
import { initializationObserver } from '../utils/infiniteScroll.js';

const Home = async () => {
    const {results} = await fetchData("popular");
    const view = `
    <div class="container-movies" >
        ${results.map((movie) => ` 
            <article class="movie-item">
                <a href="#${movie.id}">
                    <img class="movie-img" src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="${movie.original_title}">
                    <h2>${movie.original_title}</h2>
                    <p>${movie.vote_average}</p>
                </a>
            </article>`)
            .join('')}
    </div>
    `;
    initializationObserver();
    return view;
}

export default Home;