const getRowAndCol = (id) => {
  // TODO: Validation

  if (id > 100) {
    return {
      row: 10,
      col: id % 100,
    };
  }

  return {
    row: Math.floor(id / 10),
    col: id % 10,
  };
};

module.exports.getRowAndCol = getRowAndCol;
