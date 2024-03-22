"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const CustomeLink = ({ path, children, prefetch = true }) => {
  const pathName = usePathname();
  const active = pathName === path;
  return (
    <Link
      prefetch={prefetch}
      className={active ? "text-blue-500" : ""}
      href={path}
    >
      {children}
    </Link>
  );
};

export default CustomeLink;
