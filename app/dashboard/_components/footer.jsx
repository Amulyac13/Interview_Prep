"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  const isActive = (href) => {
    if (!pathname) return false;
    if (href === "/dashboard")
      return pathname === "/dashboard" || pathname.startsWith("/dashboard/");
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const navItem = (href, label) => (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors ${isActive(href) ? "text-primary" : "text-black/80 hover:text-primary"}`}
    >
      {label}
    </Link>
  );

  return (
    <footer className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-between bg-yellow-400 p-3 md:hidden">
      {navItem("/dashboard", "Dashboard")}
      {navItem("/resources", "Resources")}
      {navItem("/upgrade", "Upgrade")}
      {navItem("/faq", "FAQs")}
    </footer>
  );
};

export default Footer;
