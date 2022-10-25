const datos = [{
    img: '',
    text: "Hollow Knight es el juego que revoluciono los metroidvanias, así como su gameplay"
}
];

let contenidoPrincipal = document.querySelector('#contenido-principal');

function contenidoCuadrosIzq (text) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    //El contenedor principal adopta al nuevo div
    contenidoPrincipal.appendChild(div);
    //Se le carga el contenido del texto al nuevo parrafo
    p.innerHTML = text;
    //El nuevo div adopta al nuevo parrafo
    div.appendChild(p);
    //Se agrega los atributos del div del cuadro izquierda al nuvo div
    div.setAttribute('id','cuadro-1-iz');
}

/* Para cada dato, voy a pasar el texto al nuevo p de cada div*/
datos.forEach(({text}) => contenidoCuadrosIzq(text));
