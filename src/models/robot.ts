import { Direction } from "./direction";
import { place } from "../commands/place";
import { move } from "../commands/move";
import { left } from "../commands/left";
import { right } from "../commands/right";
import { report } from "../commands/report";

export interface RobotState {
  x: number;
  y: number;
  direction: Direction;
  placed: boolean;
}

export interface Robot {
  robotState: RobotState;
  placeRobot: (x: number, y: number, direction: Direction) => void;
  moveRobot: () => void;
  leftRobot: () => void;
  rightRobot: () => void;
  reportRobot: () => void;
}

export const createRobot = (): Robot => {
  let robot: RobotState = {
    x: 0,
    y: 0,
    direction: "NORTH",
    placed: false,
  };

  return {
    get robotState() {
      return robot;
    },
    placeRobot: (x: number, y: number, direction: Direction) => {
      robot = place(robot, x, y, direction);
    },
    moveRobot: () => {
      robot = move(robot);
    },
    leftRobot: () => {
      robot = left(robot);
    },
    rightRobot: () => {
      robot = right(robot);
    },
    reportRobot: () => {
      console.log(report(robot));
    },
  };
};
