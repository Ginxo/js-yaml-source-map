import { Location } from "./model/Location";
import { PathLocation } from "./model/PathLocation";

const pathInfoToLocation = (
  pathLocation: PathLocation,
  index = 0
): Location => ({
  line: pathLocation.line + index,
  column: pathLocation.position - pathLocation.lineStart + 1,
  position: pathLocation.position,
});

export { pathInfoToLocation };
