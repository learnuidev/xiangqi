const { expect } = require("chai");
const { xiangqi } = require("../src");
const { createPiece } = require("../src/create-piece");

describe("when you call createPiece", () => {
  it("if you pass a correct variant, it creates a new piece", () => {
    const xiangqiPiece = createPiece({ variant: "blue:king" });

    console.log(xiangqiPiece);

    expect(Object.keys(xiangqiPiece)).to.be.an("array");

    expect(Object.keys(xiangqiPiece))
      .to.be.an("array")
      .that.include("movements");
  });
});
