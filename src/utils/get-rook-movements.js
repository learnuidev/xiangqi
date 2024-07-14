const { getRowAndCol } = require("./get-row-and-col");

const getColPositions = (pos) => {
  const { row, col } = getRowAndCol(pos);

  return new Array(9)
    .fill(1)
    .map((x, i) => i + 1)
    .filter((c) => c !== col)
    .map((c) => {
      return parseInt(`${row}${c}`);
    });
};
const getRowPositions = (pos) => {
  const { row, col } = getRowAndCol(pos);

  return new Array(10)
    .fill(1)
    .map((x, i) => i + 1)
    .filter((r) => r !== row)
    .map((r) => {
      return parseInt(`${r}${col}`);
    });
};

const getRookMovements = (pos) => {
  const colPositions = getColPositions(pos);
  const rowPositions = getRowPositions(pos);

  return [...colPositions, ...rowPositions];
};

module.exports.getRookMovements = getRookMovements;
