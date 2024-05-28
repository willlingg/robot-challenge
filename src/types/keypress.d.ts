declare module "keypress" {
  import { ReadStream } from "tty";

  function keypress(stream: ReadStream): void;

  export = keypress;
}
