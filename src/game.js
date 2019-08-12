import next from "./gol";

export default class Game {
  constructor(initState) {
    this.state = initState;
  }

  next() {
    this.state = next(this.state);
  }

  getBoard() {
    return this.state;
  }

  isAlive() {
    return (
      this.state.reduce(function iterateLines(result, line) {
        return (
          result +
          line.reduce(function iterateRow(lineSum, item) {
            return lineSum + item;
          }, 0)
        );
      }, 0) > 0
    );
  }
}
