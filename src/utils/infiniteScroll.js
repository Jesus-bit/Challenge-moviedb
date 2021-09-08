import fetchData from '../utils/getData.js';

var page = 1;
const footer = document.querySelector('#inner-footer');
let options = {
    threshold: 1.0,
}
const observer = new IntersectionObserver(isElementInViewport, options);
export const initializationObserver = () => {
    observer.observe(footer)
}

export const deleteObserver = () => {
    observer.unobserve(footer);
}

async function isElementInViewport (){
    const app = null || document.querySelector('#app');
    page++;
    if (page <= 500) {
        const {results} = await fetchData("popular", page);
        renderData(results, app);
        return
    }else{
        const end = document.createElement('h2');
        end.innerText = 'FIN del contenido';
        app.appendChild(end);
    }
}


function renderData(data, wrapper){
    let listElement = document.createElement('div');
    listElement.classList.add('container-movies')
    listElement.innerHTML = data.map((movie) => ` 
    <article class="movie-item">
        <a href="#${movie.id}">
            <img class="movie-img" src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="${movie.original_title}">
            <h2>${movie.original_title}</h2>
            <p>${movie.vote_average}</p>
        </a>
    </article>`)
    .join('');
    wrapper.appendChild(listElement);
}
