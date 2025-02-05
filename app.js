// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.




const amigoInput = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const sortearButton = document.querySelector('.button-draw'); // Obtiene  el botón de sortear

let amigos = [];

function agregarAmigo() {
    const nombre = amigoInput.value; 

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
      alert("Ese nombre ya está en la lista.");// esto es para asegurarse de que no se repitan nombres 
      return;
    }

    amigos.push(nombre);
    const nuevoLi = document.createElement('li');
    nuevoLi.textContent = nombre;
    listaAmigos.appendChild(nuevoLi);
    amigoInput.value = ""; //  limpia el campo de input después de agregar un amigo.
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes ingresar al menos dos amigos para realizar el sorteo.");
        return;
    }

    // Crea un array con los índices de los amigos
    const indices = amigos.map((_, i) => i);

    // Funcion para barajar el array (Fisher-Yates shuffle) esta funcion permitira barajar los índices de los amigos, garantizando un sorteo aleatorio justo.
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(indices);

    const amigoSorteado = amigos[indices[0]]; // Toma  el primer elemento del array barajado

    resultado.innerHTML = ""; // Limpiar resultados anteriores

    const resultadoLi = document.createElement('li');
    resultadoLi.textContent = `El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(resultadoLi);
}