const cards = document.querySelectorAll(".card");

let openedCards = [];

function flipCard() {
  this.classList.add("flipped"); //this flips cards//
  openedCards.push(this);

  if (openedCards.length === 2) {
    let card1 = openedCards[0];
    let card2 = openedCards[1];

    if (card1.getAttribute("name") === card2.getAttribute("name")) {
      // if a match then keep them flipped
      openedCards = [];
    } else {
      // if not a match then flip them back
      setTimeout(function () {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        openedCards = []; // this will clear the list for the next turn
      }, 1000);
    }
  }
}

for (let i = 0; i < cards.length; i++) {
  cards[i].onclick = flipCard;

// this is to shuffle all card//
let randomNumber = Math.floor(Math.random() * 9);
  cards[i].style.order = randomNumber;
}

