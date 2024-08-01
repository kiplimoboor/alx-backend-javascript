function getPaymentTokenFromAPI(success) {
  if (success) {
    return new Promise((resolve, _) => {
      resolve({ data: 'Successful response from the API' });
    });
  }
}

module.exports = getPaymentTokenFromAPI;
