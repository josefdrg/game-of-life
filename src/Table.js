import React, { Component } from "react";
import Button from "./Button";
import { next, countNeighbours } from "./gol";
import cow from "./cow.png";
import grass from "./grass.png";

class Table extends Component {
  state = {
    input: [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    initialState: [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ]
  };

  autoTable = () => {
    this.myInterval = setInterval(
      () =>
        this.setState(prevState => {
          return {
            input: next(this.state.input)
          };
        }),
      400
    );
  };

  stopAutoTable = () => {
    clearInterval(this.myInterval);
  };

  renderNewBoard = () => {
    console.log("click");
    this.setState(prevState => {
      return {
        input: this.next(prevState.input)
      };
    });
  };

  resetHandler = () => {
    this.setState({ input: this.state.initialState });
  };

  next = currentState => {
    currentState = this.state.input;
    const newState = [];
    for (let x = 0; x < currentState.length; x += 1) {
      newState[x] = [];
      for (let y = 0; y < currentState.length; y += 1) {
        // iterate over each cell
        const count = countNeighbours(x, y, currentState);
        if (count < 2 || count > 3) {
          newState[x][y] = 0;
        } else {
          newState[x][y] = currentState[x][y];
        }
        if (currentState[x][y] === 0 && count === 3) {
          newState[x][y] = 1;
        }
      }
    }
    return newState;
  };

  renderTable = () => {
    const newTable = this.state.input.map(row => {
      return (
        <tr>
          {row.map(el => {
            if (el === 1) {
              return (
                <td
                  style={{
                    backgroundImage: `url(${cow})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                  }}
                />
              );
            } else if (el === 0) {
              return (
                <td
                  style={{
                    backgroundImage: `url(${grass})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                  }}
                />
              );
            } else {
              return null;
            }
          })}
        </tr>
      );
    });
    return newTable;
  };

  render() {
    return (
      <div>
        <Button onClick={this.resetHandler} reset>
          Reset
        </Button>
        <Button onClick={this.renderNewBoard}>New state</Button>
        <Button onClick={this.autoTable}>Autoplay</Button>
        <Button onClick={this.stopAutoTable} reset>
          Stop Autoplay
        </Button>

        <table>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
