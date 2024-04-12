import getQuotes from "@/utils/getQutoesAxios";

export default async function RandomQuote() {
  const quote = await getQuotes();
  return <div className="mt-5">{quote.data.content}</div>;
}
