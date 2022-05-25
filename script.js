
let encriptarTexto = document.querySelector(".text-input");

let desencriptarTexto = document.querySelector(".text-input-area")

function btnencriptar() {
    let textoEncriptado = encriptar(encriptarTexto.value);
    desencriptarTexto.value = textoEncriptado;
}

function encriptar(lineas) {
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    lineas = lineas.toLowerCase();
    for (let i = 0; i < codigo.length; i++) {
        if (lineas.includes(codigo[i][0])) {
            lineas = lineas.replaceAll(codigo[i][0], codigo[i][1])
            console.log(lineas)
        }
    }
    return lineas;

}

function btndesencriptar() {
    let textoDesencriptado = desencriptar(encriptarTexto.value);
    desencriptarTexto.value = textoDesencriptado;
}

function desencriptar(lineas) {
    let codigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]]
    lineas = lineas.toLowerCase();
    for (let i = 0; i < codigo.length; i++) {
        if (lineas.includes(codigo[i][0])) {
            lineas = lineas.replaceAll(codigo[i][0], codigo[i][1])
            console.log(lineas)
        }
    }
    return lineas;

}

function copiarPortaPapeles() {
    let content = document.querySelector("#msg");
    content.select();
    document.execCommand("copy");

}


document.querySelector("#btn-copy").addEventListener("click", copiarPortaPapeles);

