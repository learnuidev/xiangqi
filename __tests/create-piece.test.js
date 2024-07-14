const { expect } = require("chai");
const { createPiece } = require("../src/create-piece");

describe("when you call createPiece", () => {
  it("if you pass a correct variant, it creates a new piece", () => {
    const xiangqiPiece = createPiece({
      id: "blue-king",
      title: "Blue King",
      position: 15,
    });

    console.log(xiangqiPiece);

    expect(Object.keys(xiangqiPiece)).to.be.an("array");

    expect(Object.keys(xiangqiPiece)).to.be.an("array").that.include("title");
  });
});
