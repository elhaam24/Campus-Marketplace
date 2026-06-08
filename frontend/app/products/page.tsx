import { AppShell } from "@/components/AppShell";
import { ProductCard } from "@/components/Cards";
import { categories, products } from "@/lib/data";
import { Grid2X2, ListFilter, Search } from "lucide-react";

export default function ProductsPage() {
  return (
    <AppShell>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-normal text-campus">Product marketplace</p>
          <h1 className="mt-2 text-3xl font-black text-ink sm:text-4xl">Campus items ready for pickup</h1>
        </div>
        <button className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-ink px-4 text-sm font-black text-white">
          <Grid2X2 size={18} />
          New listing
        </button>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[280px_1fr]">
        <aside className="h-fit rounded-lg border border-black/10 bg-white p-4 shadow-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/45" size={18} />
            <input className="h-11 w-full rounded-lg border border-black/10 bg-paper px-10 text-sm outline-none" placeholder="Search products" />
          </div>
          <div className="mt-5">
            <div className="mb-3 flex items-center gap-2 font-black text-ink">
              <ListFilter size={18} />
              Filters
            </div>
            <div className="grid gap-2">
              {categories.slice(0, 7).map((category) => (
                <button key={category.name} className="flex items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-bold text-ink/70 hover:bg-paper">
                  {category.name}
                  <span className="text-ink/40">{category.count}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2">
            {["Under $50", "Near me", "Like new", "Pickup today"].map((filter) => (
              <button key={filter} className="rounded-lg bg-paper px-3 py-2 text-sm font-black text-ink">
                {filter}
              </button>
            ))}
          </div>
        </aside>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {[...products, ...products.slice(0, 2)].map((product, index) => (
            <ProductCard key={`${product.id}-${index}`} product={product} />
          ))}
        </section>
      </div>
    </AppShell>
  );
}
