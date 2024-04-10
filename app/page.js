import getQuotes from "@/utils/getQuotes";
import RandomQuote from "./components/RandomQuote";

export default async function Home() {
  const quotes = await getQuotes();

  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <h1 className="text-xl"> {quotes.content}</h1>
      <RandomQuote />
    </main>
  );
}
