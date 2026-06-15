class BoardManager {
  // Dependências
  cardManager; // Objeto para manipular as cartas.

  // Elemento DOM
  node; // Elemento DOM referente ao tabuleiro.

  // Números
  numImgs; // Número de imagens diferentes na biblioteca
  curNumCards; // Número de cartas no tabuleiro na partida atual

  // Construtor
  constructor(id, numImgs, cardManager) {
    this.node = document.getElementById(id);

    this.numImgs = numImgs;
    this.cardManager = cardManager;
  }

  clear() {
    this.node.innerHTML = "";
  }

  fill(numberCards) {
    if (numberCards > 2 * this.numImgs) {
      console.error(`Erro: Imagens insuficientes para ${numberCards} cartas.`);
      numberCards = 2 * this.numImgs;
    }

    numberCards = parseInt(numberCards);
    this.curNumCards = numberCards;

    this.clear();
    this.genRamdonList(numberCards).forEach((number) => {
      this.addCard(this.cardManager.gen(number));
    });

    this.adjustCss();
  }

  // Ajusta o CSS para encaixar todas as cartas no tabuleiro
  adjustCss() {
    // Calcular o numero de colunas
    let cols = Math.sqrt(this.curNumCards);

    // Calcular o tamanho da carta
    let size = 100 / cols - 1;

    // Transformar o size para o CSS usando uma string
    size += "vmin";

    // Definir as propriedades do CSS
    document.documentElement.style.setProperty("--numCols", cols);
    document.documentElement.style.setProperty("--size", size);
  }

  addCard(card) {
    this.node.appendChild(card);
  }

  // Gerar lista aleatória
  genRamdonList(size) {
    // Cria uma lista com os numeros 1 para o tamanho final
    let list = Array(size / 2)
      .fill()
      .map((_, i) => i + 1);
    console.log({ list });
    // Dobro a lista e randomiza ela
    list = [...list, ...list].sort(() => Math.random() - 0.5);
    return list;
  }

  check() {
    let flipped = document.getElementsByClassName("matched");
    return flipped.length >= this.curNumCards;
  }
}
