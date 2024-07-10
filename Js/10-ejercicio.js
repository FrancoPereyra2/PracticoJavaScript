let numero = parseInt(prompt("Ingresa un número:"));

let i = 0;
let resultado = "";

while (i < 1) {
  if (numero % 2 === 0) {
    resultado = "El " + numero + " es divisible por 2.";
  } else if (numero % 3 === 0) {
    resultado = "El " + numero + " es divisible por 3.";
  } else if (numero % 5 === 0) {
    resultado = "El " + numero + " es divisible por 5.";
  } else if (numero % 7 === 0) {
    resultado = "El " + numero + " es divisible por 7.";
  } else {
    resultado = "El " + numero + " no es divisible por 2, 3, 5 o 7.";
  }
  i++;
}

document.write(resultado);
