import { Robot, RobotState } from "../models/robot";

export type Command = (robot: Robot) => RobotState;
