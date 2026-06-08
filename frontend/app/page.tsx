import { AppShell } from "@/components/AppShell";
import { ProductCard, ServiceCard } from "@/components/Cards";
import { categories, products, services } from "@/lib/data";
import { ArrowRight, BadgeCheck, Plus, Search, ShieldCheck, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <AppShell>
      <section className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="relative min-h-[420px] overflow-hidden rounded-lg bg-ink">
          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=80"
            alt="Students walking on campus"
            className="absolute inset-0 h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
          <div className="relative flex min-h-[420px] max-w-2xl flex-col justify-end p-6 sm:p-8 lg:p-10">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-lg bg-white/15 px-3 py-2 text-sm font-bold text-white backdrop-blur">
              <BadgeCheck size={17} />
              Verified campus deals
            </div>
            <h1 className="text-balance text-4xl font-black tracking-normal text-white sm:text-5xl lg:text-6xl">
              Buy, sell, and book student services on campus.
            </h1>
            <p className="mt-4 max-w-xl text-base font-medium leading-7 text-white/82">
              Find used textbooks, dorm essentials, tutoring, creative help, rides, and student-run services without leaving your university network.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/products" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-black text-ink">
                Browse products
                <ArrowRight size={18} />
              </Link>
              <Link href="/services" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-coral px-5 text-sm font-black text-white">
                Find services
                <Search size={18} />
              </Link>
            </div>
          </div>
        </div>

        <aside className="grid gap-4">
          <div className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-black text-ink">Campus pulse</h2>
              <ShieldCheck className="text-mint" size={22} />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                ["486", "active listings"],
                ["74", "student services"],
                ["1.8k", "verified users"],
                ["4.9", "avg rating"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg bg-paper p-4">
                  <p className="text-2xl font-black text-ink">{value}</p>
                  <p className="mt-1 text-xs font-bold text-ink/55">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-black text-ink">Sell something</h2>
                <p className="mt-1 text-sm font-semibold text-ink/60">Post in under a minute.</p>
              </div>
              <Link href="/dashboard" className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-ink text-white">
                <Plus size={20} />
              </Link>
            </div>
          </div>
        </aside>
      </section>

      <section className="mt-8">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-black text-ink">Popular categories</h2>
          <button className="grid h-10 w-10 place-items-center rounded-lg border border-black/10 bg-white">
            <SlidersHorizontal size={18} />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {categories.slice(0, 10).map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.name} className="rounded-lg border border-black/10 bg-white p-4 shadow-sm">
                <Icon className="text-campus" size={22} />
                <p className="mt-3 font-black text-ink">{category.name}</p>
                <p className="mt-1 text-sm font-semibold text-ink/55">{category.count} listings</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-black text-ink">Fresh finds</h2>
            <Link href="/products" className="text-sm font-black text-campus">View all</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {products.slice(0, 2).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-black text-ink">Bookable services</h2>
            <Link href="/services" className="text-sm font-black text-campus">View all</Link>
          </div>
          <div className="grid gap-4">
            {services.slice(0, 2).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
}
