export const formatCurrency = (amount: number) =>
  amount > 0 ? `$${amount.toLocaleString()}` : '-'
