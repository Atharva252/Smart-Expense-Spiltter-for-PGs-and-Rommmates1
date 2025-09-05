import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans px-6 py-12 max-w-7xl mx-auto flex flex-col space-y-12">
      
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 max-w-xl space-y-6">
          <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-xs font-semibold text-yellow-400">
            Playful reasonable vibes, powerful expense breaking
          </span>
          <h1 className="text-4xl font-extrabold leading-tight">
            Welcome home to stress-free splits
          </h1>
          <p className="text-gray-400 text-lg">
            A netshared home with colorful room patterns, a cozy illustration, and quick actions to jump into groups, add expenses, or settle up.
          </p>
          <div className="flex space-x-4">
            <button className="bg-yellow-500 px-6 py-2 rounded font-semibold text-black hover:bg-yellow-400 transition">
              Get Started Free
            </button>
            <button className="border border-yellow-500 px-6 py-2 rounded text-yellow-400 hover:bg-yellow-600 transition">
              See How It Works
            </button>
          </div>

          <div className="flex items-center space-x-2 mt-6">
            <img
              src="https://randomuser.me/api/portraits/thumb/men/32.jpg"
              alt="User avatar"
              className="w-8 h-8 rounded-full border-2 border-gray-800"
            />
            <img
              src="https://randomuser.me/api/portraits/thumb/women/44.jpg"
              alt="User avatar"
              className="w-8 h-8 rounded-full border-2 border-gray-800"
            />
            <img
              src="https://randomuser.me/api/portraits/thumb/men/54.jpg"
              alt="User avatar"
              className="w-8 h-8 rounded-full border-2 border-gray-800"
            />
            <span className="text-sm text-gray-400 ml-3">
              Trusted by sustainable households, road trips, and clubs. Join us!
            </span>
            <button className="ml-auto bg-yellow-500 text-black px-4 py-1 rounded hover:bg-yellow-400 transition whitespace-nowrap">
              Create a Group
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 max-w-full">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
            alt="Person working on a laptop in cozy living room"
            width={600}
            height={400}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Roommate Patterns */}
      <section className="bg-gray-800 rounded-lg p-6 flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Roommate Patterns</h2>
        <p className="text-gray-400 mb-4 max-w-2xl">
          Please categories and flows that fit shared living: rent, utilities, groceries, cleaning, and more.
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            "Rent", "Monthly", "Utilities", "Gym", "Groceries", "Shared", 
            "Insurance", "Gas", "Cleaning", "Monthly", "Supplies", "House"
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-yellow-600 text-black text-sm font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="bg-gray-800 rounded-lg p-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-3">Dashboard Preview</h2>
          <p className="text-gray-400 max-w-lg">
            Pie of categories and bar by roommates.
          </p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <button className="bg-yellow-500 text-black px-5 py-2 rounded font-semibold hover:bg-yellow-400 transition">
            Add Expense
          </button>
          <button className="border border-yellow-500 text-yellow-400 px-5 py-2 rounded hover:bg-yellow-600 transition">
            View Groups
          </button>
          <button className="border border-yellow-500 text-yellow-400 px-5 py-2 rounded hover:bg-yellow-600 transition">
            Settle Up
          </button>
        </div>
      </section>

      {/* Themes */}
      <section className="flex flex-col md:flex-row gap-6">
        <div className="bg-gray-800 rounded-lg p-6 flex-1 flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Fresh PGs Theme</h3>
          <p className="text-gray-400 mb-4">
            Optimized for paying guests and shared housing; simple, accruing splits and easy move-ins.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Security deposit", "Monthly food plan", "Room service", "Laundry"].map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded bg-yellow-600 text-black text-sm font-semibold"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 flex-1 flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Cozy Roommate Theme</h3>
          <p className="text-gray-400 mb-4">
            A playful palette with warm accents and soft panels that make the app feel like home.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Bill overview", "Shared pantry", "Chores tracker", "Utilities split"].map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded bg-yellow-600 text-black text-sm font-semibold"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="flex flex-col md:flex-row gap-6 mt-8">
        {[
          {
            title: "Visual Dashboard",
            desc: "See who owes whom, category pie, and member share at a glance."
          },
          {
            title: "Quick Actions",
            desc: "Add expense, view groups, or settle up in a tap."
          },
          {
            title: "Private & Secure",
            desc: "Safe by default with modern best practices."
          }
        ].map(({ title, desc }) => (
          <div
            key={title}
            className="bg-gray-800 rounded-lg p-6 flex-1 text-center space-y-3"
          >
            <h4 className="font-semibold text-lg">{title}</h4>
            <p className="text-gray-400">{desc}</p>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="max-w-lg text-gray-300 text-center md:text-left">
          Move in to an easier split life. Create a roommate group or PG house and start tracking today.
        </p>
        <div className="flex gap-4">
          <button className="bg-yellow-500 px-6 py-2 rounded text-black font-semibold hover:bg-yellow-400 transition">
            Sign Up Free
          </button>
          <button className="border border-yellow-500 px-6 py-2 rounded text-yellow-400 hover:bg-yellow-600 transition">
            Try a Demo
          </button>
        </div>
      </section>
    </div>
  );
}
