const { expect } = require("chai");

const { getRowAndCol } = require("../../src/utils/get-row-and-col");
const { getRookMovements } = require("../../src/utils/get-rook-movements");

describe("when you call getRookMovements", () => {
  it("and pass 41, it returns [42...49, 51,61...101]", () => {
    const rookMovements = getRookMovements(41);

    expect(rookMovements).to.be.an("array");
    expect(rookMovements?.length).to.equal(17);
  });

  it("and pass 79, it returns [71...78, 19,29...109] and the collection shouldn't contain 79", () => {
    const rookMovements = getRookMovements(79);

    expect(rookMovements).to.be.an("array");
    expect(rookMovements[0]).to.equal(71);
    expect(rookMovements?.includes(79)).to.equal(false);
  });
});
