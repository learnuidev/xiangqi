const { expect } = require("chai");
const { xiangqi } = require("../src");
const { createBoard } = require("../src/create-board");

describe("when you call createBoard", () => {
  it("creates a xiangqi board", () => {
    const xiangqiBoard = createBoard();

    // console.log(xiangqiBoard);

    expect(xiangqiBoard).to.be.an("array");
    expect(xiangqiBoard?.length).to.equal(90);

    expect(xiangqiBoard[0].id).to.equal("11");
    expect(xiangqiBoard[45].id).to.equal("61");
    expect(xiangqiBoard[89].id).to.equal("109");
  });
});
