import { randomColor } from "randomcolor";

const getHash = (str) => {
  var hash = 0,
    i,
    chr;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  if (hash < 0) hash = -hash;
  return hash;
};

const getColor = (str, alpha = 1) => {
  const seed = getHash(str);
  const color = randomColor({
    luminosity: "light",
    format: "rgba",
    alpha,
    seed,
  });

  return color;
};

export { getColor };
