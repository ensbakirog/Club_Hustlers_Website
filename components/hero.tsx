"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  if (!mounted) return null

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-0"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {mounted && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ duration: 2 }}
              className="absolute top-[10%] left-[15%] w-64 h-64 rounded-full bg-electric-blue blur-[100px]"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="absolute bottom-[20%] right-[10%] w-72 h-72 rounded-full bg-neon-green blur-[120px]"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ duration: 2, delay: 1 }}
              className="absolute top-[40%] right-[25%] w-48 h-48 rounded-full bg-hot-pink blur-[80px]"
            />
          </>
        )}
      </div>

      <div className="container relative z-10 px-4 md:px-6">
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
              &
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
