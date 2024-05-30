import { RobotState } from "../models/robot";
import { Direction } from "../models/direction";
import { isValidPosition } from "../models/table";

export const place = (
  robot: RobotState,
  x: number,
  y: number,
  direction: Direction
): RobotState => {
  if (isValidPosition(x, y)) {
    return {
      ...robot,
      x,
      y,
      direction,
      placed: true,
    };
  } else {
    console.log(`Invalid position: ${x}, ${y}`);
  }
  return robot;
};
