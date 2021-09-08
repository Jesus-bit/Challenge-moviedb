import Header from "../components/Header.js";
import Footer from '../components/Footer.js';
import Error404 from "../pages/Error404.js";
import Home from "../pages/Home.js";
import Movie from "../pages/Movie.js";
import { deleteObserver } from '../utils/infiniteScroll.js'


const routes = {
    '': Home,
    ':id' : Movie,
}


const resolveRoutes = async (path) => {
    let pathCut = path.split('#')[1];
    if (pathCut === '' || pathCut === undefined) {
        pathCut = '';
        return pathCut;
    }else if(isNaN(Number(pathCut))){
        return`#${pathCut}`;
    } else{
        return ':id';
    }
}

async function router (path) {
    const app = null || document.querySelector('#app');
    const innerHeader = null || document.querySelector('#navigation');
    const innerFooter = null || document.querySelector('#inner-footer');
    app.innerHTML = '';
    innerHeader.innerHTML = Header();
    innerFooter.innerHTML = Footer();
    const Route = await resolveRoutes(path);
    const render = routes[Route] || Error404;
    deleteObserver();
    app.innerHTML = await render();
    document.getElementById('go-back').addEventListener('click', () => {
        history.back();
    });
};


export default router;