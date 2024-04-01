import { headers, cookies } from "next/headers";

export async function GET(request) {
  const headerList = headers();
  console.log(headerList.get("Authorization"));

  cookies().set("theme", "dark");

  console.log(cookies().get("theme"));
  return Response.json("Profile API");
}
