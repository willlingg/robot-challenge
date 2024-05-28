import { Command } from "./command";
import { RobotState, turnLeft } from "../models/robot";

export const leftCommand: Command = (robot: RobotState): RobotState => {
  return turnLeft(robot);
};
