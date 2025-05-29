import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-gradient-to-r from-blue-500 to-black 
      px-4 sm:px-6 md:px-10 pt-24 sm:pt-28 md:pt-32"
    >
      <Navbar />
      <Landing />
    </div>
  );
}
