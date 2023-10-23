const { urlApi } = require("../../config.json");
const colors = {
  red: "D64638",
  blue: "387ED6",
  green: "42D638",
  black: "111111",
  white: "FAFAFA",
  gray: "808080",
};
const createQr = async (text, color, bgcolor) => {
  color = colors[color];
  bgcolor = colors[bgcolor];
  return `${urlApi}&data=${text}&color=${color}&bgcolor=${bgcolor}`;
};
module.exports = { createQr };
