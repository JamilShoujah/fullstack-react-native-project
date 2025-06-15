export function formatNumber(input: string) {
  return input.length === 1 ? `0${input}` : input;
}
