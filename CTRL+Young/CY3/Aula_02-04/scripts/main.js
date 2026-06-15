// Factory
function urlBuilder(number) {
  // Transforma o numero em uma string (palavra)
  number += "";
  // Add 0 para a esquerda dos numeros peques
  number = number.padStart(2, "0");

  return `images/heros/card${number}.jpeg`;
}

// Instâncias dos objetos criados
let card = new CardManager(urlBuilder);
let board = new BoardManager("board", 50, card);

// Dom elements
let menu = document.getElementById("menu");
let select = document.getElementById("numCards");
let start = document.getElementById("start");

// Configurando um menu
for (let i = 4; i <= 10; i += 2) {
  // De 4 até 10
  let n = i * i; // Recebe i²
  // Criar uma nova opção para o Select
  let op = document.createElement("option");

  // Definir tanto o valor quanto o seu conteúdo para o i²
  op.value = n;
  op.innerHTML = n;

  // Adiciona a nova opção para a página
  select.appendChild(op);
}

start.addEventListener("click", () => {
  menu.classList.add("hidden");
  board.node.classList.remove("hidden");
  board.fill(select.value);
});

board.node.addEventListener('click', () => {
  if (board.check()) {
    setTimeout(() => {
      menu.classList.remove('hidden');
      board.node.classList.add('hidden');
    }, 2000);
  }
})
