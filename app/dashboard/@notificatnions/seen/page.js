import Link from "next/link";

export default async function SeenNotificationsPage() {
  return (
    <div className="transition ease-in-out delay-150 bg-black  text-xl p-4 row-span-2 border border-gray-200 rounded h-[745px] flex gap-5 items-center justify-center">
      <span> SEEN NOTIFICATIONS</span>
      <div>
        <Link href="/dashboard/" className="text-blue-500">
          ALL
        </Link>
      </div>
    </div>
  );
}
