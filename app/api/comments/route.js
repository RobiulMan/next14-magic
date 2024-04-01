import comments from "@/app/data/comments";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  if (query) {
    console.log(query);
    const filteredComments = comments.filter((comment) =>
      comment.text.toLowerCase().includes(query),
    );
    return Response.json(filteredComments);
  }
  return Response.json(comments);
}

export async function POST(request) {
  const comment = await request.json();
  const newComment = {
    id: crypto.randomUUID(),
    text: comment.text,
  };

  comments.push(newComment);

  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}

export async function PATCH(request) {
  const comment = await request.json();
  const newComment = {
    id: crypto.randomUUID(),
    text: comment.text,
  };

  comments.push(newComment);

  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
