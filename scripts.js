function encriptar() {
  var textoUsuario = document.getElementById("texto").value.toLowerCase();

  textoUsuario = textoUsuario.replace(/é/g, "e");
  textoUsuario = textoUsuario.replace(/í/g, "i");
  textoUsuario = textoUsuario.replace(/á/g, "a");
  textoUsuario = textoUsuario.replace(/ó/g, "o");
  textoUsuario = textoUsuario.replace(/ú/g, "u");
  textoUsuario = textoUsuario.replace(/[^a-z]/g, "");

  textoUsuario = textoUsuario.replace(/e/g, "enter");
  textoUsuario = textoUsuario.replace(/i/g, "imes");
  textoUsuario = textoUsuario.replace(/a/g, "ai");
  textoUsuario = textoUsuario.replace(/o/g, "ober");
  textoUsuario = textoUsuario.replace(/u/g, "ufat");

  var decifrado = document.getElementById("decifrado");
  decifrado.classList.add("encriptado");
  var decifradoDiv = document.getElementById("decifrado");
  decifradoDiv.innerHTML = `
  <p>${textoUsuario}</p>
  <button id="mostrarOriginal" class="boton-decifrado" onclick="copiar()">Copiar</button>
`;
}

function desencriptar() {
  var textoUsuario = document.getElementById("texto").value.toLowerCase();

  textoUsuario = textoUsuario.replace(/é/g, "e");
  textoUsuario = textoUsuario.replace(/í/g, "i");
  textoUsuario = textoUsuario.replace(/á/g, "a");
  textoUsuario = textoUsuario.replace(/ó/g, "o");
  textoUsuario = textoUsuario.replace(/ú/g, "u");
  textoUsuario = textoUsuario.replace(/[^a-z]/g, "");

  textoUsuario = textoUsuario.replace(/ai/g, "a");
  textoUsuario = textoUsuario.replace(/enter/g, "e");
  textoUsuario = textoUsuario.replace(/imes/g, "i");
  textoUsuario = textoUsuario.replace(/ober/g, "o");
  textoUsuario = textoUsuario.replace(/ufat/g, "u");

  var decifrado = document.getElementById("decifrado");
  decifrado.classList.remove("encriptado");

  var decifradoDiv = document.getElementById("decifrado");
  decifradoDiv.innerHTML = `
    <p>${textoUsuario}</p>
      <button id="mostrarOriginal" class="boton-decifrado" onclick="copiar()">Copiar</button>
    `;
}
function copiar() {
  const resultado = document.querySelector("#decifrado");
  const texto = resultado.innerText;
  const resultadoClonado = resultado.cloneNode(true);
  const botones = resultadoClonado.querySelectorAll("button");
  botones.forEach((boton) => {
    boton.remove();
  });

  const textoSinBoton = resultadoClonado.innerText;
  navigator.clipboard.writeText(textoSinBoton);
  console.log("Contenido copiado: " + textoSinBoton);
}

function ocultarBotones() {
  if (window.matchMedia("(min-width: 1024px)").matches) {
    var botones = document.getElementsByClassName("encriptadores")[0];
    botones.style.display = "none";
  }
}
