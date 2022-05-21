import groupBy from ".";

describe("Group By", () => {
  it("", () => {
    const group = [6.1, 4.2, 6.3];

    const result = { 6: [6.1, 6.3], 4: [4.2] };

    expect(groupBy(group, Math.floor)).toEqual(result);
  });
  it("", () => {
    const group = ["one", "two", "three"];

    const result = { 3: ["one", "two"], 5: ["three"] };

    expect(groupBy(group, "length")).toEqual(result);
  });
  it("", () => {
    const group = [{ age: 23 }, { age: 24 }];

    const result = { 23: [{ age: 23 }], 24: [{ age: 24 }] };

    expect(groupBy(group, "age")).toEqual(result);
  });
  it("", () => {
    const group = [1397639141184, 1363223700000];

    const result = { 2013: [1363223700000], 2014: [1397639141184] };

    expect(
      groupBy(group, (timestamp) => new Date(timestamp).getFullYear())
    ).toEqual(result);
  });
  it("", () => {
    const group = [
      { title: "JavaScript: The Good Parts", rating: 8 },
      { title: "Aprendiendo Git", rating: 10 },
      { title: "Clean Code", rating: 9 },
    ];

    const result = {
      8: [{ title: "JavaScript: The Good Parts", rating: 8 }],
      9: [{ title: "Clean Code", rating: 9 }],
      10: [{ title: "Aprendiendo Git", rating: 10 }],
    };

    expect(groupBy(group, "rating")).toEqual(result);
  });
});
