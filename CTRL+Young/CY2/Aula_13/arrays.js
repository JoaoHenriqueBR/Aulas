// Exemplo de variáveis
var serieFavorita = "Fallout";
var serieInteressante = "Stranger Things";
var serieMuitoBoa = "Invincible"

document.write("O final de" + serieFavorita + "é")

// Arrays
/* Existem duas formas de se criar */

// Forma 1 (Array já preenchida)
var series = ["Fallout", "Stranger Things", "Invincible"];

// Forma 2 (Array vazia, preenchida depois)
var series = [];
series[0] = "Fallout";
series[1] = "Stranger Things";
series[2] = "Invincible";
series[3] = "Narutinho";

// Acessar conteúdo de uma array
serieFavorita = series[1];
document.write(serieFavorita);

/* 
--- Copiar ---
Existem duas formas de se copiar uma Array
*/

// Referência
var series2 = series;

// Copia dos valores (splice)
var series2 = series.splice();

/* Array Multidimensional */

// Basicamente, array com arrays dentro
// Como isso funciona? Veja a seguir:
var lista = [];
lista["series"] = series;
lista["filmes"] = [];
lista["filmes"][0] = "Castle in the Sky";
lista["filmes"][1] = "Interestelar";
document.writeln(lista["series"][1]);
document.writeln(lista["filmes"][1]);