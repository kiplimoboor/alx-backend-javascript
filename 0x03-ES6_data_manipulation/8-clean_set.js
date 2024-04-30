/* eslint-disable operator-linebreak */
export default function cleanSet(set, startString) {
  if (
    !set ||
    !(set instanceof Set) ||
    startString.length === 0 ||
    startString === undefined ||
    typeof startString !== 'string'
  ) {
    return '';
  }

  return [...set]
    .filter((item) => (item !== undefined ? item.startsWith(startString) : ''))
    .map((str) => (str !== undefined ? str.slice(startString.length) : ''))
    .join('-');
}
