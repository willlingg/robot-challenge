import { left } from "../src/commands/left";
import { right } from "../src/commands/right";
import { report } from "../src/commands/report";
import { createRobot, Robot } from "../src/models/robot";
import { isValidPosition } from "../src/models/table";

jest.mock("../src/models/table");

describe("Command Functions", () => {
  let robot: Robot;

  beforeEach(() => {
    robot = createRobot();
  });

  test("place should place the robot correctly", () => {
    (isValidPosition as jest.Mock).mockReturnValue(true);
    robot.placeRobot(1, 2, "EAST");
    expect(robot.robotState).toEqual({
      x: 1,
      y: 2,
      direction: "EAST",
      placed: true,
    });
  });

  test("move should move the robot correctly", () => {
    robot.placeRobot(0, 0, "NORTH");
    (isValidPosition as jest.Mock).mockReturnValue(true);
    robot.moveRobot();
    expect(robot.robotState).toEqual({
      x: 0,
      y: 1,
      direction: "NORTH",
      placed: true,
    });
  });

  test("move should not move the robot to an invalid position", () => {
    robot.placeRobot(0, 0, "NORTH");
    (isValidPosition as jest.Mock).mockReturnValue(false);
    robot.moveRobot();
    expect(robot.robotState).toEqual({
      x: 0,
      y: 0,
      direction: "NORTH",
      placed: true,
    });
  });

  test("left should rotate the robot correctly", () => {
    (isValidPosition as jest.Mock).mockReturnValue(true);
    robot.placeRobot(0, 0, "EAST");
    console.log("robot HAHA", robot.robotState);
    const updatedRobotState = left(robot.robotState);
    console.log("updatedRobotState", updatedRobotState);
    expect(updatedRobotState).toEqual({
      x: 0,
      y: 0,
      direction: "NORTH",
      placed: true,
    });
  });

  test("right should rotate the robot correctly", () => {
    (isValidPosition as jest.Mock).mockReturnValue(true);
    robot.placeRobot(0, 0, "NORTH");
    const updatedRobotState = right(robot.robotState);
    expect(updatedRobotState).toEqual({
      x: 0,
      y: 0,
      direction: "EAST",
      placed: true,
    });
  });

  test("place should log an error for invalid position", () => {
    (isValidPosition as jest.Mock).mockReturnValue(true);
    console.log = jest.fn();
    (isValidPosition as jest.Mock).mockReturnValue(false);
    robot.placeRobot(6, 6, "NORTH");
    expect(console.log).toHaveBeenCalledWith("Invalid position: 6, 6");
    expect(robot.robotState).toEqual({
      x: 0,
      y: 0,
      direction: "NORTH",
      placed: false,
    });
  });

  test("report should output the correct position", () => {
    (isValidPosition as jest.Mock).mockReturnValue(true);
    robot.placeRobot(1, 2, "EAST");
    const reportOutput = report(robot.robotState);
    expect(reportOutput).toBe("1,2,EAST");
  });

  test("report should indicate the robot is not placed", () => {
    (isValidPosition as jest.Mock).mockReturnValue(true);
    const reportOutput = report(robot.robotState);
    expect(reportOutput).toBe("Robot is not placed");
  });
});
