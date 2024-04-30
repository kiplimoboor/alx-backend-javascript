export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }

  const vals = Array.from(set);

  return vals
    .filter((i) => i.startsWith(startString))
    .map((i) => i.slice(startString.length))
    .join('-');
}
