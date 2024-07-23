const { expect } = require("chai");
const { Engine } = require("../src/wukong");
// const { xiangqi } = require("../src");

describe("when you call Wukong engine with no arguments", () => {
  it("returns a new xiangqi game", () => {
    const wukongGame = Engine();

    console.log("wukungGame", wukongGame);

    expect(wukongGame).to.be.an("object");
  });
});
