export const parseNumberToMoney = (number: number): string => {
  return number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
