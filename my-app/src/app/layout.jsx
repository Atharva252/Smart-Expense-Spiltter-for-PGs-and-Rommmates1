export const metadata = {
  title: "Smart Expense Splitter",
  description: "Split expenses easily with roommates and PG mates",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
