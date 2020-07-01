export const formatPhp = (value: number) => {
  if (value && isNaN(Number(value))) {
    return '';
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PHP',
  }).format(value);
};
