<<<<<<< HEAD
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Smart Expense Splitter</title>
        <meta name="description" content="Split bills easily among roommates" />
      </head>
=======
import './globals.css'

export const metadata = {
  title: 'Smart Expense Splitter',
  description: 'Split bills easily among roommates',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
>>>>>>> 4dac7457571e21f3927d9f73a1da4a5f48ab11ce
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
