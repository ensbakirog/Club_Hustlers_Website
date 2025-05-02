"use client"

import { motion } from "@/lib/motion"

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-venom-black border-t border-gray-800 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <motion.div 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-symbiote-blue via-toxic-green to-venom-purple font-orbitron symbiote-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Berhan Berk Akgün & Enes Bakıroğlu
            </motion.div>
          </div>

          <div className="text-sm text-muted-foreground relative symbiote-text">
            &copy; {new Date().getFullYear()} All rights <span className="text-toxic-green">consumed</span>.
          </div>
        </div>
      </div>
      
      {/* Symbiote web pattern in background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute bottom-0 left-0 right-0 h-full overflow-hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={i}
              className="absolute bg-toxic-green/30" 
              style={{ 
                height: '100%',
                width: '1px',
                left: `${i * 10}%`,
              }}
            />
          ))}
          
          {Array.from({ length: 3 }).map((_, i) => (
            <div 
              key={i}
              className="absolute bg-symbiote-blue/20" 
              style={{ 
                height: '1px',
                width: '100%',
                bottom: `${i * 10 + 30}%`,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}
