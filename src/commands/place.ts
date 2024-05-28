import { Command } from "./command";
import { RobotState, placeRobot } from "../models/robot";
import { Direction } from "../models/direction";
import { isValidPosition } from "../models/table";

export const createPlaceCommand = (
  x: number,
  y: number,
  direction: Direction
): Command => {
  return (robot: RobotState): RobotState => {
    if (isValidPosition(x, y)) {
      return placeRobot(robot, x, y, direction);
    } else {
      console.log(`Invalid position: ${x}, ${y}`);
    }
    return robot;
  };
};
