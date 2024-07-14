const redKingPositions = [84, 85, 86, 94, 95, 96, 104, 105, 106];

const redKingPositionsVisual = `
        84  85  86
        94  95  96
        104 105 106
`;

const redKingMovements = {
  84: [85, 94],
  85: [84, 86, 95],
  86: [85, 96],

  94: [84, 95, 104],
  95: [85, 105, 94, 96],
  96: [86, 95, 106],

  104: [94, 105],
  105: [104, 95, 106],
  106: [96, 105],
};

module.exports.redKingMovements = redKingMovements;
