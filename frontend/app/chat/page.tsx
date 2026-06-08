import { AppShell } from "@/components/AppShell";
import { conversations } from "@/lib/data";
import { ImagePlus, MoreHorizontal, Paperclip, Phone, Search, Send } from "lucide-react";

const messages = [
  { from: "them", text: "Hey, is the MacBook still available?" },
  { from: "me", text: "Yes, it is. Battery health is 96% and I still have the charger." },
  { from: "them", text: "Great. Could we meet near North Library today?" },
  { from: "me", text: "I can meet after data structures at 4:30." }
];

export default function ChatPage() {
  return (
    <AppShell>
      <section className="grid min-h-[calc(100vh-150px)] overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm lg:grid-cols-[340px_1fr]">
        <aside className="border-b border-black/10 lg:border-b-0 lg:border-r">
          <div className="border-b border-black/10 p-4">
            <h1 className="text-2xl font-black text-ink">Messages</h1>
            <div className="relative mt-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/45" size={18} />
              <input className="h-11 w-full rounded-lg bg-paper px-10 text-sm outline-none" placeholder="Search conversations" />
            </div>
          </div>
          <div className="divide-y divide-black/10">
            {conversations.map((conversation) => (
              <button
                key={conversation.name}
                className={`flex w-full gap-3 p-4 text-left transition ${conversation.active ? "bg-campus/10" : "hover:bg-paper"}`}
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-ink text-sm font-black text-white">
                  {conversation.name.split(" ").map((part) => part[0]).join("")}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <p className="truncate font-black text-ink">{conversation.name}</p>
                    <span className="text-xs font-bold text-ink/45">{conversation.time}</span>
                  </div>
                  <p className="mt-1 truncate text-xs font-black text-campus">{conversation.item}</p>
                  <p className="mt-1 truncate text-sm font-semibold text-ink/55">{conversation.message}</p>
                </div>
              </button>
            ))}
          </div>
        </aside>

        <div className="flex min-h-[620px] flex-col">
          <header className="flex items-center justify-between border-b border-black/10 p-4">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
                alt="Chat contact"
                className="h-11 w-11 rounded-lg object-cover"
              />
              <div>
                <h2 className="font-black text-ink">Maya Chen</h2>
                <p className="text-sm font-semibold text-ink/55">MacBook Air M2 · usually replies fast</p>
              </div>
            </div>
            <div className="flex gap-2">
              {[Phone, MoreHorizontal].map((Icon, index) => (
                <button key={index} className="grid h-10 w-10 place-items-center rounded-lg bg-paper text-ink">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </header>

          <div className="flex-1 space-y-3 bg-paper/70 p-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.from === "me" ? "justify-end" : "justify-start"}`}>
                <p className={`max-w-[78%] rounded-lg px-4 py-3 text-sm font-semibold leading-6 ${
                  message.from === "me" ? "bg-ink text-white" : "bg-white text-ink shadow-sm"
                }`}>
                  {message.text}
                </p>
              </div>
            ))}
          </div>

          <footer className="border-t border-black/10 p-3">
            <div className="flex items-center gap-2">
              {[Paperclip, ImagePlus].map((Icon, index) => (
                <button key={index} className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-paper text-ink">
                  <Icon size={18} />
                </button>
              ))}
              <input className="h-11 min-w-0 flex-1 rounded-lg bg-paper px-4 text-sm outline-none" placeholder="Write a message" />
              <button className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-coral text-white">
                <Send size={18} />
              </button>
            </div>
          </footer>
        </div>
      </section>
    </AppShell>
  );
}
