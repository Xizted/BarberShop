export const parseNumberToMoney = (number: number): string => {
  if (typeof number !== 'number' || isNaN(number)) {
    return 'N/A';
  }
  return number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
