let numero1 = parseInt(prompt(`escriba un numero`))
let numero2 = parseInt(prompt(`escriba otro numero`))
let numeroMayor
if(numero1 > numero2){
    numeroMayor = numero1    
}else {
    numeroMayor = numero2
}
document.write(`el numero mayor es: ${numeroMayor}`)