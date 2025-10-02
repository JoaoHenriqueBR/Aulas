function calcularDano(forca, sorte){
    var danoBase = forca * 2; // a força do herói afeta o dano base
    var danoAdicional = Math.floor(Math.random() * sorte) // o fator sorte afeta a aleatoridade do dano adicional
    return danoBase + danoAdicional
}

var forcaDoHeroi = 10;
var sorteDoHeroi = 5;
var dano = calcularDano(forcaDoHeroi, sorteDoHeroi);
console.log("Você causou " + dano + " de dano ao monstro!");
