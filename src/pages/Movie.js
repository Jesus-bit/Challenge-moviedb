import fetchData from "../utils/getData.js";

const Movie = async () => {
    const pathCut = window.location.href.split('#')[1];
    const id = pathCut || "";
    const data = await fetchData(id);
    const view = `
    <div class="movie">
        <div class="movie-container">
            <img class="Character-img" src="https://image.tmdb.org/t/p/original${data.poster_path}" />
            <div class="movie-info">
                <h3>${data.original_title}</h3>
                <p>${data.overview}</p>
                <h3>Generos</h3>
                ${data.genres.map(gender => `
                <p>
                    ${gender.name}
                </p>`).join('')}
                <span>
                    ${data.vote_average}
                </span>
            </div>
        </div>
    </div>`;
    return view;
}
export default Movie;