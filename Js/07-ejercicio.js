let numero1 = parseInt(prompt(`escriba un numero`))
let numero2 = parseInt(prompt(`escriba un numero`))
let numero3 = parseInt(prompt(`escriba un numero`))
let numeroMayor 
if (numero1 > numero2 && numero1 > numero3){
    document.write(`el numero mayor es: ${numero1}`)
}else if (numero2 > numero1 && numero2 > numero3){
    document.write(`el numero mayor es: ${numero2}`)
}else{
    document.write(`el numero mayor es: ${numero3}`)
}