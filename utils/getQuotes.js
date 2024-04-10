export default async function getQuotes() {
  const res = await fetch("https://quotable.io/random");

  if (!res.ok) {
    throw new Error("Fetch error...");
  }

  return res.json(); // returns a promise
}
