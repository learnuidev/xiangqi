const { blueKingMovements } = require("./blue-king");

const piecesMap = {
  "blue:king": {
    id: "blue-king",
    title: "Blue King",
    movements: blueKingMovements,
  },
};

const createPiece = ({ variant }) => {
  return piecesMap[variant];
};

module.exports.createPiece = createPiece;
