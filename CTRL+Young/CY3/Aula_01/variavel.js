// Variáveis

// var (antigo)
var escopo = "Escopo";

// let (flexível)
//
// Diferente do var, let é restrita somente dentro dos dominios do escopo.
if (true) {
    let mensagem = "Dentro do if";
    console.log(mensagem);
}

// const (estável)
const saudacao = "Olá, mundo!";
console.log(saudacao)
