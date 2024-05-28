import {
  createRobot,
  placeRobot,
  moveRobot,
  turnLeft,
  turnRight,
  reportRobot,
  RobotState,
} from "../src/models/robot";
import { Direction } from "../src/models/direction";

describe("Robot Functions", () => {
  let robot: RobotState;

  beforeEach(() => {
    robot = createRobot();
  });

  test("createRobot should initialize the robot correctly", () => {
    expect(robot).toEqual({ x: 0, y: 0, direction: "NORTH", placed: false });
  });

  test("placeRobot should place the robot correctly", () => {
    robot = placeRobot(robot, 1, 2, "EAST");
    expect(robot).toEqual({ x: 1, y: 2, direction: "EAST", placed: true });
  });

  test("moveRobot should move the robot correctly", () => {
    robot = placeRobot(robot, 0, 0, "NORTH");
    robot = moveRobot(robot);
    expect(robot).toEqual({ x: 0, y: 1, direction: "NORTH", placed: true });

    robot = placeRobot(robot, 0, 0, "EAST");
    robot = moveRobot(robot);
    expect(robot).toEqual({ x: 1, y: 0, direction: "EAST", placed: true });
  });

  test("turnLeft should rotate the robot correctly", () => {
    robot = placeRobot(robot, 0, 0, "NORTH");
    robot = turnLeft(robot);
    expect(robot).toEqual({ x: 0, y: 0, direction: "WEST", placed: true });

    robot = turnLeft(robot);
    expect(robot).toEqual({ x: 0, y: 0, direction: "SOUTH", placed: true });
  });

  test("turnRight should rotate the robot correctly", () => {
    robot = placeRobot(robot, 0, 0, "NORTH");
    robot = turnRight(robot);
    expect(robot).toEqual({ x: 0, y: 0, direction: "EAST", placed: true });

    robot = turnRight(robot);
    expect(robot).toEqual({ x: 0, y: 0, direction: "SOUTH", placed: true });
  });

  test("reportRobot should output the correct position", () => {
    robot = placeRobot(robot, 3, 3, "NORTH");
    expect(reportRobot(robot)).toBe("3,3,NORTH");
  });
});
