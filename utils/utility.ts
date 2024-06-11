const MOBILE_NUMBER_PREFIXES = ["070", "071", "072", "074", "075", "076", "077", "078"];

export function generateRandomMobileNumber(): string {
  const randomIndex = Math.floor(Math.random() * MOBILE_NUMBER_PREFIXES.length);
  const prefix = MOBILE_NUMBER_PREFIXES[randomIndex];
  const remainingDigits = Array.from({ length: 7 }, () => Math.floor(Math.random() * 10)).join('');
  return prefix + remainingDigits;
}