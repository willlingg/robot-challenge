import { RobotState } from "../models/robot";

export type Command = (robot: RobotState) => RobotState;
