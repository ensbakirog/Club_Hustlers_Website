"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Palette } from "lucide-react"
import Image from 'next/image'

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

        <div className="flex flex-col md:flex-row justify-center items-center gap-24 md:gap-40">
          {/* First Person */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative mb-6">
              <div className="w-48 h-48 rounded-xl overflow-hidden">
                <div className="relative w-full h-full scale-150">
                  <Image
                    src="/Berhan.jpeg"
                    alt="Berhan Berk Akgün"
                    fill
                    className="object-cover rounded-xl"
                    style={{ objectPosition: "10px center" }}
                  />
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full bg-electric-blue flex items-center justify-center">
                <Code className="w-6 h-6 text-background" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2 text-electric-blue">Berhan Berk Akgün</h3>
            <p className="text-sm uppercase tracking-wider mb-4 text-muted-foreground">Entrepreneur</p>
          </motion.div>

          {/* Second Person */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative mb-6">
              <div className="w-48 h-48 rounded-xl overflow-hidden">
                <Image src="/Enes.jpeg" alt="Enes Bakıroğlu" fill className="object-cover rounded-xl" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full bg-hot-pink flex items-center justify-center">
                <Code className="w-6 h-6 text-background" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2 text-hot-pink">Enes Bakıroğlu</h3>
            <p className="text-sm uppercase tracking-wider mb-4 text-muted-foreground">Entrepreneur</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
