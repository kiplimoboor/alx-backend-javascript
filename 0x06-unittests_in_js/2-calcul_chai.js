function calculateNumber(type, a, b) {
  const [first, second] = [Math.round(a), Math.round(b)];
  switch (type) {
    case 'SUM':
      return first + second;
    case 'SUBTRACT':
      return first - second;
    case 'DIVIDE':
      if (second == 0) return 'Error';
      return first / second;
  }
}

module.exports = calculateNumber;
