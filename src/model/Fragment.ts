interface Fragment {
  path: string;
  line: number;
  position: number;
  lineStart: number;
  children?: Fragment[];
}

export { Fragment };
