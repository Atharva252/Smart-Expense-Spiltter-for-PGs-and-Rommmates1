export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Smart Expense Splitter</title>
        <meta name="description" content="Split bills easily among roommates" />
      </head>
      <body>
        <div className="min-h-screen bg-gray-100">
          <header className="bg-blue-600 text-white p-4 text-center font-bold text-xl">
            Smart Expense Splitter
          </header>
          <main className="max-w-4xl mx-auto p-4">{children}</main>
          <footer className="text-center p-4 text-gray-500 text-sm">
            &copy; 2024 Smart Expense Splitter
          </footer>
        </div>
      </body>
    </html>
  );
}
