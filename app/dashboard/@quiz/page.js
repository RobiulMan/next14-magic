import wait from "@/lib/wait";

export default async function QuizPage() {
  await wait(1500);
  return (
    <div className=" transition ease-in-out delay-150 bg-black text-xl p-4 border border-gray-200 rounded h-[360px] flex items-center justify-center">
      QUIZ
    </div>
  );
}
