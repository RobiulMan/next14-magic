import comments from "@/app/data/comments";

export async function GET() {
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
