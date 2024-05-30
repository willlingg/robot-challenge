import readline from "readline";
import { Robot, createRobot } from "./models/robot";
import { Direction } from "./models/direction";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> ",
  terminal: true,
});

let commandBuffer: string[] = [];
let isProcessing = false;

let robot: Robot = createRobot();

const executeCommand = (line: string) => {
  const [command, args] = line.trim().split(" ");

  switch (command) {
    case "PLACE":
      if (args) {
        const [x, y, direction] = args.split(",");
        robot.placeRobot(parseInt(x), parseInt(y), direction as Direction);
      }
      break;
    case "MOVE":
      robot.moveRobot();
      break;
    case "LEFT":
      robot.leftRobot();
      break;
    case "RIGHT":
      robot.rightRobot();
      break;
    case "REPORT":
      robot.reportRobot();
      break;
    default:
      console.log(`Unknown command: ${command}`);
  }
};

// Input buffer to gracefully handle large inputs
const processNextCommand = () => {
  if (commandBuffer.length > 0 && !isProcessing) {
    isProcessing = true;
    const nextCommand = commandBuffer.shift()!;
    executeCommand(nextCommand);
    rl.prompt();
    isProcessing = false;
    processNextCommand(); // Process the next command in the buffer
  }
};

rl.on("line", (line) => {
  commandBuffer.push(line);
  processNextCommand();
});

process.stdin.resume();

console.log("Enter commands (PLACE X,Y,F, MOVE, LEFT, RIGHT, REPORT):");
rl.prompt();
