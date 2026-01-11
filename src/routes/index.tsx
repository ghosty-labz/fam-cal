import { createFileRoute } from '@tanstack/react-router'
import { CalendarDays, Users, Link2, Sparkles } from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const highlights = [
    {
      icon: <Users className="w-6 h-6 text-[color:var(--mint)]" />,
      title: 'Shared, clear view',
      description:
        "One calendar that helps everyone see what matters this week without ten different group chats.",
    },
    {
      icon: <CalendarDays className="w-6 h-6 text-[color:var(--sky)]" />,
      title: 'Built for real family rhythms',
      description:
        'School pickups, practice, dinner plans, and weekend trips live together in a calmer timeline.',
    },
    {
      icon: <Link2 className="w-6 h-6 text-[color:var(--rose)]" />,
      title: 'Integrations that keep you in sync',
      description:
        'Connect the calendars you already use so updates flow automatically, not through a human relay.',
    },
  ]

  const flow = [
    {
      title: 'Gather everyone’s plans',
      description:
        'Import what already exists and give each family member a place to add their moments.',
    },
    {
      title: 'See the week at a glance',
      description:
        'A single shared view makes overlaps, handoffs, and open space obvious.',
    },
    {
      title: 'Stay aligned without reminders',
      description:
        'Smart integrations keep the schedule current and reduce the “Did you see my text?” chase.',
    },
  ]

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_var(--cloud),_var(--sand)_45%,_#eadfcd_100%)] text-[color:var(--ink)]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(244,178,102,0.45),_rgba(244,178,102,0)_70%)] blur-2xl float-slower"></div>
        <div className="pointer-events-none absolute top-10 right-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(78,201,176,0.35),_rgba(78,201,176,0)_70%)] blur-2xl float-slow"></div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(90,165,255,0.3),_rgba(90,165,255,0)_70%)] blur-2xl"></div>

        <main className="relative px-6 pb-20 pt-16 md:pt-24">
          <div className="mx-auto flex max-w-6xl flex-col gap-16">
            <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/70 bg-white/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 fade-up">
                  <Sparkles className="h-4 w-4" />
                  Family calm starts here
                </div>
                <div className="space-y-4 fade-up fade-up-delay-1">
                  <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
                    fam-cal
                  </h1>
                  <p className="text-xl md:text-2xl text-[color:var(--ink)]/80 max-w-xl">
                    A family calendar app that makes the hectic fun of family
                    life easier to manage with a shared, crystal-clear view of
                    what’s happening.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 fade-up fade-up-delay-2">
                  <button className="rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--cloud)] shadow-lg shadow-black/10">
                    Join the waitlist
                  </button>
                  <button className="rounded-full border border-[color:var(--ink)]/20 bg-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--ink)]">
                    See the preview
                  </button>
                </div>
                <div className="flex flex-wrap gap-6 text-sm text-[color:var(--ink)]/70 fade-up fade-up-delay-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[color:var(--sun)]"></span>
                    Shared weekly view
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[color:var(--mint)]"></span>
                    Smart integrations
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[color:var(--sky)]"></span>
                    Built for families
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display text-2xl">This week</h2>
                    <span className="rounded-full bg-[color:var(--sun)]/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink)]/70">
                      Family view
                    </span>
                  </div>
                  <div className="mt-6 space-y-4">
                    {['School pickup', 'Soccer practice', 'Family dinner', 'Weekend trip'].map(
                      (item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between rounded-2xl border border-[color:var(--ink)]/10 bg-[color:var(--cloud)]/80 px-4 py-3"
                        >
                          <span className="text-sm font-semibold">{item}</span>
                          <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--ink)]/60">
                            4:30 pm
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                  <div className="mt-6 rounded-2xl border border-dashed border-[color:var(--ink)]/20 px-4 py-3 text-xs uppercase tracking-[0.2em] text-[color:var(--ink)]/60">
                    Everyone sees what’s next
                  </div>
                </div>
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-3">
              {highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-3xl border border-white/80 bg-white/70 p-6 shadow-lg shadow-black/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--cloud)]">
                    {highlight.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">
                    {highlight.title}
                  </h3>
                  <p className="mt-3 text-sm text-[color:var(--ink)]/70">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </section>

            <section className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div className="space-y-4">
                <h2 className="font-display text-3xl md:text-4xl">
                  A calm, shared timeline for the whole crew
                </h2>
                <p className="text-base md:text-lg text-[color:var(--ink)]/70">
                  fam-cal keeps the family on the same page with a shared view
                  that highlights handoffs, overlaps, and open space. It’s the
                  gentle nudge toward smoother weeks without losing the fun.
                </p>
                <div className="rounded-2xl border border-[color:var(--mint)]/30 bg-[color:var(--mint)]/10 px-5 py-4 text-sm text-[color:var(--ink)]/80">
                  First planned integration: Google Calendar two-way sync for
                  events, reminders, and updates.
                </div>
              </div>
              <div className="grid gap-4">
                {flow.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/80 bg-white/70 px-5 py-4 shadow-lg shadow-black/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--sun)]/30 text-sm font-semibold text-[color:var(--ink)]">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-base font-semibold">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[color:var(--ink)]/70">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[32px] border border-[color:var(--ink)]/10 bg-[linear-gradient(120deg,_rgba(255,255,255,0.9),_rgba(244,178,102,0.15),_rgba(78,201,176,0.2))] px-8 py-10 shadow-xl shadow-black/5">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl">
                    Keep the whole family in sync
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-[color:var(--ink)]/70 max-w-xl">
                    We’re building fam-cal as the calm center for family
                    schedules, with Google Calendar integration landing first
                    so every event stays up to date.
                  </p>
                </div>
                <button className="rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--cloud)]">
                  Get early access
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
