const createBoard = () => {
  const rows = 10;
  const columns = 9;

  const board = new Array(rows)
    .fill(1)
    .map((x, i) => i + 1)
    .map((row) => {
      return new Array(columns)
        .fill(1)
        .map((x, i) => i + 1)
        .map((col) => {
          return {
            id: `${row}${col}`,
            row: row,
            col: col,
          };
        });
    });

  return board.flat();
};

module.exports.createBoard = createBoard;
