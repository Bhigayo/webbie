"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from 'framer-motion';

export default function LandingPage() {
  const [password, setPassword] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);

  const handleUnlock = () => {
    if (password.toLowerCase() === "m3t1c") {
      setAccessGranted(true);
    } else {
      alert("Invalid password");
    }
  };

  if (accessGranted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-bold">Welcome to Metic Apparel Drop</h1>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
        autoPlay
        muted
        loop
      >
        <source src="/bg.mp4" type="video/mp4" />

      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-md text-center"
      >
        <h1 className="text-3xl font-bold mb-6 tracking-wider">METIC APPAREL</h1>
        <p className="text-sm uppercase mb-4 text-gray-300">Drop access</p>
        <Input
          type="password"
          placeholder="Enter drop code"
          className="bg-transparent border-white text-white placeholder-gray-400 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleUnlock} className="bg-white text-black w-full hover:bg-gray-200 transition-all">
          Unlock
        </Button>
      </motion.div>
    </div>
  );
}
