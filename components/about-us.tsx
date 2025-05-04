"use client"

import { useRef, useState, useEffect, useMemo } from "react"
// Change this import to use our wrapper
import { motion, useInView } from "@/lib/motion"
import { Code, Sparkles } from "lucide-react"
import Image from 'next/image'

export default function AboutUs() {
  // Use useRef for the section reference
  const ref = useRef(null)

  // Use useInView hook from framer-motion instead of manual IntersectionObserver
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  })

  // Update symbiote state based on isInView
  const [symbioteActive, setSymbioteActive] = useState(false)

  // Use useEffect to handle the symbiote activation with cleanup
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    if (isInView) {
      timeoutId = setTimeout(() => {
        setSymbioteActive(true)
      }, 800) // Reduced delay from 1500ms to 800ms
    }

    // Cleanup function to prevent memory leaks
    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [isInView])

  // Use useMemo to reduce recalculations of tentacle styles
  const tentacleStyles = useMemo(() =>
    Array.from({ length: 10 }).map((_, i) => ({
      left: `${i * 10 + Math.random() * 5}%`,
      width: `${Math.random() * 3 + 2}px`,
      opacity: Math.random() * 0.5 + 0.5,
      delay: i * 0.5, // Reduced from 0.7 to improve performance
    })),
    []
  )

  // Use useMemo for symbiote tendrils to avoid recreating on each render
  const symbioteEffectOptions = useMemo(() =>
    Array.from({ length: 5 }).map((_, i) => ({
      left: `${15 + i * 15 + Math.random() * 5}%`,
      delay: i * 0.3, // Reduced from 0.5
    })),
    []
  )

  return (
    <section id="about" ref={ref} className="w-full py-20 bg-venom-black relative overflow-hidden">
      {/* Symbiote tendrils background - only render when symbioteActive is true */}
      {symbioteActive && (
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          {tentacleStyles.map((style, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: ['30vh', '60vh', '40vh'] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                delay: style.delay,
                ease: "easeInOut"
              }}
              className="venom-tentacle absolute bottom-0"
              style={{
                left: style.left,
                width: style.width,
                opacity: style.opacity
              }}
            />
          ))}
        </div>
      )}

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }} // Reduced from 0.8
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron symbiote-text">Our Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-symbiote-blue to-toxic-green rounded-full"></div>
        </motion.div>

        {/* Duo Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-12">
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300 relative"
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src="./duo/duo-1.jpg"
                alt="The Duo working together"
                width={500}
                height={300}
                className="w-full h-64 object-cover relative z-10"
                loading="eager"
                priority={true}
              />
              {/* Symbiote overlay effect */}
              <motion.div
                className="absolute inset-0 bg-black z-20 origin-bottom"
                initial={{ scaleY: 1 }}
                animate={isInView ? { scaleY: 0 } : { scaleY: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              />
            </motion.div>

            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300 relative"
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src="./duo/duo-2.jpg"
                alt="The Duo at conference"
                width={500}
                height={300}
                className="w-full h-64 object-cover relative z-10"
                loading="eager"
                priority={true}
              />
              {/* Symbiote overlay effect */}
              <motion.div
                className="absolute inset-0 bg-black z-20 origin-bottom"
                initial={{ scaleY: 1 }}
                animate={isInView ? { scaleY: 0 } : { scaleY: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-center mb-6 text-muted-foreground relative"
          >
            Everything 🕶️ started in 2022 when we met at one of the world's most prestigious software schools, <span className="font-bold text-venom-white">Ecole 42</span>.
            In this unique environment, we learned not only how to code but also how to solve problems, think creatively,
            and push beyond the boundaries imposed by the system. 🖥️⚡
          </motion.p>

          {/* GIF section */}
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
                  className="object-contain"
                  loading="lazy"
                  unoptimized={true}
                />
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-lg text-center mb-8 text-muted-foreground"
          >
            Just like Neo in the Matrix, we faced a choice: take the <span className="text-blue-400 font-medium">"blue pill"</span> and stay in the safe but limited world of an ordinary life,
            or take the <span className="text-red-500 font-medium">"red pill" 🔴💊</span> and step into the unknown. We chose the unknown. Because we knew that true freedom begins beyond our comfort zones. This choice was not just a decision; it was the first step toward reaching our full potential. 🚀
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg text-center mb-8 text-muted-foreground"
          >
            Over two years, we generated countless ideas 🧠, developed projects, and learned something new from each one. While some ideas never came to life, the process taught us how to break the chains of the system. Every failure made us stronger and more determined. 🦾
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-lg text-center mb-8 text-muted-foreground"
          >
            Now, as a result of all these experiences, we are working on a project that excites us: <span className="font-bold" style={{ color: "#FFC000" }}>LuckFlix</span>. 🎬🍀 This project is not just an idea; it is a step toward creating our own reality. Because we believe that limits are nothing but an illusion, and we are here to break that illusion. 🌀🔥
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-lg text-center mb-12 text-muted-foreground"
          >
            And now, we are here to bring your projects to life. We are ready to work together to turn your dreams into reality. 🌟💼
          </motion.p>
        </motion.div>

        {/* Team member sections */}
        <motion.div className="flex flex-col md:flex-row justify-center items-center gap-24 md:gap-40"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {/* Berhan */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <div
              className="relative mb-6"
            >
              <div className="w-48 h-48 rounded-xl overflow-hidden relative">
                <div className="relative w-full h-full scale-150">
                  <Image
                    src="./Berhan.jpeg"
                    alt="Berhan Berk Akgün"
                    fill
                    loading="eager"
                    className="object-cover rounded-xl"
                    style={{ objectPosition: "10px center" }}
                  />
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2 text-white font-orbitron">Berhan Berk Akgün</h3>
          </motion.div>

          {/* Enes */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <div
              className="relative mb-6"
            >
              <div className="w-48 h-48 rounded-xl overflow-hidden">
                <Image
                  src="./Enes.jpeg"
                  alt="Enes Bakıroğlu"
                  fill
                  loading="eager"
                  className="object-cover rounded-xl"
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2 text-white font-orbitron">Enes Bakıroğlu</h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
