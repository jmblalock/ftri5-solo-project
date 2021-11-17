// CommonJS Named Exports
const red = "color: red;";
const blue = "color: blue;";
const makeColorStyle = (color) => `color: ${color};`;

// instead of...
/*
module.exports
*/

exports.red = red;
exports.blue = blue;
exports.makeColorStyle = makeColorStyle;
