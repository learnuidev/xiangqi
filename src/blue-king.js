// === Blue King
const blueKingPositions = [14, 15, 16, 24, 25, 26, 34, 35, 36];

const blueKingPositionsVisual = `
        14  15  16
        24  25  26
        34  35  36
`;

const blueKingMovements = {
  14: [15, 24],
  15: [14, 16, 25],
  16: [15, 26],

  24: [14, 25, 34],
  25: [15, 35, 24, 26],
  26: [16, 25, 36],

  34: [24, 35],
  35: [34, 25, 36],
  36: [26, 35],
};

module.exports.blueKingMovements = blueKingMovements;
