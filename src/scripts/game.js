import Deck from "./deck.js";
import Hand from "./hand.js";

function Game(deck){
    let hand = new Hand(deck);
    this.handClass = hand;
    this.hand = hand.hand;
    this.deck = hand.deck;
}

Game.prototype.start = function(){
    this.deck.shuffle();
    this.initialDraw();
}

Game.prototype.initialDraw = function(){
    this.handClass.initialDraw();
    const card1 = {card: this.hand[0], id: "card1"};
    const card2 = {card: this.hand[1], id: "card2"};
    const card3 = {card: this.hand[2], id: "card3"};
    const card4 = {card: this.hand[3], id: "card4"};
    const card5 = {card: this.hand[4], id: "card5"};

    this.setCardValues(card1);
    this.setCardValues(card2);
    this.setCardValues(card3);
    this.setCardValues(card4);
    this.setCardValues(card5);
}

Game.prototype.setCardValues = function(cardObj){
    let backgroundColor = document.getElementById(cardObj.id);
    let upperCorner = backgroundColor.children[0];
    let img = backgroundColor.children[1];

    backgroundColor.style.backgroundColor = cardObj.card.color;
    upperCorner.style.backgroundColor = cardObj.card.color;
    img.src = cardObj.card.img;
}

export default Game;