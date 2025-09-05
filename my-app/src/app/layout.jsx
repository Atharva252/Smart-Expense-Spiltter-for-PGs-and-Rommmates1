import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Smart Expense Splitter</title>
        <meta name="description" content="Split bills easily among roommates" />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4 text-center font-bold text-xl">
          Smart Expense Splitter
        </header>
        <main className="max-w-4xl mx-auto p-4">{children}</main>
        <footer className="text-center p-4 text-gray-500 text-sm">
          &copy; 2024 Smart Expense Splitter
        </footer>
      </div>
    </>
  );
}
