import { createRobot, Robot } from "../src/models/robot";

describe("Robot Functions", () => {
  let robot: Robot;

  beforeEach(() => {
    robot = createRobot();
  });

  test("createRobot should initialize the robot correctly", () => {
    expect(robot.robotState).toEqual({
      x: 0,
      y: 0,
      direction: "NORTH",
      placed: false,
    });
  });

  test("placeRobot should place the robot correctly", () => {
    robot.placeRobot(1, 2, "EAST");
    expect(robot.robotState).toEqual({
      x: 1,
      y: 2,
      direction: "EAST",
      placed: true,
    });
  });

  test("moveRobot should move the robot correctly", () => {
    robot.placeRobot(0, 0, "NORTH");
    robot.moveRobot();
    expect(robot.robotState).toEqual({
      x: 0,
      y: 1,
      direction: "NORTH",
      placed: true,
    });

    robot.placeRobot(0, 0, "EAST");
    robot.moveRobot();
    expect(robot.robotState).toEqual({
      x: 1,
      y: 0,
      direction: "EAST",
      placed: true,
    });
  });

  test("turnLeft should rotate the robot correctly", () => {
    robot.placeRobot(0, 0, "NORTH");
    robot.leftRobot();
    expect(robot.robotState).toEqual({
      x: 0,
      y: 0,
      direction: "WEST",
      placed: true,
    });

    robot.leftRobot();
    expect(robot.robotState).toEqual({
      x: 0,
      y: 0,
      direction: "SOUTH",
      placed: true,
    });
  });

  test("turnRight should rotate the robot correctly", () => {
    robot.placeRobot(0, 0, "NORTH");
    robot.rightRobot();
    expect(robot.robotState).toEqual({
      x: 0,
      y: 0,
      direction: "EAST",
      placed: true,
    });

    robot.rightRobot();
    expect(robot.robotState).toEqual({
      x: 0,
      y: 0,
      direction: "SOUTH",
      placed: true,
    });
  });
});
