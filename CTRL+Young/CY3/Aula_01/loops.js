for (let tocha = 1; tocha <= 10; tocha++) {
    console.log("Tocha " + tocha + " acesa!");
}

let energia = 100;
while (energia > 0) {
    console.log("Barreira de luz ainda está ativa!");
    energia -= 10
    
}
console.log("Energia caiu, barreira desativada!")

let material = 0;
do {
    console.log("Usando materiais encontrados para construir a ponte.");
    material += 30;
} while (material < 100);