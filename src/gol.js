export function countNeighbours(x, y, state) {
  let count = 0;
  for (let i = x - 1; i <= x + 1; i += 1) {
    if (i < 0 || i >= state.length) {
      continue; // eslint-disable-line
    }
    for (let j = y - 1; j <= y + 1; j += 1) {
      if (j < 0 || j >= state[i].length) {
        continue; // eslint-disable-line
      }
      // all 9 valid states
      if (i === x && j === y) {
        continue; // eslint-disable-line
      }
      // all 8 neighbours
      count += state[i][j];
    }
  }
  return count;
}

export function next(currentState) {
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
}

export default next;
