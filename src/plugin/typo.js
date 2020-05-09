module.exports = (input = '') => {
  // Ellipsis
  input = input.replace(/\.{3}/gim, '…');

  // Non-breaking space
  input = input.replace(
    / ([:;?!])(\s|$)/gim,
    (withColon, punctuation, after) => `\u202F${punctuation}${after}`
  );

  return input;
};
