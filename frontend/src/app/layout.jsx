import "./globals.css";
import { AuthProvider } from "../context/AuthContext";
import LayoutContent from "./LayoutContent";

export const metadata = {
  title: "SplitEasy",
  description: "Expense sharing app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <LayoutContent>{children}</LayoutContent>
        </AuthProvider>
      </body>
    </html>
  );
}
