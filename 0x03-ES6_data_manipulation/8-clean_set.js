/* eslint-disable operator-linebreak */
export default function cleanSet(set, startString) {
  if (
    !(set instanceof Set) ||
    set.size === 0 ||
    typeof startString !== 'string' ||
    startString.length === 0
  ) {
    return '';
  }
  return [...set]
    .filter((word) => word.includes(startString))
    .map((word) => word.substring(startString.length))
    .join('-');
}
