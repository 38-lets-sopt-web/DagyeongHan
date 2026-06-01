export const formatCurrency = (amount: number) =>
  amount > 0 ? `$${amount.toLocaleString()}` : '-'

export const formatDate = (date: string) => date.replaceAll('-', '.')
