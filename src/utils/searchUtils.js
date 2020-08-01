const getParts = (str) => {
  const trimmed = str.trim();
  if (trimmed.length === 0) return [];
  const parts = trimmed.split(" ");
  const pruned = parts.filter((part) => part.length !== 0);
  return pruned;
};

const getMaximumPartLength = (parts) => {
  let maxLength = 0;
  for (const part of parts) {
    if (part.length > maxLength) maxLength = part.length;
  }

  return maxLength;
};

const strMatchesAllParts = (str, parts) => {
  for (const part of parts) {
    if (!str.includes(part)) return false;
  }
  return true;
};

export { getParts, getMaximumPartLength, strMatchesAllParts };
