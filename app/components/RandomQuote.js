import getQuotes from "@/utils/getQuotes";

export default async function RandomQuote() {
  const qutoe = await getQuotes();

  return <div className="mt-5">{qutoe.content}</div>;
}
