import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-black px-10">
      <Navbar />
        <Landing />
    </div>
  );
}
