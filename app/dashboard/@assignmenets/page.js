import wait from "@/lib/wait";
import Loading from "./loading";

export default async function AssignmentsPage() {
  await wait(3000);
  return (
    <>
      <div className=" transition ease-in-out delay-150 bg-black hover:scale-150 text-xl p-4 border border-gray-200 rounded h-[360px] flex items-center justify-center">
        ASSIGNMENTS
      </div>
    </>
  );
}
