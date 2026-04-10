// Importa o módulo "HTTP" - Hyper Text Transfer Protocol
const http = require('http');

// Cria o servidor com uma função que recebe dois parâmetros:
// - req: Requisição ao Servidor (Aponta ao server o que precisamos dele, como uma página ou tipo de dado)
// - res: Resposta do Servidor (O que o servidor mostra com base na requisição)
const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.statusCode = 200; // Indica que deu tudo certo
        res.setHeader('Content-type', 'text/plain'); // Define o formato da resposta
        res.end('Bem-vindo à nossa rede social!');
    } else if (req.url === '/Amigos'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Aqui está a lista de seus amigos!');
    } else {
        res.statusCode = 404; // Código de status para erro
        res.setHeader('Content-Type', 'text/plain');
        res.end('Erro 404: Pagina nao encontrada.');
    }
});

// Escuta do Servidor
server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
