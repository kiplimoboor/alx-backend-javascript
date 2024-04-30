export default function updateUniqueItems(fruitMap) {
  fruitMap.forEach((value, key) => {
    if (fruitMap.get(key) === 1) {
      fruitMap.set(key, 100);
    }
  });
  return new Map();
}
