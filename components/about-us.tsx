"use client"

import { useRef, useState } from "react"
// Change this import to use our wrapper
import { motion, AnimatePresence } from "@/lib/motion"
import { Code, Sparkles } from "lucide-react"
import Image from 'next/image'

export default function AboutUs() {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const [isHoveringBerhan, setIsHoveringBerhan] = useState(false)
  const [isHoveringEnes, setIsHoveringEnes] = useState(false)
  const [symbioteActive, setSymbioteActive] = useState(false)
  
  // Handle intersection observer manually to trigger symbiote effect
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    if (entry.isIntersecting) {
      setIsInView(true)
      setTimeout(() => setSymbioteActive(true), 1500)
    }
  }
  
  // Set up intersection observer
  const observer = useRef<IntersectionObserver | null>(null)
  if (typeof window !== 'undefined' && ref.current && !observer.current) {
    observer.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.2
    })
    observer.current.observe(ref.current)
  }

  return (
    <section id="about" ref={ref} className="w-full py-20 bg-venom-black relative overflow-hidden">
      {/* Symbiote tendrils background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        {symbioteActive && Array.from({ length: 10 }).map((_, i) => (
          <motion.div 
            key={i}
            initial={{ height: 0 }}
            animate={{ height: ['30vh', '60vh', '40vh'] }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              repeatType: "reverse",
              delay: i * 0.7,
              ease: "easeInOut"
            }}
            className="venom-tentacle absolute bottom-0"
            style={{ 
              left: `${i * 10 + Math.random() * 5}%`,
              width: `${Math.random() * 3 + 2}px`,
              opacity: Math.random() * 0.5 + 0.5
            }}
          />
        ))}
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron symbiote-text">The Symbiotes</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-symbiote-blue to-toxic-green rounded-full"></div>
        </motion.div>

        {/* Duo Gallery Section - Symbiote Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-12">
            <motion.div 
              className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300 relative"
              whileHover={{ scale: 1.03 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-toxic-green/20 to-symbiote-blue/20 z-0"></div>
              <Image
                src="./duo/duo-1.jpg"
                alt="The Duo working together"
                width={500}
                height={300}
                className="w-full h-64 object-cover relative z-10 mix-blend-luminosity"
              />
              {/* Symbiote overlay effect */}
              <motion.div 
                className="absolute inset-0 bg-black z-20 origin-bottom"
                initial={{ scaleY: 1 }}
                animate={isInView ? { scaleY: 0 } : { scaleY: 1 }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              />
            </motion.div>
            
            <motion.div 
              className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300 relative"
              whileHover={{ scale: 1.03 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-toxic-green/20 to-symbiote-blue/20 z-0"></div>
              <Image
                src="./duo/duo-2.jpg"
                alt="The Duo at conference"
                width={500}
                height={300}
                className="w-full h-64 object-cover relative z-10 mix-blend-luminosity"
              />
              {/* Symbiote overlay effect */}
              <motion.div 
                className="absolute inset-0 bg-black z-20 origin-bottom"
                initial={{ scaleY: 1 }}
                animate={isInView ? { scaleY: 0 } : { scaleY: 1 }}
                transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
              />
            </motion.div>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-lg text-center mb-6 text-muted-foreground relative"
          >
            Everything started in 2022 when we <span className="text-toxic-green symbiote-text">bonded</span> at one of the world's most prestigious software schools, <span className="font-bold text-venom-white">Ecole 42</span>.
            In this unique environment, we learned not only how to code but also how to
            <span className="text-symbiote-blue symbiote-text"> consume problems</span>, think creatively,
            and push beyond the boundaries imposed by the system.
          </motion.p>

          {/* GIF section with symbiote effect */}
          <div className="grid grid-cols-1 gap-6 mb-12">
            <motion.div 
              className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300 mx-auto w-full max-w-lg relative"
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative" style={{ aspectRatio: '16/9', maxHeight: '300px' }}>
                <Image
                  src="./duo/duo-gif.gif"
                  alt="The Duo in action"
                  fill
                  className="object-contain mix-blend-screen"
                  priority
                  unoptimized={true} // Important for GIFs to animate properly
                />
                
                {/* Symbiote effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-venom-black via-transparent to-toxic-green/30 mix-blend-overlay"></div>
                
                {/* Animated symbiote tendrils */}
                {symbioteActive && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div
                        key={`top-${i}`}
                        className="absolute w-1 bg-gradient-to-b from-toxic-green to-transparent"
                        style={{ 
                          left: `${15 + i * 15 + Math.random() * 5}%`,
                          top: 0,
                          height: '30%'
                        }}
                        animate={{
                          height: ['15%', '35%', '15%'],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: i * 0.5,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="text-lg text-center mb-12 text-muted-foreground"
          >
            Just like the symbiote seeks a compatible host, we faced a choice: take the "blue pill" and stay in the safe but limited world of an ordinary life,
            or take the <span className="text-toxic-green symbiote-text">red pill</span> and unleash our full potential. We chose to <span className="text-symbiote-blue symbiote-text">bond with the unknown</span>. Because we knew that true power comes from embracing what others fear.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-lg text-center mb-12 text-muted-foreground"
          >
            Now, as a result of all these experiences, we are working on a project that fuels our hunger: <span className="text-toxic-green font-bold symbiote-text">LuckFlix</span>. 
            This project is not just an idea; it is the <span className="text-symbiote-blue symbiote-text">manifestation of our symbiosis</span> with technology and design.
          </motion.p>
        </motion.div>

        {/* Team member sections with symbiote effects */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-24 md:gap-40">
          {/* Berhan */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <div 
              className="relative mb-6 cursor-pointer"
              onMouseEnter={() => setIsHoveringBerhan(true)}
              onMouseLeave={() => setIsHoveringBerhan(false)}
            >
              <div className="w-48 h-48 rounded-xl overflow-hidden relative">
                <div className="relative w-full h-full scale-150">
                  <Image
                    src="./Berhan.jpeg"
                    alt="Berhan Berk Akgün"
                    fill
                    className={`object-cover rounded-xl transition-all duration-500 ${isHoveringBerhan ? 'grayscale-0' : 'grayscale'}`}
                    style={{ objectPosition: "10px center" }}
                  />
                </div>
                
                {/* Symbiote takeover effect */}
                <AnimatePresence>
                  {isHoveringBerhan && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                      >
                        {Array.from({ length: 20 }).map((_, i) => (
                          <motion.div 
                            key={i}
                            className="absolute bg-toxic-green"
                            style={{ 
                              height: `${Math.random() * 30 + 10}%`,
                              width: '1px',
                              left: `${i * 5}%`,
                              top: `${Math.random() * 70}%`,
                              opacity: Math.random() * 0.8 + 0.2,
                            }}
                            animate={{ 
                              height: ['10%', '40%', '20%'],
                              opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse",
                              delay: i * 0.1,
                              ease: "easeInOut"
                            }}
                          />
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full bg-toxic-green flex items-center justify-center">
                <Code className="w-6 h-6 text-venom-black" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2 text-symbiote-blue font-orbitron symbiote-text">Berhan Berk Akgün</h3>
            <p className="text-sm uppercase tracking-wider mb-4 text-muted-foreground">Symbiote Developer</p>
          </motion.div>

          {/* Enes */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center text-center"
          >
            <div 
              className="relative mb-6 cursor-pointer"
              onMouseEnter={() => setIsHoveringEnes(true)}
              onMouseLeave={() => setIsHoveringEnes(false)}
            >
              <div className="w-48 h-48 rounded-xl overflow-hidden">
                <Image 
                  src="./Enes.jpeg" 
                  alt="Enes Bakıroğlu" 
                  fill 
                  className={`object-cover rounded-xl transition-all duration-500 ${isHoveringEnes ? 'grayscale-0' : 'grayscale'}`} 
                />
                
                {/* Symbiote takeover effect - different style */}
                <AnimatePresence>
                  {isHoveringEnes && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-transparent to-black/80"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                      >
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3, type: "spring", damping: 12 }}
                        >
                          <div className="w-32 h-32 rounded-full bg-toxic-green/30 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-toxic-green/50 animate-pulse"></div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full bg-venom-purple flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-venom-black" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2 text-toxic-green font-orbitron symbiote-text">Enes Bakıroğlu</h3>
            <p className="text-sm uppercase tracking-wider mb-4 text-muted-foreground">Design Predator</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
