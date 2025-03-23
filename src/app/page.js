"use client"

import HeroSection from "./components/HeroSection";
import Logos from "./components/Logos";
import Navbar from "./components/Navbar";
import Toast from "./components/Toast";

export default function Home() {

  return (
    <div className="bg-[#F4EDE4] min-h-screen text-gray-900 px-10 xl:px-20">
      {/* Navbar */}
      <Navbar />

      {/* Toast */}
      <Toast />
 

      {/* Hero Section */}
     <HeroSection />

      {/* Logos Section */}
      <Logos />

    </div>
  );
}
