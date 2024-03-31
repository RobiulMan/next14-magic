import comments from "@/app/data/comments";

export async function GET(_request, context) {
  const { params } = context;
  const commentId = params.id;

  const findComment = comments.find((item) => item.id == commentId);

  return Response.json(findComment);
}

export async function PATCH(request, { params }) {
  const commentId = params.id;
  const commentText = await request.json();
  const commentIndex = comments.findIndex((item) => item.id == commentId);

  comments[commentIndex].text = commentText.text;

  return Response.json(comments[commentIndex]);
}

export async function DELETE(_request, { params }) {
  const commentId = params.id;

  const commentIndex = comments.findIndex((item) => item.id == commentId);

  const commentToDelete = comments[commentIndex];
  comments.splice(commentToDelete, 1);

  return Response.json({
    message: `id: ${commentId} has been deleted successfully`,
  });
}
