import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="analytics pt-10">
        <p className="text-center">/deshbord/submenu</p>

        <ul className="flex gap-5 p-4  justify-center">
          <li>
            <Link href="/settings">Settings</Link>
          </li>

          <li>
            <Link href="/analytics">Analytics</Link>
          </li>
        </ul>
      </div>

      {children}
    </>
  );
}
