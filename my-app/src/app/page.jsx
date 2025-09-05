import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

import Homesection from "@/components/home/Homesection";
import GlassDashboard from "@/components/GlassDashboard/GlassDashboard";


export default function Home() {
  return (
   <>
     <Navbar />

     <Homesection />
     <Footer />
   </>
  );
}