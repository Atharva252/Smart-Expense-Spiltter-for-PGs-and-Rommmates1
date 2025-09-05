import Image from "next/image";
import {
  Tag,
  LayoutDashboard,
  PieChart,
  Flashlight,
  ShieldCheck,
  Users,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function Homesection() {
  const colors = {
    bg: "#0B0E11",
    card: "#121417",
    card2: "#161A1F",
    border: "#2A2F36",
    textMuted: "#A6ADBB",
    chipBg: "#0E1115",
    chipBorder: "#2E3440",
    gold: "#F6C35E",
    goldHover: "#F3B74A",
  };

  const chipItems = [
    "Rent",
    "Utilities",
    "Gym",
    "Groceries",
    "Shared",
    "Insurance",
    "Cleaning",
    "Supplies",
    "House",
  ];

  return (
    <div
      className="min-h-screen text-white font-sans px-6 py-14 md:py-16 mx-auto flex flex-col space-y-10 md:space-y-12"
      style={{ backgroundColor: colors.bg, maxWidth: "1120px" }}
    >
      {/* HERO */}
      <section className="flex flex-col md:flex-row items-start md:items-center gap-10">
        {/* Left */}
        <div className="flex-1 max-w-xl space-y-6">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium shadow"
            style={{
              background: colors.chipBg,
              border: `1px solid ${colors.border}`,
              color: colors.gold,
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: colors.gold }}
            />
            Premium, simple & good roommate experience
          </span>

          <h1 className="leading-tight tracking-tight text-[38px] md:text-[46px] font-extrabold">
            Welcome home to stress-free splits
          </h1>

          <p
            className="text-lg"
            style={{ color: colors.textMuted, maxWidth: 560 }}
          >
            A premium, easy-to-use split expense tool for PGs and roommates —
            classic, modern, and friendly.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              className="px-5 md:px-6 py-2.5 rounded-xl font-semibold transition shadow"
              style={{
                background: colors.gold,
                color: "#0B0E11",
                boxShadow: "0 10px 28px rgba(246,195,94,0.35)",
              }}
            >
              Get Started Free
            </button>
            <button
              className="px-5 md:px-6 py-2.5 rounded-xl font-semibold transition flex items-center gap-2"
              style={{
                background: "transparent",
                color: colors.gold,
                border: `1px solid ${colors.gold}`,
              }}
            >
              See How It Works <ChevronRight size={18} />
            </button>
          </div>

          {/* Avatars + CTA */}
          <div className="flex items-center gap-2 pt-2">
            <img
              src="/avtar1.jpg"
              alt="avatar"
              className="w-8 h-8 rounded-full ring-2 ring-[#0B0E11]"
            />
            <img
              src="/avtar2.jpg"
              alt="avatar"
              className="w-8 h-8 rounded-full ring-2 ring-[#0B0E11] -ml-2"
            />
            <img
              src="/avtar3.jpg"
              alt="avatar"
              className="w-8 h-8 rounded-full ring-2 ring-[#0B0E11] -ml-2"
            />
            <span
              className="text-sm ml-2"
              style={{ color: colors.textMuted }}
            >
              Trusted by roommates, friends, road trips, and clubs. Join us!
            </span>
            <button
              className="ml-auto px-4 py-2 rounded-xl font-semibold transition shadow"
              style={{
                background: colors.gold,
                color: "#0B0E11",
                boxShadow: "0 10px 28px rgba(246,195,94,0.35)",
                whiteSpace: "nowrap",
              }}
            >
              Create a Group
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: `1px solid ${colors.border}` }}
          >
            <Image
              src="/homehero.jpg"
              alt="Relaxed at home"
              width={640}
              height={420}
              priority
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ROW 2 */}
      <section className="grid md:grid-cols-2 gap-6">
        {/* Roommate Patterns */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: colors.card,
            border: `1px solid ${colors.border}`,
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Tag size={18} color={colors.gold} />
            <h2 className="text-xl font-semibold">Roommate Patterns</h2>
          </div>
          <p className="mb-4" style={{ color: colors.textMuted }}>
            Create categories and flows that fit shared living: rent, utilities,
            groceries, cleaning, and more.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {chipItems.map((c) => (
              <span
                key={c}
                className="px-3 py-1 rounded-full text-sm"
                style={{
                  background: colors.chipBg,
                  border: `1px solid ${colors.chipBorder}`,
                  color: "#D6DBE6",
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Dashboard Preview */}
        <div
          className="rounded-2xl p-6 flex flex-col"
          style={{
            background: colors.card,
            border: `1px solid ${colors.border}`,
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <LayoutDashboard size={18} color={colors.gold} />
            <h2 className="text-xl font-semibold">Dashboard Preview</h2>
          </div>
          <p className="mb-4" style={{ color: colors.textMuted }}>
            Track all categories and see who owes who.
          </p>

          <div
            className="flex-1 rounded-xl mb-5"
            style={{
              background: colors.card2,
              border: `1px dashed ${colors.border}`,
              minHeight: 140,
            }}
          />

          <div className="flex flex-wrap gap-3">
            <button
              className="px-5 py-2.5 rounded-xl font-semibold transition shadow"
              style={{
                background: colors.gold,
                color: "#0B0E11",
                boxShadow: "0 10px 28px rgba(246,195,94,0.35)",
              }}
            >
              Add Expense
            </button>
            <button
              className="px-5 py-2.5 rounded-xl font-semibold transition"
              style={{
                background: "transparent",
                color: colors.gold,
                border: `1px solid ${colors.gold}`,
              }}
            >
              View Groups
            </button>
            <button
              className="px-5 py-2.5 rounded-xl font-semibold transition"
              style={{
                background: "transparent",
                color: colors.gold,
                border: `1px solid ${colors.gold}`,
              }}
            >
              Settle Up
            </button>
          </div>
        </div>
      </section>

      {/* ROW 3: Themes */}
      <section className="grid md:grid-cols-2 gap-6">
        <div
          className="rounded-2xl p-6"
          style={{
            background: colors.card,
            border: `1px solid ${colors.border}`,
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={18} color={colors.gold} />
            <h3 className="font-semibold text-lg">Fresh PGs Theme</h3>
          </div>
          <p className="mb-4" style={{ color: colors.textMuted }}>
            Optimized for paying guests and shared household: simple, recurring
            splits and flexible move-ins.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["Security deposit", "Monthly food plan", "Room service", "Laundry"].map(
              (t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-sm"
                  style={{
                    background: colors.chipBg,
                    border: `1px solid ${colors.chipBorder}`,
                    color: "#D6DBE6",
                  }}
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>

        <div
          className="rounded-2xl p-6"
          style={{
            background: colors.card,
            border: `1px solid ${colors.border}`,
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Users size={18} color={colors.gold} />
            <h3 className="font-semibold text-lg">Cozy Roommate Theme</h3>
          </div>
          <p className="mb-4" style={{ color: colors.textMuted }}>
            A playful palette with warm accents and soft panels that make the
            app feel like home.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["Bill overview", "Shared pantry", "Chores tracker", "Utilities split"].map(
              (t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-sm"
                  style={{
                    background: colors.chipBg,
                    border: `1px solid ${colors.chipBorder}`,
                    color: "#D6DBE6",
                  }}
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ROW 4: Feature trio */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Visual Dashboard",
            desc:
              "See who owes whom, category pie, and member bars at a glance.",
            Icon: PieChart,
          },
          {
            title: "Quick Actions",
            desc: "Add expenses, view groups, or settle up in one click.",
            Icon: Flashlight,
          },
          {
            title: "Private & Secure",
            desc: "Built-in privacy with modern best practices.",
            Icon: ShieldCheck,
          },
        ].map(({ title, desc, Icon }) => (
          <div
            key={title}
            className="rounded-2xl p-6"
            style={{
              background: colors.card,
              border: `1px solid ${colors.border}`,
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Icon size={18} color={colors.gold} />
              <h4 className="font-semibold text-lg">{title}</h4>
            </div>
            <p style={{ color: colors.textMuted }}>{desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section
        className="rounded-2xl p-6 md:p-7 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{
          background: colors.card,
          border: `1px solid ${colors.border}`,
        }}
      >
        <p
          className="text-center md:text-left"
          style={{ color: colors.textMuted, maxWidth: 720 }}
        >
          Move in to an easier split life. Create a roommate group or PG house
          and start tracking today.
        </p>
        <div className="flex gap-3">
          <button
            className="px-5 md:px-6 py-2.5 rounded-xl font-semibold transition shadow"
            style={{
              background: colors.gold,
              color: "#0B0E11",
              boxShadow: "0 10px 28px rgba(246,195,94,0.35)",
            }}
          >
            Sign Up Free
          </button>
          <button
            className="px-5 md:px-6 py-2.5 rounded-xl font-semibold transition"
            style={{
              background: "transparent",
              color: colors.gold,
              border: `1px solid ${colors.gold}`,
            }}
          >
            Try a Demo
          </button>
        </div>
      </section>
    </div>
  );
}