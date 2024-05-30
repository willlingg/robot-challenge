import { RobotState } from "../models/robot";
import { turnRight } from "../models/direction";

export const right = (robot: RobotState): RobotState => {
  return {
    ...robot,
    direction: turnRight(robot.direction),
  };
};
