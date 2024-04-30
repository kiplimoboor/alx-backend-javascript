/* eslint-disable operator-linebreak */
export default function cleanSet(set, startString) {
  if (
    !set ||
    !startString ||
    !(set instanceof Set) ||
    typeof startString !== 'string'
  ) {
    return '';
  }

  const vals = Array.from(set);

  return vals
    .filter((i) => i.startsWith(startString))
    .map((i) => i.slice(startString.length))
    .join('-');
}
