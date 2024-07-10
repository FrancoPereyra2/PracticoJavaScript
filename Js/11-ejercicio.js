let numero = prompt("Ingrese un número:");
let divisores = numero + " es divisible por ";
let i = 2;

while (i <= 7) {
    if (numero % i == 0) {
        divisores += i + " ";
    }
    i++;
}

if (divisores == numero + " es divisible por ") {
    divisores = numero + " no es divisible por 2, 3, 5 ni 7.";
}

document.write(divisores);