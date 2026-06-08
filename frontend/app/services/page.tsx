import { AppShell } from "@/components/AppShell";
import { ServiceCard } from "@/components/Cards";
import { services } from "@/lib/data";
import { CalendarDays, GraduationCap, MapPin, Search, Sparkles } from "lucide-react";

const serviceTypes = [
  { Icon: GraduationCap, label: "Tutoring" },
  { Icon: Sparkles, label: "Creative" },
  { Icon: CalendarDays, label: "Events" }
];

export default function ServicesPage() {
  return (
    <AppShell>
      <section className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-6 sm:p-8">
            <p className="text-sm font-black uppercase tracking-normal text-mint">Service marketplace</p>
            <h1 className="mt-2 text-3xl font-black text-ink sm:text-4xl">Hire talented students for study help, events, and campus tasks.</h1>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {serviceTypes.map(({ Icon, label }) => (
                <div key={label} className="rounded-lg bg-paper p-4">
                  <Icon className="text-coral" size={22} />
                  <p className="mt-3 text-sm font-black text-ink">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
            alt="Student working on laptop"
            className="h-72 w-full object-cover lg:h-full"
          />
        </div>
      </section>

      <div className="mt-6 flex flex-col gap-3 rounded-lg border border-black/10 bg-white p-3 shadow-sm md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/45" size={18} />
          <input className="h-11 w-full rounded-lg bg-paper px-10 text-sm outline-none" placeholder="Search tutoring, design, photography" />
        </div>
        <button className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-paper px-4 text-sm font-black text-ink">
          <MapPin size={18} />
          Campus or online
        </button>
        <button className="h-11 rounded-lg bg-ink px-5 text-sm font-black text-white">Search</button>
      </div>

      <section className="mt-6 grid gap-4 lg:grid-cols-2">
        {[...services, ...services].map((service, index) => (
          <ServiceCard key={`${service.title}-${index}`} service={service} />
        ))}
      </section>
    </AppShell>
  );
}
