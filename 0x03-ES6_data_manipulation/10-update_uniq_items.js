export default function updateUniqueItems(fruitMap) {
  try {
    fruitMap.forEach((value, key) => {
      if (fruitMap.get(key) === 1) {
        fruitMap.set(key, 100);
      }
    });
  } catch (e) {
    throw new Error('Cannot process');
  }
  return fruitMap;
}
