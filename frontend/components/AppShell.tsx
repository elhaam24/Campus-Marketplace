"use client";

import clsx from "clsx";
import {
  Bell,
  LayoutDashboard,
  MessageCircle,
  PackageSearch,
  Search,
  Store,
  UserRound,
  Wrench
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", icon: Store },
  { href: "/products", label: "Products", icon: PackageSearch },
  { href: "/services", label: "Services", icon: Wrench },
  { href: "/chat", label: "Chat", icon: MessageCircle },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/profile", label: "Profile", icon: UserRound }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-paper">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-paper/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-ink text-white">
              <Store size={20} />
            </span>
            <span className="hidden text-lg font-black tracking-normal text-ink sm:block">Campus Market</span>
          </Link>

          <div className="relative hidden flex-1 md:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink/45" size={18} />
            <input
              className="h-11 w-full rounded-lg border border-black/10 bg-white px-10 text-sm outline-none transition focus:border-campus focus:ring-4 focus:ring-campus/10"
              placeholder="Search bikes, books, tutors, dorm furniture"
            />
          </div>

          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "flex h-10 items-center gap-2 rounded-lg px-3 text-sm font-semibold transition",
                    active ? "bg-ink text-white" : "text-ink/70 hover:bg-white hover:text-ink"
                  )}
                >
                  <Icon size={17} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button className="grid h-10 w-10 place-items-center rounded-lg border border-black/10 bg-white text-ink shadow-sm">
            <Bell size={18} />
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>

      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-black/10 bg-white/95 px-2 py-2 backdrop-blur-xl lg:hidden">
        <div className="grid grid-cols-6 gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "flex h-12 flex-col items-center justify-center rounded-lg text-[10px] font-bold",
                  active ? "bg-ink text-white" : "text-ink/55"
                )}
              >
                <Icon size={18} />
                <span className="mt-0.5 truncate">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
