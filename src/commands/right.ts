import { Command } from "./command";
import { RobotState, turnRight } from "../models/robot";

export const rightCommand: Command = (robot: RobotState): RobotState => {
  return turnRight(robot);
};
