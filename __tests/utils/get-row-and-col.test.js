const { expect } = require("chai");

const { getRowAndCol } = require("../../src/utils/get-row-and-col");

describe("when you call getRowAndCol", () => {
  it("and pass 109, it returns row: 10, col: 9", () => {
    const rowAndCol = getRowAndCol(109);

    expect(rowAndCol).to.be.an("object");

    expect(rowAndCol.row).to.equal(10);
    expect(rowAndCol.col).to.equal(9);
  });
  it("and pass 41, it returns row: 4, col: 1", () => {
    const rowAndCol = getRowAndCol(41);

    expect(rowAndCol).to.be.an("object");

    expect(rowAndCol.row).to.equal(4);
    expect(rowAndCol.col).to.equal(1);
  });
});
