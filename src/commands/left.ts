import { RobotState } from "../models/robot";
import { turnLeft } from "../models/direction";

export const left = (robot: RobotState): RobotState => {
  return {
    ...robot,
    direction: turnLeft(robot.direction),
  };
};
