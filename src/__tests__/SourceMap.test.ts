import SourceMap from "@jysm/SourceMap";
import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { SourceLocation } from "@jysm/model/SourceLocation";

describe("SourceMap", () => {
  const exampleData = fs.readFileSync(
    path.resolve(__dirname, "example.yaml"),
    "utf8"
  );

  it.each([
    [
      "basic path case",
      "fruits",
      {
        starting: { line: 2, column: 1, position: 1 },
        ending: { line: 4, column: 11, position: 39 },
      },
    ],
    // [
    //   "first element of the array",
    //   "people.0.age",
    //   {
    //     column: 8,
    //     line: 7,
    //     position: 70,
    //   },
    // ],
    // [
    //   "second element of the array",
    //   ".people[1].name",
    //   {
    //     column: 9,
    //     line: 8,
    //     position: 83,
    //   },
    // ],
    // [
    //   "second element of the array",
    //   ["states", "NY", "capital"],
    //   {
    //     column: 12,
    //     line: 15,
    //     position: 173,
    //   },
    // ],
  ])(
    "%s",
    (
      _title: string,
      field: string | string[],
      expectedObject: SourceLocation
    ) => {
      // Arrange
      const map = new SourceMap();

      // Act
      yaml.load(exampleData, { listener: map.listen() });

      // Assert
      expect(map.lookup(field)).toStrictEqual(expectedObject);
    }
  );
});
