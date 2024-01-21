export function splitDateString(input: string): string[] {
  const dateString = input.split('T')[0];
  const dateParts = dateString.split('-');
  return dateParts;
}
