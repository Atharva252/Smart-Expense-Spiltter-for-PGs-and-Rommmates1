"use client";

import { usePathname } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import Sidebar from "../components/sidebar/Sidebar";

export default function LayoutContent({ children }) {
  const { user } = useAuth();
  const pathname = usePathname();

  const isHome = pathname === "/" || pathname === "/home";

  return (
    <div className="flex">
      {user && !isHome && <Sidebar />}
      <main className={user && !isHome ? "ml-[15vw] w-[85vw]" : "w-full"}>
        {children}
      </main>
    </div>
  );
}
