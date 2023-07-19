class card {
   constructor(name, suit, value) {
      this.name = name;
      this.suit = suit;
      this.value = value;
   }
}
let deck = [
  new card('Ace', 'Hearts', 14),
  new card('Two', 'Hearts', 2),
  new card('Three', 'Hearts', 3),
  new card('Four', 'Hearts', 4),
  new card('Five', 'Hearts', 5),
  new card('Six', 'Hearts', 6),
  new card('Seven', 'Hearts', 7),
  new card('Eight', 'Hearts', 8),
  new card('Nine', 'Hearts', 9),
  new card('Ten', 'Hearts', 10),
  new card('Jack', 'Hearts', 11),
  new card('Queen', 'Hearts', 12),
  new card('King', 'Hearts', 13),
  new card('Ace', 'Diamonds', 14),
  new card('Two', 'Diamonds', 2),
  new card('Three', 'Diamonds', 3),
  new card('Four', 'Diamonds', 4),
  new card('Five', 'Diamonds', 5),
  new card('Six', 'Diamonds', 6),
  new card('Seven', 'Diamonds', 7),
  new card('Eight', 'Diamonds', 8),
  new card('Nine', 'Diamonds', 9),
  new card('Ten', 'Diamonds', 10),
  new card('Jack', 'Diamonds', 11),
  new card('Queen', 'Diamonds', 12),
  new card('King', 'Diamonds', 13),
  new card('Ace', 'Clubs', 14),
  new card('Two', 'Clubs', 2),
  new card('Three', 'Clubs', 3),
  new card('Four', 'Clubs', 4),
  new card('Five', 'Clubs', 5),
  new card('Six', 'Clubs', 6),
  new card('Seven', 'Clubs', 7),
  new card('Eight', 'Clubs', 8),
  new card('Nine', 'Clubs', 9),
  new card('Ten', 'Clubs', 10),
  new card('Jack', 'Clubs', 11),
  new card('Queen', 'Clubs', 12),
  new card('King', 'Clubs', 13),
  new card('Ace', 'Spades', 14),
  new card('Two', 'Spades', 2),
  new card('Three', 'Spades', 3),
  new card('Four', 'Spades', 4),
  new card('Five', 'Spades', 5),
  new card('Six', 'Spades', 6),
  new card('Seven', 'Spades', 7),
  new card('Eight', 'Spades', 8),
  new card('Nine', 'Spades', 9),
  new card('Ten', 'Spades', 10),
  new card('Jack', 'Spades', 11),
  new card('Queen', 'Spades', 12),
  new card('King', 'Spades', 13)
];

function shuffle(array) {
   let currentIndex = array.length,  randomIndex;
 
   // While there remain elements to shuffle.
   while (currentIndex != 0) {
 
     // Pick a remaining element.
     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex--;
 
     // And swap it with the current element.
     [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
   }
 
   return array;
 }

shuffle(deck);
// console.log(deck);
player1Cards = deck.slice(0,26);
// console.log(player1Cards)
player2Cards = deck.slice(26,52);
// console.log(player2Cards);
let player1Score = 0
let player2Score = 0

function scoreDisplay(){

   for (let i = 0; i < player1Cards.length; i++){
      if (player1Cards[i].value > player2Cards[i].value)
         {player1Score = player1Score + 1
            console.log(`Round ${i+1}: Player 1 Plays ${player1Cards[i].name} of ${player1Cards[i].suit} and Player 2 Plays ${player2Cards[i].name} of ${player2Cards[i].suit}

            Player 1 Wins Round ${[i+1]}

            Score after Round ${i+1}: Player 1: ${player1Score} Player 2: ${player2Score}
            `)}
         else if (player2Cards[i].value > player1Cards[i].value)
         {  player2Score = player2Score + 1
            console.log(`Round ${i+1}: Player 1 Plays ${player1Cards[i].name} of ${player1Cards[i].suit} and Player 2 Plays ${player2Cards[i].name} of ${player2Cards[i].suit}
                        
            Player 2 Wins Round ${[i+1]}

            Score after Round ${i+1}: Player 1: ${player1Score} Player 2: ${player2Score}
            `)} 
         else {console.log(`Round ${i+1}: Player 1 Plays ${player1Cards[i].name} of ${player1Cards[i].suit} and Player 2 Plays ${player2Cards[i].name} of ${player2Cards[i].suit}

            Tie

            Score after Round ${i+1}: Player 1: ${player1Score} Player 2: ${player2Score}
            `)}}

}

scoreDisplay()

function scoreResult(){

   if (player1Score > player2Score){
   console.log(`
            Player 1 Wins Game!!!`)
      }else if (player2Score > player1Score){
      console.log(`
            Player 2 Wins Game!!!`)
      }else {console.log(`
            The Rusult of the Game is a Tie!!!`)}
   }  

   scoreResult()


