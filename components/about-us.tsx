"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Palette } from "lucide-react"

export default function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" ref={ref} className="w-full py-20 bg-background-alt">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Duo</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-electric-blue to-hot-pink rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* First Person */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="relative mb-6">
              <div className="w-48 h-48 rounded-xl overflow-hidden">
                <img src="/placeholder.svg?height=192&width=192" alt="Berhan Berk Akgün" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full bg-electric-blue flex items-center justify-center">
                <Palette className="w-6 h-6 text-background" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2 text-electric-blue">Berhan Berk Akgün</h3>
            <p className="text-sm uppercase tracking-wider mb-4 text-muted-foreground">UI/UX Designer</p>

            <p className="text-base md:text-left text-center mb-6">
              A passionate designer with an eye for detail and a mind for user experience. Specializes in creating
              intuitive, beautiful interfaces that engage users and communicate brand values effectively.
            </p>

            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="px-3 py-1 text-xs rounded-full bg-background-alt2 border border-electric-blue/30 text-electric-blue">
                UI Design
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-background-alt2 border border-electric-blue/30 text-electric-blue">
                Prototyping
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-background-alt2 border border-electric-blue/30 text-electric-blue">
                Brand Identity
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-background-alt2 border border-electric-blue/30 text-electric-blue">
                Motion Design
              </span>
            </div>
          </motion.div>

          {/* Second Person */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="relative mb-6">
              <div className="w-48 h-48 rounded-xl overflow-hidden">
                <img src="/placeholder.svg?height=192&width=192" alt="Enes Bakıroğlu" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full bg-hot-pink flex items-center justify-center">
                <Code className="w-6 h-6 text-background" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2 text-hot-pink">Enes Bakıroğlu</h3>
            <p className="text-sm uppercase tracking-wider mb-4 text-muted-foreground">Full-Stack Developer</p>

            <p className="text-base md:text-left text-center mb-6">
              A skilled developer who turns designs into functional, responsive experiences. Combines technical
              expertise with creative problem-solving to build robust, scalable applications.
            </p>

            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="px-3 py-1 text-xs rounded-full bg-background-alt2 border border-hot-pink/30 text-hot-pink">
                React
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-background-alt2 border border-hot-pink/30 text-hot-pink">
                Node.js
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-background-alt2 border border-hot-pink/30 text-hot-pink">
                TypeScript
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-background-alt2 border border-hot-pink/30 text-hot-pink">
                Next.js
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
