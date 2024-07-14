const { pieces } = require("../../src/data/pieces");

const { expect } = require("chai");

describe("pieces", () => {
  it("kings positions should return [15, 105]", () => {
    const kingsPositions = Object.values(pieces)
      .filter((piece) => piece?.type === "king")
      .map((piece) => piece.position);

    expect(kingsPositions).to.be.an("array");
    expect(kingsPositions?.length).to.equal(2);

    expect(kingsPositions[0]).to.equal(15);
    expect(kingsPositions[1]).to.equal(105);
  });
  it("rook positions should return [11, 19, 101, 109]", () => {
    const rookPositions = Object.values(pieces)
      .filter((piece) => piece?.type === "rook")
      .map((piece) => piece.position);

    expect(rookPositions).to.be.an("array");
    expect(rookPositions?.length).to.equal(4);

    expect(rookPositions[0]).to.equal(11);
    expect(rookPositions[1]).to.equal(19);
    expect(rookPositions[2]).to.equal(101);
    expect(rookPositions[3]).to.equal(109);
  });

  it("should contain 10 pawns", () => {
    const pawns = Object.values(pieces).filter(
      (piece) => piece?.type === "pawn"
    );

    expect(pawns).to.be.an("array");
    expect(pawns?.length).to.equal(10);
  });
});
