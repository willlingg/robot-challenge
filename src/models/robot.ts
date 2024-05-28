import {
  Direction,
  turnLeft as turnLeftDirection,
  turnRight as turnRightDirection,
} from "./direction";

export interface RobotState {
  x: number;
  y: number;
  direction: Direction;
  placed: boolean;
}

export const createRobot = (): RobotState => ({
  x: 0,
  y: 0,
  direction: "NORTH",
  placed: false,
});

export const placeRobot = (
  robot: RobotState,
  x: number,
  y: number,
  direction: Direction
): RobotState => ({
  ...robot,
  x,
  y,
  direction,
  placed: true,
});

export const moveRobot = (robot: RobotState): RobotState => {
  if (!robot.placed) return robot;

  let { x, y } = robot;
  switch (robot.direction) {
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

  return { ...robot, x, y };
};

export const turnLeft = (robot: RobotState): RobotState => ({
  ...robot,
  direction: turnLeftDirection(robot.direction),
});

export const turnRight = (robot: RobotState): RobotState => ({
  ...robot,
  direction: turnRightDirection(robot.direction),
});

export const reportRobot = (robot: RobotState): string => {
  if (!robot.placed) return "Robot is not placed";
  return `${robot.x},${robot.y},${robot.direction}`;
};
