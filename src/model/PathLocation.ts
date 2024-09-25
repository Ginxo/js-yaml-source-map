import { Fragment } from "./Fragment";

type PathLocation = {
  line: number;
  position: number;
  lineStart: number;
  children?: Fragment[];
};

export { PathLocation };
