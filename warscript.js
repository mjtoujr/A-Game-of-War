//Step 1 - creating the deck
let deck = [//Deck is made as an array of objects; each 'card' has two properties, name and value. 
  {
    cardName: 'Two of Spades',
    cardValue: 2,
  },
  {
    cardName: 'Three of Spades',
    cardValue: 3,
  },
  {
    cardName: 'Four of Spades',
    cardValue: 4,
  },
  {
    cardName: 'Five of Spades',
    cardValue: 5,
  },
  {
    cardName: 'Six of Spades',
    cardValue: 6,
  },
  {
    cardName: 'Seven of Spades',
    cardValue: 7,
  },
  {
    cardName: 'Eight of Spades',
    cardValue: 8,
  },
  {
    cardName: 'Nine of Spades',
    cardValue: 9,
  },
  {
    cardName: 'Ten of Spades',
    cardValue: 10,
  },
  {
    cardName: 'Jack of Spades',
    cardValue: 11,
  },
  {
    cardName: 'Queen of Spades',
    cardValue: 12,
  },
  {
    cardName: 'King of Spades',
    cardValue: 13,
  },
  {
    cardName: 'Ace of Spades',
    cardValue: 14,
  },
  {
    cardName: 'Two of Hearts',
    cardValue: 2,
  },
  {
    cardName: 'Three of Hearts',
    cardValue: 3,
  },
  {
    cardName: 'Four of Hearts',
    cardValue: 4,
  },
  {
    cardName: 'Five of Hearts',
    cardValue: 5,
  },
  {
    cardName: 'Six of Hearts',
    cardValue: 6,
  },
  {
    cardName: 'Seven of Hearts',
    cardValue: 7,
  },
  {
    cardName: 'Eight of Hearts',
    cardValue: 8,
  },
  {
    cardName: 'Nine of Hearts',
    cardValue: 9,
  },
  {
    cardName: 'Ten of Hearts',
    cardValue: 10,
  },
  {
    cardName: 'Jack of Hearts',
    cardValue: 11,
  },
  {
    cardName: 'Queen of Hearts',
    cardValue: 12,
  },
  {
    cardName: 'King of Hearts',
    cardValue: 13,
  },
  {
    cardName: 'Ace of Hearts',
    cardValue: 14,
  },
  {
    cardName: 'Two of Diamonds',
    cardValue: 2,
  },
  {
    cardName: 'Three of Diamonds',
    cardValue: 3,
  },
  {
    cardName: 'Four of Diamonds',
    cardValue: 4,
  },
  {
    cardName: 'Five of Diamonds',
    cardValue: 5,
  },
  {
    cardName: 'Six of Diamonds',
    cardValue: 6,
  },
  {
    cardName: 'Seven of Diamonds',
    cardValue: 7,
  },
  {
    cardName: 'Eight of Diamonds',
    cardValue: 8,
  },
  {
    cardName: 'Nine of Diamonds',
    cardValue: 9,
  },
  {
    cardName: 'Ten of Diamonds',
    cardValue: 10,
  },
  {
    cardName: 'Jack of Diamonds',
    cardValue: 11,
  },
  {
    cardName: 'Queen of Diamonds',
    cardValue: 12,
  },
  {
    cardName: 'King of Diamonds',
    cardValue: 13,
  },
  {
    cardName: 'Ace of Diamonds',
    cardValue: 14,
  },
  {
    cardName: 'Two of Clubs',
    cardValue: 2,
  },
  {
    cardName: 'Three of Clubs',
    cardValue: 3,
  },
  {
    cardName: 'Four of Clubs',
    cardValue: 4,
  },
  {
    cardName: 'Five of Clubs',
    cardValue: 5,
  },
  {
    cardName: 'Six of Clubs',
    cardValue: 6,
  },
  {
    cardName: 'Seven of Clubs',
    cardValue: 7,
  },
  {
    cardName: 'Eight of Clubs',
    cardValue: 8,
  },
  {
    cardName: 'Nine of Clubs',
    cardValue: 9,
  },
  {
    cardName: 'Ten of Clubs',
    cardValue: 10,
  },
  {
    cardName: 'Jack of Clubs',
    cardValue: 11,
  },
  {
    cardName: 'Queen of Clubs',
    cardValue: 12,
  },
  {
    cardName: 'King of Clubs',
    cardValue: 13,
  },
  {
    cardName: 'Ace of Clubs',
    cardValue: 14,
  },
];

//Below section of code exists to confirm construction of a deck. Throughout the code, instances of running this function are commented out, but are placed there to provide confirmation if needed.
function cardcount(input) {
  for (let i = 0; i < input.length; i++) {
    console.log(input[i].cardName);
  }
}
//cardcount(deck);

//Step 2 - Creating the Players
/*Player is set up as a class; each player has 3 properties:
-A name, which is set when the player is created;
-A hand, which is an array; this starts as empty, until cards are dealt;
-A score, which starts at 0, and will be raised as the game plays out.
Two players are then created; with the class in place, more could be added, but the game itself would need to be remade.
*/
class Player {
  constructor (playerName) {
    this.name = playerName;
    this.hand = [];
    this.score = 0;
  }
}
let player1 = new Player('Player 1');
let player2 = new Player('Player 2');
//Step 3 - Shuffling and dealing the Deck
function shuffle(input) { //This function picks an object from a deck array at random, and then moves it to the current spot within the deck array, essentially randomizing/shuffling the deck.
  for (let i = 0; i < input.length; i++) {
    let j = Math.floor(Math.random() * input.length);
    let temp = input[i];
    input[i] = input[j];
    input[j] = temp;
  }
  return input;
}

function deal(input) {//This function deals out cards to the two players, alternating between them.
  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
      player1.hand.push(input[i]);
    } else {
      player2.hand.push(input[i]);
    }
  }
}
shuffle(deck);
//cardcount(deck);
//An instance of cardcount is here, commented out; can be run to confirm the deck is in a new order before dealing.
deal(deck);

/*
console.log('Player 1 Deck:');
cardcount(player1.hand);
console.log('Player 2 Deck:');
cardcount(player2.hand);*/
//The above will log out the contents of the hands of each player; if further randomness is desired, the shuffle function could be run on the two player.hand objects as well.

//Step 4 - Playing the Game
function playWar() {
  console.log('Let us begin the most dangerous game of them all - WAR!')
  let round = 1;
  while (player1.hand.length > 0) {//Will run until one player is out of cards. In this version of war, both players lose cards at the same time, so only checking player 1.
    console.log(
      `Round ${round}:
      Player 1's Card: ${player1.hand[0].cardName}
      Player 2's Card: ${player2.hand[0].cardName}`
    );
    if (player1.hand[0].cardValue > player2.hand[0].cardValue) {
      console.log(
        `The ${player1.hand[0].cardName} beats the ${player2.hand[0].cardName}!
        Player 1 wins Round ${round}!`
      );
      player1.score++;
      player1.hand.shift();
      player2.hand.shift();
    } else if (player1.hand[0].cardValue < player2.hand[0].cardValue) {
      console.log(
        `The ${player2.hand[0].cardName} beats the ${player1.hand[0].cardName}!
        Player 2 wins Round ${round}!`
      );
      player2.score++;
      player1.hand.shift();
      player2.hand.shift();
    } else {
      console.log(
        `The ${player1.hand[0].cardName} and the ${player2.hand[0].cardName} are of equal strength!
        Round ${round} is a tie!`
      );
      player1.hand.shift();
      player2.hand.shift();
    }
    round++;//Each round, the 'top card' of each player (card in position 0) is compared. Point goes to highest, no points in case of a tie, the results are logged so the step is noted, and then the two cards are shifted out of the hands, and the round increases.
  }
  console.log('The War is Over!')//once no cards are left, scores are compared, and game ends.
  if (player1.score > player2.score) {
    console.log(
      `Player 1 wins with a score of ${player1.score} to ${player2.score}!
      Wear your victory proudly!`
    );
  } else if (player1.score < player2.score) {
    console.log(
      `Player 2 wins with a score of ${player2.score} to ${player1.score}!
      Wear your victory proudly!`
    );
  } else {
    console.log(
      `The score is tied at ${player1.score}!
      Only the cards have won this day!`
    );
  }
};

playWar();
