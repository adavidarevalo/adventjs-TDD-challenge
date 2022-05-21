import learn from ".";

describe("Learn", () => {
  it("", () => {
    const courses = [2, 3, 8, 1, 4];

    const result = [0, 2];    

    expect(learn(10, courses)).toEqual(result);
  });
  it("", () => {
    const courses = [2, 10, 4, 1];

    const result = [1, 2];

    expect(learn(15, courses)).toEqual(result);
  });
  it("", () => {
    const courses = [10, 15, 20, 5];

    const result = [0, 1];

    expect(learn(25, courses)).toEqual(result);
  });
  it("", () => {
    const courses = [8, 2, 1];

    const result = [1, 2];

    expect(learn(8, courses)).toEqual(result);
  });
  it("", () => {
    const courses = [8, 2, 1, 4, 3];

    const result = [3, 4];

    expect(learn(8, courses)).toEqual(result);
  });
  it("", () => {
    const courses = [10, 14, 20];

    expect(learn(4, courses)).toBeNull();
  });
  it("", () => {
    const courses = [5, 5, 5];

    expect(learn(5, courses)).toBeNull();
  });
});
