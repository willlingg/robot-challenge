import { Command } from "./command";
import { RobotState, moveRobot } from "../models/robot";
import { isValidPosition } from "../models/table";

export const moveCommand: Command = (robot: RobotState): RobotState => {
  const nextRobot = moveRobot(robot);
  if (isValidPosition(nextRobot.x, nextRobot.y)) {
    return nextRobot;
  }
  return robot;
};
