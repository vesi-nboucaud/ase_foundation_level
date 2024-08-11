## [D1] 2024-08-05: First Version of Game of life
**Entry:**
Kata here: https://www.codewars.com/kata/587136ba2eefcb92a9000027
For this first version I started thinking about the easiest way to represent the board. I created a simple test for dies result and applied IOSP by using a constructor.

## [D2] 2024-08-06: Second Version of Game of life
**Entry:**
For this second version I implemented a way to add a new player to the board. For the next iteration it would be nice to add some movements. I tried to use as much as possible good naming, IOSP and SRP.

## [D3] 2024-08-07: Third Version of Game of life
**Entry:**
For this third version I added a dedicated class for Players to be more compliant with SRP. We could have even one more class for the game (so Player, Board & Game). IOSP is also applied with a more modular code.

## [D4] 2024-08-08: Fourth Version of Game of life
**Entry:**
For this Fourth version I focused on good test coverage as well as IOSP: the constructor for the class SnakesLadders is an integration function, the reste are operation functions.

## [D5] 2024-08-09: Fourth Version of Game of life
**Entry:**
For this Fifth version I added a Readline to be able for both players to play in the console. I tried to have a good test coverage as well as using SRP (for example movePlayer consist in 3 other functions call). By adding a new Class (Game) and a constructor, I kept focusing on IOSP.