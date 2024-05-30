import { RobotState } from "../models/robot";

export const report = (robot: RobotState): string => {
  if (!robot.placed) return "Robot is not placed";
  return `${robot.x},${robot.y},${robot.direction}`;
};
