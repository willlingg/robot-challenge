import { createPlaceCommand } from "../src/commands/place";
import { moveCommand } from "../src/commands/move";
import { leftCommand } from "../src/commands/left";
import { rightCommand } from "../src/commands/right";
import { reportCommand } from "../src/commands/report";
import { createRobot, RobotState } from "../src/models/robot";

describe("Command Functions", () => {
  let robot: RobotState;

  beforeEach(() => {
    robot = createRobot();
  });

  test("createPlaceCommand should place the robot correctly", () => {
    const placeCommand = createPlaceCommand(1, 2, "EAST");
    robot = placeCommand(robot);
    expect(robot).toEqual({ x: 1, y: 2, direction: "EAST", placed: true });
  });

  test("createPlaceCommand should log an error for invalid position", () => {
    console.log = jest.fn();
    const placeCommand = createPlaceCommand(6, 6, "NORTH"); // assuming the table is 5x5
    robot = placeCommand(robot);
    expect(console.log).toHaveBeenCalledWith("Invalid position: 6, 6");
    expect(robot).toEqual({ x: 0, y: 0, direction: "NORTH", placed: false });
  });

  test("moveCommand should move the robot correctly", () => {
    robot = createPlaceCommand(0, 0, "NORTH")(robot);
    robot = moveCommand(robot);
    expect(robot).toEqual({ x: 0, y: 1, direction: "NORTH", placed: true });
  });

  test("leftCommand should rotate the robot correctly", () => {
    robot = createPlaceCommand(0, 0, "NORTH")(robot);
    robot = leftCommand(robot);
    expect(robot).toEqual({ x: 0, y: 0, direction: "WEST", placed: true });
  });

  test("rightCommand should rotate the robot correctly", () => {
    robot = createPlaceCommand(0, 0, "NORTH")(robot);
    robot = rightCommand(robot);
    expect(robot).toEqual({ x: 0, y: 0, direction: "EAST", placed: true });
  });

  test("reportCommand should output the correct position", () => {
    console.log = jest.fn();
    robot = createPlaceCommand(1, 2, "EAST")(robot);
    reportCommand(robot);
    expect(console.log).toHaveBeenCalledWith("1,2,EAST");
  });
});
