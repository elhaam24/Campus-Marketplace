import { AppShell } from "@/components/AppShell";
import { ProductCard } from "@/components/Cards";
import { products } from "@/lib/data";
import { BadgeCheck, CalendarDays, Mail, MapPin, ShieldCheck, Star } from "lucide-react";

const profileHighlights = [
  { Icon: Star, title: "4.9 rating", detail: "32 campus reviews" },
  { Icon: ShieldCheck, title: "Verified", detail: "University email confirmed" },
  { Icon: MapPin, title: "North Campus", detail: "Preferred meetup area" },
  { Icon: CalendarDays, title: "Since 2024", detail: "Active marketplace member" }
];

export default function ProfilePage() {
  return (
    <AppShell>
      <section className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm">
        <div className="h-40 bg-[url('https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center" />
        <div className="px-5 pb-6 sm:px-8">
          <div className="-mt-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-end gap-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
                alt="Student profile"
                className="h-24 w-24 rounded-lg border-4 border-white object-cover shadow-soft"
              />
              <div className="pb-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-black text-ink">Maya Chen</h1>
                  <BadgeCheck className="text-campus" size={21} />
                </div>
                <p className="mt-1 text-sm font-bold text-ink/60">Computer Science · Junior</p>
              </div>
            </div>
            <button className="h-11 rounded-lg bg-ink px-5 text-sm font-black text-white">Edit profile</button>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {profileHighlights.map(({ Icon, title, detail }) => (
              <div key={title} className="rounded-lg bg-paper p-4">
                <Icon className="text-mint" size={20} />
                <p className="mt-3 text-sm font-black text-ink">{title}</p>
                <p className="mt-1 text-xs font-bold text-ink/55">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
        <aside className="h-fit rounded-lg border border-black/10 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-black text-ink">About</h2>
          <p className="mt-3 text-sm font-semibold leading-6 text-ink/65">
            Selling gently used gear before study abroad. Usually available around the library and engineering building.
          </p>
          <div className="mt-5 flex items-center gap-2 text-sm font-bold text-ink/65">
            <Mail size={17} />
            maya.chen@university.edu
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            {[
              ["18", "sold"],
              ["6", "active"],
              ["98%", "reply"]
            ].map(([value, label]) => (
              <div key={label} className="rounded-lg bg-paper p-3">
                <p className="text-xl font-black text-ink">{value}</p>
                <p className="text-xs font-bold text-ink/55">{label}</p>
              </div>
            ))}
          </div>
        </aside>

        <div>
          <h2 className="mb-4 text-2xl font-black text-ink">Active listings</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {products.slice(0, 2).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
}
