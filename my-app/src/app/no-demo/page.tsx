"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LockIcon, ArrowLeft } from "lucide-react";

export default function NoDemo() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center min-h-[80vh] text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-8"
          >
            <LockIcon className="w-10 h-10 text-white/80" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            No Demo Available
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12">
            Due to the confidential nature of this system and proprietary information,
            a public demonstration is not available at this time.
          </p>

          <Button
            variant="outline"
            asChild
            className="group border-white/10 hover:bg-white/10"
          >
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent" />
      </div>
    </main>
  );
}