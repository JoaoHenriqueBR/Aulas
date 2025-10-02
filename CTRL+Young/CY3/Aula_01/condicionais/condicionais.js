// Mensagem de boas-vindas
document.write("Bem-vindo ao Labirinto dos Condicionais!");

// Primeiro desafio
var resposta = prompt("Você chega em uma bifurcação.\nPara a esquerda, ouve-se um barulho muito alto.\nPara a direita, um silêncio suspeito.\n\nEscolha: esquerda ou direita?");

if (resposta === "esquerda"){
    document.write(" Aparece um pequeno dragão! Mas ele estava apenas bocejando. Você passa e fica aliviado, o que faz você tropeçar e morrer.")
} else if (resposta === "direita"){
    document.write(" Você não vê nada, fica paranoico e morre de loucura.")
} else {
    document.write(" Você fica parado e morre de desgosto")
}