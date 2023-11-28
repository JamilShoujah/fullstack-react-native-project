export function totalPriceCalc(
  price: number,
  quantity: number,
  discount: number,
): number {
  let total: number = price * quantity;
  if (discount !== 0) {
    const discountAmount: number = total * (discount / 100);
    total -= discountAmount;
  }
  return parseFloat(total.toFixed(2));
}
