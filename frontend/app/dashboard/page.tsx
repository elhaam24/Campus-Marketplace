import { AppShell } from "@/components/AppShell";
import { ProductCard } from "@/components/Cards";
import { dashboardStats, products } from "@/lib/data";
import { BarChart3, CheckCircle2, Clock, CreditCard, PackagePlus, Plus, TrendingUp } from "lucide-react";

const tasks = [
  { title: "Reply to Maya about pickup", time: "Due today", done: false },
  { title: "Mark chemistry set as sold", time: "Pending confirmation", done: false },
  { title: "Upload photos for dorm lamp", time: "Draft listing", done: true }
];

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-normal text-coral">Seller dashboard</p>
          <h1 className="mt-2 text-3xl font-black text-ink sm:text-4xl">Manage your campus marketplace</h1>
        </div>
        <button className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-ink px-5 text-sm font-black text-white">
          <Plus size={18} />
          Create listing
        </button>
      </div>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
            <p className="text-sm font-black text-ink/55">{stat.label}</p>
            <div className="mt-3 flex items-end justify-between gap-4">
              <p className="text-4xl font-black text-ink">{stat.value}</p>
              <span className="rounded-lg bg-mint/10 px-2.5 py-1 text-xs font-black text-mint">{stat.change}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-ink">Weekly activity</h2>
            <BarChart3 className="text-campus" size={22} />
          </div>
          <div className="mt-6 flex h-56 items-end gap-3">
            {[42, 68, 54, 78, 62, 88, 71].map((height, index) => (
              <div key={index} className="flex flex-1 flex-col items-center gap-2">
                <div className="w-full rounded-lg bg-campus/15 p-1">
                  <div className="rounded-md bg-campus" style={{ height: `${height * 1.8}px` }} />
                </div>
                <span className="text-xs font-black text-ink/45">{["M", "T", "W", "T", "F", "S", "S"][index]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-ink">Action queue</h2>
            <Clock className="text-coral" size={22} />
          </div>
          <div className="mt-5 space-y-3">
            {tasks.map((task) => (
              <div key={task.title} className="flex items-center gap-3 rounded-lg bg-paper p-3">
                <div className={`grid h-9 w-9 place-items-center rounded-lg ${task.done ? "bg-mint text-white" : "bg-white text-ink"}`}>
                  <CheckCircle2 size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-black text-ink">{task.title}</p>
                  <p className="mt-1 text-xs font-bold text-ink/50">{task.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <button className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-ink text-sm font-black text-white">
              <PackagePlus size={17} />
              Listing
            </button>
            <button className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-paper text-sm font-black text-ink">
              <CreditCard size={17} />
              Payouts
            </button>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-black text-ink">Your top listings</h2>
          <span className="inline-flex items-center gap-1 rounded-lg bg-white px-3 py-2 text-sm font-black text-mint shadow-sm">
            <TrendingUp size={17} />
            Trending
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </AppShell>
  );
}
