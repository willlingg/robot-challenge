export type Direction = "NORTH" | "EAST" | "SOUTH" | "WEST";

export const DIRECTIONS: Direction[] = ["NORTH", "EAST", "SOUTH", "WEST"];

export const turnLeft = (direction: Direction): Direction => {
  const index = DIRECTIONS.indexOf(direction);
  const newIndex = index === 0 ? DIRECTIONS.length - 1 : index - 1;
  return DIRECTIONS[newIndex];
};

export const turnRight = (direction: Direction): Direction => {
  const index = DIRECTIONS.indexOf(direction);
  const newIndex = index === DIRECTIONS.length - 1 ? 0 : index + 1;
  return DIRECTIONS[newIndex];
};
