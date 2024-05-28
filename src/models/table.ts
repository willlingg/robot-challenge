// Setting table dimensions
export const TABLE_WIDTH = 5;
export const TABLE_HEIGHT = 5;

// Check if the position is valid
export const isValidPosition = (x: number, y: number): boolean => {
  return x >= 0 && x < TABLE_WIDTH && y >= 0 && y < TABLE_HEIGHT;
};
