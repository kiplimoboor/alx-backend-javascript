export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }

  const string = [];
  for (const i of set) {
    if (i.startsWith(startString)) {
      string.push(i.slice(startString.length));
    }
  }
  return string.join('-');
}
