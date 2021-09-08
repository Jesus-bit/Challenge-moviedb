const Error404 = () => {
    const view = `
    <div>
        <h2>Error 404</h2>
        <div class="Error">
            <img class="Error img" src="./assets/img/Scarecrow.png">
            <div class="Error container-info" >
                <h3>Tengo malas noticias para ti</h3>
                <p>Es posible que la página que está buscando se haya eliminado o no esté disponible temporalmente</p>
                <button id="go-back">Go back!</button>
            </div>
        </div>
    </div>
    `;
    return view;
}

export default Error404;