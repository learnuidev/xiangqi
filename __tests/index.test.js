const { expect } = require("chai");
const { xiangqi } = require("../src");

describe("when you call xiangqi with no arguments", () => {
  it("returns a new xiangqi game", () => {
    const xiangqiGame = xiangqi();
    expect(xiangqiGame).to.be.an("object");
  });
});
