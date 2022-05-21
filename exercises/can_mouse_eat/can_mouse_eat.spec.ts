import canMouseEat from ".";

describe("Can Mouse Eat", () => {
    const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]
const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]
  it("", () => {
    expect(canMouseEat('up', room)).toBeFalsy();
  });
  it("", () => {
    expect(canMouseEat('down', room)).toBeTruthy();
  });
  it("", () => {
    expect(canMouseEat('right', room)).toBeFalsy();
  });
  it("", () => {
    expect(canMouseEat('left', room)).toBeFalsy();
  });


  it("", () => {
    expect(canMouseEat('up', room2)).toBeFalsy();
  });
  it("", () => {
    expect(canMouseEat('down', room2)).toBeFalsy();
  });
  it("", () => {
    expect(canMouseEat('right', room2)).toBeTruthy();
  });
  it("", () => {
    expect(canMouseEat('left', room2)).toBeFalsy();
  });
});
