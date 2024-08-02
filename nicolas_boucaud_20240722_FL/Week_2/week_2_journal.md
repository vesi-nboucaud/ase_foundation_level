## [D1] 2024-07-29: First Version of Game of life
**Entry:**
Kata here: https://kata-log.rocks/game-of-life-kata
First version of Game of Life. I decided to go for a version of this Kata with an infinite number of possible neighbors. I tried to apply SRP and I declared a constructor to handle the state of a cell as well as its neighbors.

## [D2] 2024-07-30: Second Version of Game of life
**Entry:**
For this second version I focused on good naming as well as a better test coverage.

## [D3] 2024-07-31: Third Version of Game of life
**Entry:**
For this third version I focused on a better test coverage and a better naming. IOSP is also present with the constructor (integration.)

## [D4] 2024-08-01: Fourth Version of Game of life
**Entry:**
For this this version I created a brand new class "GridManager" to handle cells history and tried to apply SRP as much as possible. I need to improve test coverage as many new cases to handle have emerged.

## [D5] 2024-08-02: Fifth Version of Game of life
**Entry:**
For this this version I came back to an infinite space for the Game of life. By that I mean that there are no grid constraints for cells. It means that a given cell can have more than 8 neighbords for example. The information about cells neighbors are only holded by cells.
I tried to optimize the code as muche as possible as well using a good test coverage and IOSP.