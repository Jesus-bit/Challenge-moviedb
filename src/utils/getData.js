
async function fetchData (type, page = 1) {
    const API_Key = 'a24ab4531dc7055aa0a60c574c4fc1ce';
    const URL = `https://api.themoviedb.org/3/movie/${type}`;
    try {
        const response = await fetch(`${URL}?api_key=${API_Key}&language=es-MX&page=${page}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}
export default fetchData;