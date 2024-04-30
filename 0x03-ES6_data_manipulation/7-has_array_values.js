export default function hasValuesFromArray(set, array) {
  const sub = new Set(array);
  return sub.isSubsetOf(set);
}
