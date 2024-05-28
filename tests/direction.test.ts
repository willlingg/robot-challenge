import { turnLeft, turnRight, DIRECTIONS } from "../src/models/direction";

describe("Direction Functions", () => {
  test("turnLeft should return the correct direction", () => {
    expect(turnLeft("NORTH")).toBe("WEST");
    expect(turnLeft("WEST")).toBe("SOUTH");
    expect(turnLeft("SOUTH")).toBe("EAST");
    expect(turnLeft("EAST")).toBe("NORTH");
  });

  test("turnRight should return the correct direction", () => {
    expect(turnRight("NORTH")).toBe("EAST");
    expect(turnRight("EAST")).toBe("SOUTH");
    expect(turnRight("SOUTH")).toBe("WEST");
    expect(turnRight("WEST")).toBe("NORTH");
  });

  test("turnLeft and turnRight should handle all directions in DIRECTIONS array", () => {
    DIRECTIONS.forEach((direction, index) => {
      const leftIndex = index === 0 ? DIRECTIONS.length - 1 : index - 1;
      const rightIndex = index === DIRECTIONS.length - 1 ? 0 : index + 1;
      expect(turnLeft(direction)).toBe(DIRECTIONS[leftIndex]);
      expect(turnRight(direction)).toBe(DIRECTIONS[rightIndex]);
    });
  });
});
