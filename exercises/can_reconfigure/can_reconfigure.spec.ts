import canReconfigure from ".";

describe("Can Reconfigure", () => {
  it("", () => {
    const from = "BAL";
    const to = "LIB";

    expect(canReconfigure(from, to)).toBeTruthy();
  });
  it("", () => {
    const from = "CON";
    const to = "JUU";

    expect(canReconfigure(from, to)).toBeFalsy();
  });
  it("", () => {
    const from = "XBOX";
    const to = "XXBO";

    expect(canReconfigure(from, to)).toBeFalsy();
  });
  it.only("", () => {
    const from = "XBOX";
    const to = "XOBX";

    expect(canReconfigure(from, to)).toBeTruthy();
  });
  it("", () => {
    const from = "MMM";
    const to = "MID";

    expect(canReconfigure(from, to)).toBeFalsy();
  });
  it("", () => {
    const from = "AA";
    const to = "MID";

    expect(canReconfigure(from, to)).toBeFalsy();
  });
});
