import router from './router/index.js';

window.addEventListener('load', router(window.location.href));
window.addEventListener('hashchange', () => {
    router(window.location.href);
});