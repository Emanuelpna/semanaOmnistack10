module.exports = function parseStringAsArray(arrayAsString) {
  return arrayAsString.split(',').map(itemArray => itemArray.trim());
}