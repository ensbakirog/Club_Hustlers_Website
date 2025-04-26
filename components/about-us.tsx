"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Sparkles } from "lucide-react"
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

        {/* Duo Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-12">
            <div className="rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
              <Image 
                src="/duo/duo-1.jpg" 
                alt="The Duo working together" 
                width={500} 
                height={300} 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
              <Image 
                src="/duo/duo-2.jpg" 
                alt="The Duo at conference" 
                width={500} 
                height={300} 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
          
          <p className="text-lg text-center mb-12 text-muted-foreground">
            Our journey began with a shared vision to create meaningful digital experiences.
            Through countless brainstorming sessions, late-night coding marathons, and
            collaborative design explorations, we've forged a dynamic partnership that combines
            technical expertise with creative vision.
          </p>
          
          <div className="grid grid-cols-1 gap-6 mb-12">
            <div className="rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300 mx-auto w-full max-w-2xl">
              <div className="relative" style={{ aspectRatio: '4/3' }}>
                <Image 
                  src="/duo/duo-3.jpg" 
                  alt="Collaboration session" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
          
          <p className="text-lg text-center mb-12 text-muted-foreground">
            We complement each other's strengths - where one excels in pixel-perfect design and user experience,
            the other brings robust technical architecture and innovative development solutions.
            This balance allows us to tackle complex challenges from multiple perspectives.
          </p>
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
                <Sparkles className="w-6 h-6 text-background" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2 text-hot-pink">Enes Bakıroğlu</h3>
            <p className="text-sm uppercase tracking-wider mb-4 text-muted-foreground">Designer & Developer</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
