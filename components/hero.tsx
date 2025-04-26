"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Matrix Effect Logic
  const drawMatrix = useCallback(() => {
    console.log("drawMatrix called"); // Debug log
    const canvas = canvasRef.current
    if (!canvas) {
        console.error("Canvas element not found");
        return;
    }

    const ctx = canvas.getContext('2d')
    if (!ctx) {
        console.error("Canvas context not available");
        return;
    }

    // Make the canvas fill the screen
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    console.log(`Canvas dimensions set: ${canvas.width}x${canvas.height}`); // Debug log

    // Characters to use - Katakana, numbers, letters
    const characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const charactersArray = characters.split('')

    const fontSize = 16
    const columns = Math.floor(canvas.width / fontSize)

    // Initialize drops (one per column)
    const drops: number[] = []
    for (let x = 0; x < columns; x++) {
      drops[x] = 1
    }

    let animationFrameId: number;
    let lastTime = 0;
    const interval = 75; // ms - Increase this value to slow down further (e.g., 100, 150)

    const draw = (timestamp: number) => {
      const deltaTime = timestamp - lastTime;

      // Only draw if enough time has passed
      if (deltaTime > interval) {
        lastTime = timestamp - (deltaTime % interval); // Adjust lastTime to keep timing consistent

        // Semi-transparent background to create fading effect - Increased alpha
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)' // Use background color from theme if possible
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        ctx.fillStyle = '#0F0' // Green text
        ctx.font = `${fontSize}px monospace`

        // Loop over drops
        for (let i = 0; i < drops.length; i++) {
          // Get random character
          const text = charactersArray[Math.floor(Math.random() * charactersArray.length)]
          // Draw character
          ctx.fillText(text, i * fontSize, drops[i] * fontSize)

          // Send drop back to top randomly after it has crossed the screen
          // or randomly reset it to make streams appear at different times
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0
          }

          // Increment Y coordinate
          drops[i]++
        }
      }
      // Always request the next frame to keep the loop running smoothly
      animationFrameId = requestAnimationFrame(draw)
    }

    console.log("Starting animation loop"); // Debug log
    // Pass initial timestamp to draw function
    animationFrameId = requestAnimationFrame(draw);

    // Cleanup function
    return () => {
        console.log("Cleaning up animation frame"); // Debug log
        cancelAnimationFrame(animationFrameId);
    }

  }, []) // Empty dependency array ensures this runs once on mount

  useEffect(() => {
    console.log("Hero component mounted, setting up Matrix effect"); // Debug log
    setMounted(true)
    let cleanupDraw: (() => void) | undefined;

    // Delay initial draw slightly to ensure layout is stable
    const timerId = setTimeout(() => {
        cleanupDraw = drawMatrix();
    }, 100); // 100ms delay

    const handleResize = () => {
        // Clear previous animation before redrawing on resize
        cleanupDraw?.();
        cleanupDraw = drawMatrix();
    }

    window.addEventListener('resize', handleResize)

    // Cleanup function for effect and event listener
    return () => {
        console.log("Hero component unmounting, cleaning up effect"); // Debug log
        clearTimeout(timerId); // Clear the timeout if component unmounts quickly
        cleanupDraw?.(); // Call the cleanup from drawMatrix if it exists
        window.removeEventListener('resize', handleResize)
    }
  }, [drawMatrix]) // Add drawMatrix to dependency array

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Don't render canvas until mounted to avoid SSR issues
  if (!mounted) return null

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Matrix Canvas - Adjusted z-index */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0" // Changed z-[-1] to z-0
      ></canvas>

      {/* Background gradient (optional, can be removed or adjusted) */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80 z-0"></div> */}

      {/* Animated background elements (optional, can be kept or removed) */}
      {/* <div className="absolute inset-0 overflow-hidden z-[-1]"> ... </div> */}


      {/* Container - Increased z-index */}
      <div className="container relative z-10 px-4 md:px-6">
        {/* ... Rest of the Hero component content ... */}
        {/* Ensure this content has a background or is styled such that the canvas behind it is visible */}
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-electric-blue to-neon-green flex items-center justify-center"
            >
              <div className="w-[95%] h-[95%] rounded-full bg-background flex items-center justify-center text-2xl font-bold">
                Berhan Berk Akgün
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl font-bold text-hot-pink"
            >
              &amp;
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-hot-pink to-vibrant-orange flex items-center justify-center"
            >
              <div className="w-[95%] h-[95%] rounded-full bg-background flex items-center justify-center text-2xl font-bold">
                Enes
                <br />
                Bakıroğlu
              </div>
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-blue via-neon-green to-hot-pink">
              Creative Duo:
            </span>
            <br className="hidden sm:inline" /> Design & Development
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-[800px] text-lg md:text-xl text-muted-foreground"
          >
            We combine cutting-edge design with powerful development to create digital experiences that stand out.
            Together, we transform ideas into impactful digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <Button
              size="lg"
              className="bg-electric-blue hover:bg-neon-green text-background text-lg px-8 py-6 transition-all duration-300 group"
              onClick={scrollToProjects}
            >
              See Our Work
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
