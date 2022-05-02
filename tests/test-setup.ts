/* eslint-disable no-var */

// mocking TextEncoder/TextDecoder
const init = () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { TextEncoder, TextDecoder } = require("util");

  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
};
init();
