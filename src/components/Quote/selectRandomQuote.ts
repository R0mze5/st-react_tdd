export function selectRandomQuote<T>(quotes: Array<T>): T {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
