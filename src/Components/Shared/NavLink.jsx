"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`btn btn-ghost ${
        pathname === href ? "btn-active text-primary" : ""
      }`}
    >
      {children}
    </Link>
  );
}
