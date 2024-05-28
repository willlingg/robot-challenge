import { Command } from "./command";
import { RobotState, reportRobot } from "../models/robot";

export const reportCommand: Command = (robot: RobotState): RobotState => {
  console.log(reportRobot(robot));
  return robot;
};
