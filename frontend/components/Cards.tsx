import { Heart, MapPin, MessageCircle, Star } from "lucide-react";
import Link from "next/link";

type Product = {
  title: string;
  category: string;
  price: string;
  condition: string;
  campus: string;
  image: string;
  seller: string;
  badge: string;
};

type Service = {
  title: string;
  provider: string;
  price: string;
  rating: string;
  location: string;
  image: string;
  tags: string[];
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
        <span className="absolute left-3 top-3 rounded-lg bg-white/95 px-2.5 py-1 text-xs font-black text-ink">
          {product.badge}
        </span>
        <button className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-lg bg-white/95 text-ink">
          <Heart size={18} />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-normal text-campus">{product.category}</p>
            <h3 className="mt-1 truncate text-base font-black text-ink">{product.title}</h3>
          </div>
          <p className="shrink-0 text-lg font-black text-ink">{product.price}</p>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold text-ink/60">
          <span className="rounded-lg bg-paper px-2.5 py-1">{product.condition}</span>
          <span className="inline-flex items-center gap-1">
            <MapPin size={14} />
            {product.campus}
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="truncate text-sm font-semibold text-ink/70">{product.seller}</p>
          <Link href="/chat" className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-white">
            <MessageCircle size={17} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="grid overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm md:grid-cols-[190px_1fr]">
      <div className="aspect-[4/3] overflow-hidden md:aspect-auto">
        <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="truncate text-lg font-black text-ink">{service.title}</h3>
            <p className="mt-1 text-sm font-semibold text-ink/60">{service.provider}</p>
          </div>
          <p className="shrink-0 text-base font-black text-coral">{service.price}</p>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span key={tag} className="rounded-lg bg-mint/10 px-2.5 py-1 text-xs font-black text-mint">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1 text-sm font-bold text-ink/70">
            <Star size={16} className="fill-coral text-coral" />
            {service.rating} · {service.location}
          </span>
          <Link href="/chat" className="rounded-lg bg-ink px-4 py-2 text-sm font-black text-white">
            Book
          </Link>
        </div>
      </div>
    </article>
  );
}
