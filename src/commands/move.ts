import { RobotState } from "../models/robot";
import { isValidPosition } from "../models/table";

export const move = (robot: RobotState): RobotState => {
  const robotState = robot;

  let { x, y } = robotState;
  switch (robotState.direction) {
    case "NORTH":
      y += 1;
      break;
    case "SOUTH":
      y -= 1;
      break;
    case "EAST":
      x += 1;
      break;
    case "WEST":
      x -= 1;
      break;
  }
  const nextRobot = { ...robotState, x, y, placed: robotState.placed };

  if (isValidPosition(nextRobot.x, nextRobot.y)) {
    return nextRobot;
  }
  return robot;
};
