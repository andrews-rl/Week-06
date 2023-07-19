class card {// Creates the class card.
   constructor(name, suit, value) {// This is the card constructor. It has three parameters to include name, suit, and value.
      this.name = name;// This.name is used to take one parameter, name, in the creation of a new card via constructor.  
      this.suit = suit;// This.name is used to take one parameter, suit, in the creation of a new card via constructor. 
      this.value = value;// This.name is used to take one parameter, value, in the creation of a new card via constructor. 
   }
}
let deck = [ // Creates the array deck. 
  new card('Ace', 'Hearts', 14),// Creates a new card with the class card constructor. 
  // In this case its the Ace of Hearts with the value of 14.
  new card('Two', 'Hearts', 2),// Same concept as the first new card. 
  new card('Three', 'Hearts', 3),// Same concept as the first new card.
  new card('Four', 'Hearts', 4),// Same concept as the first new card.
  new card('Five', 'Hearts', 5),// Same concept as the first new card.
  new card('Six', 'Hearts', 6),// Same concept as the first new card.
  new card('Seven', 'Hearts', 7),// Same concept as the first new card.
  new card('Eight', 'Hearts', 8),// Same concept as the first new card.
  new card('Nine', 'Hearts', 9),// Same concept as the first new card.
  new card('Ten', 'Hearts', 10),// Same concept as the first new card.
  new card('Jack', 'Hearts', 11),// Same concept as the first new card.
  new card('Queen', 'Hearts', 12),// Same concept as the first new card.
  new card('King', 'Hearts', 13),// Same concept as the first new card.
  new card('Ace', 'Diamonds', 14),// Same concept as the first new card.
  new card('Two', 'Diamonds', 2),// Same concept as the first new card.
  new card('Three', 'Diamonds', 3),// Same concept as the first new card.
  new card('Four', 'Diamonds', 4),// Same concept as the first new card.
  new card('Five', 'Diamonds', 5),// Same concept as the first new card.
  new card('Six', 'Diamonds', 6),// Same concept as the first new card.
  new card('Seven', 'Diamonds', 7),// Same concept as the first new card.
  new card('Eight', 'Diamonds', 8),// Same concept as the first new card.
  new card('Nine', 'Diamonds', 9),// Same concept as the first new card.
  new card('Ten', 'Diamonds', 10),// Same concept as the first new card.
  new card('Jack', 'Diamonds', 11),// Same concept as the first new card.
  new card('Queen', 'Diamonds', 12),// Same concept as the first new card.
  new card('King', 'Diamonds', 13),// Same concept as the first new card.
  new card('Ace', 'Clubs', 14),// Same concept as the first new card.
  new card('Two', 'Clubs', 2),// Same concept as the first new card.
  new card('Three', 'Clubs', 3),// Same concept as the first new card.
  new card('Four', 'Clubs', 4),// Same concept as the first new card.
  new card('Five', 'Clubs', 5),// Same concept as the first new card.
  new card('Six', 'Clubs', 6),// Same concept as the first new card.
  new card('Seven', 'Clubs', 7),// Same concept as the first new card.
  new card('Eight', 'Clubs', 8),// Same concept as the first new card.
  new card('Nine', 'Clubs', 9),// Same concept as the first new card.
  new card('Ten', 'Clubs', 10),// Same concept as the first new card.
  new card('Jack', 'Clubs', 11),// Same concept as the first new card.
  new card('Queen', 'Clubs', 12),// Same concept as the first new card.
  new card('King', 'Clubs', 13),// Same concept as the first new card.
  new card('Ace', 'Spades', 14),// Same concept as the first new card.
  new card('Two', 'Spades', 2),// Same concept as the first new card.
  new card('Three', 'Spades', 3),// Same concept as the first new card.
  new card('Four', 'Spades', 4),// Same concept as the first new card.
  new card('Five', 'Spades', 5),// Same concept as the first new card.
  new card('Six', 'Spades', 6),// Same concept as the first new card.
  new card('Seven', 'Spades', 7),// Same concept as the first new card.
  new card('Eight', 'Spades', 8),// Same concept as the first new card.
  new card('Nine', 'Spades', 9),// Same concept as the first new card.
  new card('Ten', 'Spades', 10),// Same concept as the first new card.
  new card('Jack', 'Spades', 11),// Same concept as the first new card.
  new card('Queen', 'Spades', 12),// Same concept as the first new card.
  new card('King', 'Spades', 13)// Same concept as the first new card.
];

function shuffle(arr) {// function designed to shuffle an array.
   let i = arr.length,  randomIndex;// The variable i is sex at the array.length and random index
   //(Note: Random index is defined again below). 
 
   while (i != 0) { // While there are card elements to shuffle.
     
     randomIndex = Math.floor(Math.random() * i);// Tells JavaScript to pick a remaining card.
     i--;
      
     [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];// The elements are swaped via indexes.
   }
 
   return arr; // Returns the array. 
 }

shuffle(deck);// Calls the shuffle function and shuffles the deck of cards.
console.table(deck);// Shows the deck is shuffled as required. 
player1Cards = deck.slice(0,26);player2Cards = deck.slice(26,52);// Deals cards are required by assignment. 
console.table(player1Cards); console.table(player2Cards)// Shows cards are devided in two or dealt as required by assignment)

let player1Score = 0 // Creates a variable outside of fuction scoreDisplay so that it can be called later. 
let player2Score = 0 // Creates a variable outside of fuction scoreDisplay so that it can be called later.

function scoreDisplay(){// Creates a fuction to display the game action and the score after each round. 

   for (let i = 0; i < player1Cards.length; i++){// for loop desided to increment as long as the index is 
      // less than the lenght of player 1 cards.
      if (player1Cards[i].value > player2Cards[i].value)//If statement designed to create a comparison that
      // results in boolean that if true the code between the curly braces will execute. If false the program moves to 
      // the following else if statement. 
         {player1Score = player1Score + 1
            console.log(`Round ${i+1}: Player 1 Plays ${player1Cards[i].name} of ${player1Cards[i].suit} and Player 2 Plays ${player2Cards[i].name} of ${player2Cards[i].suit}

            Player 1 Wins Round ${[i+1]}

            Score after Round ${i+1}: Player 1: ${player1Score} Player 2: ${player2Score}
            `)}
         else if (player2Cards[i].value > player1Cards[i].value)//Else if statement designed to create a comparison that 
         // results in a boolean that if true the code between the curly braces will execute. If false the program moves 
         // to the following else statement.
         {  player2Score = player2Score + 1
            console.log(`Round ${i+1}: Player 1 Plays ${player1Cards[i].name} of ${player1Cards[i].suit} and Player 2 Plays ${player2Cards[i].name} of ${player2Cards[i].suit}
                        
            Player 2 Wins Round ${[i+1]}

            Score after Round ${i+1}: Player 1: ${player1Score} Player 2: ${player2Score}
            `)} 
         else {console.log(`Round ${i+1}: Player 1 Plays ${player1Cards[i].name} of ${player1Cards[i].suit} and Player 2 Plays ${player2Cards[i].name} of ${player2Cards[i].suit}

            Tie

            Score after Round ${i+1}: Player 1: ${player1Score} Player 2: ${player2Score}
            `)}}//Else statement designed to create a comparison that results in a boolean that if true the code between the 
            // curly braces will execute.

}

scoreDisplay()// Calls the scoreDisplay function above.

function scoreResult(){//Creates a final result declaration, and declares the winner.

   if (player1Score > player2Score){//If statement designed to create a comparison that results in a boolean that if true the code 
      // between the curly braces will execute. If false the program moves to the following else if statement.
   console.log(`
            Player 1 Wins Game!!!`)
      }else if (player2Score > player1Score){//Else if statement designed to create a comparison that results in boolean that if 
         //true the code between the curly braces will execute. If false the program moves to the following else statement.
      console.log(`
            Player 2 Wins Game!!!`)
      }else {console.log(`
            The Rusult of the Game is a Tie!!!`)}//Else statement designed to create a comparison that results in a boolean that 
            // if true the code between the curly braces will execute.
   }  

   scoreResult()// Calls the scoreResult function. 
