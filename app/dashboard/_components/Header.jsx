"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
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
      className={`text-lg font-medium transition-all cursor-pointer ${isActive(href) ? "text-primary font-bold border-b-2 border-primary" : "text-slate-800 hover:text-primary hover:font-bold"}`}
    >
      {label}
    </Link>
  );

  return (
    <div className="flex items-center justify-between gap-4 p-4 bg-secondary shadow-sm pr-6">
      <Link href="/">
        <Image src="/logo.svg" width={120} height={80} alt="logo" />
      </Link>
      <div className="hidden md:flex gap-6">
        {navItem("/dashboard", "Dashboard")}
        {navItem("/resources", "Resources")}
        {navItem("/upgrade", "Upgrade")}
        {navItem("/faq", "FAQ's")}
      </div>
      <UserButton />
    </div>
  );
};

export default Header;
