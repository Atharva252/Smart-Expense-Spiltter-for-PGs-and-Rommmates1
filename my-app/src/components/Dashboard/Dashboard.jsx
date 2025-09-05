export default function Dashboard() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Welcome to Smart Expense Splitter</h1>
      <p className="mb-4">Track your shared expenses easily and fairly.</p>

      <nav className="space-x-4 mb-8">
        <a href="/bills/add" className="btn btn-primary">Add Bill</a>
        <a href="/bills/list" className="btn btn-secondary">View Bills</a>
        <a href="/pg/create" className="btn btn-secondary">Create Group</a>
        <a href="/pg/join" className="btn btn-secondary">Join Group</a>
      </nav>

      {/* Could show summary or recent activity here */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Recent Bills</h2>
        {/* List recent bills or balances */}
        <p>No recent bills yet.</p>
      </section>
    </div>
  );
}
