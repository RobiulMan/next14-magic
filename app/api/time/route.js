export const dynamic = "force-dynamic"; // defalut = auto

export async function GET() {
  return new Response(new Date().toLocaleTimeString());
}
