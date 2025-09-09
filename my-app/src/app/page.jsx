import AuthPage from "@/components/Auth/Auth";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

// import Homesection from "@/components/home/Homesection";
import GlassDashboard from "@/components/GlassDashboard/GlassDashboard";
import Sidebar from "@/components/Sidebar/Sidebar";


export default function Home() {
  return (
   <>
     <Navbar />
     <AuthPage />
     <Sidebar />

     {/* <Homesection /> */}
     <Footer />
   </>
  );
}