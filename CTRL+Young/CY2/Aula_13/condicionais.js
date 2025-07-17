/* Condicional */

var hora = 15;

// Dependendo da condição (hora), será executada uma ação.
if(hora < 12) {
    document.write("Bom dia!");
}
else if (hora < 18) {
    document.write("Boa tarde!");
}
else {
    document.write("Boa noite!");
}

// Combinando operadores com variáveis
var x = 10;
x += 90; // igual a "x = x + 90;", então x se torna igual a 100

var x = 4;
x++; // agora x tem valor igual a 5

var y = 3;
y--; // subtrai 1 de y, y = 2.

var resultado = x**y; // ** transforma em uma potência, o resultado vai ser igual a 25 ([x = 5] multiplicado por ele mesmo [y = 2] vezes)
