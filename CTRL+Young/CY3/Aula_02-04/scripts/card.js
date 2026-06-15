class CardManager{
    // Atributos
    flippedCards = new Set();
    urlFactory;

    // Construtor
    constructor(factory){
        this.urlFactory = factory;
    }

    // Gerar a nova carta com base no número do herói.
    gen(heroNumber){
        let template = document.getElementById("cardTemplate");
        let clone = template.content.cloneNode(true);

        // Referencia ao elemento de imagem
        let img = clone.querySelector('img');

        // Mudar a fonte da imagem
        img.setAttribute('src', this.urlFactory(heroNumber));
    
        // Cuida dos clicks nas cartas
        clone.children[0].addEventListener('click', 
            event => this.onClick(event)
        );

        return clone; // Retorna o clone modificado
    }

    onClick(event){
        if(this.flippedCards.size >= 2){
            this.endTurn();
        } else {
            this.flip(event.target);
        }
    }
    flip(cardNode){
        cardNode.children[0].classList.add('selected');
        this.flippedCards.add(cardNode);
    }
    unFlip(cardNode){
        cardNode.children[0].classList.remove('selected');
    }
    disable(cardNode){
        cardNode.children[0].classList.add('matched');
        this.unFlip(cardNode);
    }

    // Métodos de turno
    // Checar se está na partida
    check(){
        // Transforma o set em uma lista e mapeia ela
        let urls = [...this.flippedCards].map((card)=>{
            // Retorna a src da imagem
            return card.querySelector('img').src;
        })
        
        // Retorna verdadeiro apenas se tiver igual
        return urls[0] == urls[1];
    }

    // Finalizar o turno
    endTurn(){
        let handler = this.check() ? (card)=>this.disable(card): this.unFlip;
        this.flippedCards.forEach(handler);
        this.flippedCards.clear();
    }
}
