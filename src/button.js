/**
 *
 * @param {string} buttonName
 * @returns {Element}
 */

// commonJS export syntax
// module.exports = (buttonName) => {
//   return `Button: ${buttonName}`;
// };

// same, same, but different
const makeButton = (buttonName) => {
  return `Button: ${buttonName}`;
};

module.exports = makeButton;
