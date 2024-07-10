let frase = prompt("Ingresa una frase:");

let vocales = "";

let i = 0;

while (i < frase.length) {
  let caracter = frase.charAt(i);

  if (
    caracter === "a" ||
    caracter === "e" ||
    caracter === "i" ||
    caracter === "o" ||
    caracter === "u" ||
    caracter === "A" ||
    caracter === "E" ||
    caracter === "I" ||
    caracter === "O" ||
    caracter === "U"
  ) {
    vocales += caracter;
  }

  i++;
}
document.write(vocales);