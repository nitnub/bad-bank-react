function currencyToInt(string) {
  const numAsString = string
    .replace('$', '')
    .replace(',', '')
    .replace('.00', '');
  return Number(numAsString);
}

export default currencyToInt;