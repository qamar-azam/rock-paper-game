# Rock, Paper, Scissors Betting Game

This is a simple Rock, Paper, Scissors game built using React and TypeScript. The game allows a player to place bets on Rock, Paper, or Scissors, and compete against the computer. The player starts with a balance of 5000, and the game includes different winning rates depending on the type of bet placed.

### Requirements

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

### Installation

- Clone the Repository

```
git clone https://github.com/qamar-azam/rock-paper-game
```

```
cd rock-paper-scissors-betting-game
```

- Install Dependencies

```
npm install
```

- Start the Development Server

```
npm start
```

The app will be available at http://localhost:3000.

### Features

- Bets: Players can bet on Rock, Paper, or Scissors.

- Balance: Players start with a balance of 5000 and can place bets in multiples of 500.

- Betting Rules:

  - Players can bet on one or two options per round.

  - Betting on a single option gives a winning multiplier of 14.

  - Betting on two options gives a winning multiplier of 3.

  - Tied bets return the bet amount to the player.

- Result Calculation: The computer randomly selects an option, and the results are calculated based on the player's bets and the computer's choice.

- Reset: Players can reset the game.
