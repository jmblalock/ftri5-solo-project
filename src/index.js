import nav from "./nav";
import { top, bottom } from "./footer";
import makeButton from "./button";

// only pull in what you are using
// webpack bundles...only what you are using
import { makeColorStyle } from "./button-styles";

console.log(
  nav(),
  top,
  bottom,
  makeButton("my first button!"),
  makeColorStyle("cyan")
);
