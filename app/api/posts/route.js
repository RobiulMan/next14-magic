import getQuotes from "@/utils/getQuotes";

export async function GET(request) {
  const posts = await getQuotes();

  return Response.json(posts);
}
