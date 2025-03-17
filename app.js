// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

const listaAmigos = [];

function agregarAmigo() {
    const nombreAmigo = document.getElementById("amigo").value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    listaAmigos.push(nombreAmigo);
    actualizarListaAmigos();
    document.getElementById("amigo").value = "";
}

function actualizarListaAmigos() {
    const listaAmigosElemento = document.getElementById("listaAmigos");
    listaAmigosElemento.innerHTML = "";

    listaAmigos.forEach(amigo => {
        const nuevoElementoLista = document.createElement("li");
        nuevoElementoLista.textContent = amigo;
        listaAmigosElemento.appendChild(nuevoElementoLista);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega amigos a la lista antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos[indiceAleatorio];

    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = ""; // Limpiar resultados anteriores
    const resultadoLi = document.createElement("li");
    resultadoLi.textContent = `Amigo seleccionado: ${amigoSeleccionado}`;
    resultadoElemento.appendChild(resultadoLi);

}