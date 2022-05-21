import checkIsSameTree from ".";

describe("Check Is Same Tree", () => {
  const tree = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null },
  };
  const tree2 = {
    value: 1,
    left: {
      value: 3,
      left: { value: 2, left: null, right: null },
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: { value: 4, left: null, right: null },
    },
  };

  it("", () => {
    expect(checkIsSameTree(tree, tree)).toBeTruthy();
  });
  it("", () => {
    expect(checkIsSameTree(tree, tree2)).toBeFalsy();
  });
  it("", () => {
    expect(checkIsSameTree(tree2, tree2)).toBeTruthy();
  });
});
