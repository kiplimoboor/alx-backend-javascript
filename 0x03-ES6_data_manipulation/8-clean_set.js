/* eslint-disable operator-linebreak */
export default function cleanSet(set, startString) {
  if (!startString) return '';

  return [...set]
    .filter((i) => (i !== undefined ? i.startsWith(startString) : ''))
    .map((i) => (i !== undefined ? i.slice(startString.length) : ''))
    .join('-');
}
