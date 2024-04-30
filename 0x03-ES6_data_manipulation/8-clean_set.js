/* eslint-disable operator-linebreak */
export default function cleanSet(set, startString) {
  if (startString.length === 0 || startString === undefined) return '';

  return [...set]
    .filter((i) => (i !== undefined ? i.startsWith(startString) : ''))
    .map((i) => (i !== undefined ? i.slice(startString.length) : ''))
    .join('-');
}
