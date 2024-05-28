import * as readline from "readline";
import { RobotState, createRobot } from "./models/robot";
import { createPlaceCommand } from "./commands/place";
import { moveCommand } from "./commands/move";
import { leftCommand } from "./commands/left";
import { rightCommand } from "./commands/right";
import { reportCommand } from "./commands/report";
import { Direction } from "./models/direction";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let robot: RobotState = createRobot();

rl.on("line", (line) => {
  const [command, args] = line.split(" ");

  switch (command) {
    case "PLACE":
      const [x, y, direction] = args.split(",");
      robot = createPlaceCommand(
        parseInt(x),
        parseInt(y),
        direction as Direction
      )(robot);
      break;
    case "MOVE":
      robot = moveCommand(robot);
      break;
    case "LEFT":
      robot = leftCommand(robot);
      break;
    case "RIGHT":
      robot = rightCommand(robot);
      break;
    case "REPORT":
      robot = reportCommand(robot);
      break;
    default:
      console.log(`Unknown command: ${command}`);
  }
});
