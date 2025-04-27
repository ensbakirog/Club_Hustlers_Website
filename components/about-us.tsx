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
                src="./duo/duo-1.jpg"
                alt="The Duo working together"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
              <Image
                src="./duo/duo-2.jpg"
                alt="The Duo at conference"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          <p className="text-lg text-center mb-6 text-muted-foreground">
            Everything 🕶️ started in 2022 when we met at one of the world's most prestigious software schools, **Ecole 42**.
            In this unique environment, we learned not only how to code but also how to solve problems, think creatively,
            and push beyond the boundaries imposed by the system. 🖥️⚡
          </p>

          {/* New GIF section */}
          <div className="grid grid-cols-1 gap-6 mb-12">
            <div className="rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300 mx-auto w-full max-w-lg">
              <div className="relative" style={{ aspectRatio: '16/9', maxHeight: '300px' }}>
                <Image
                  src="./duo/duo-gif.gif"
                  alt="The Duo in action"
                  fill
                  className="object-contain"
                  priority
                  unoptimized={true} // Important for GIFs to animate properly
                />
              </div>
            </div>
          </div>

          <p className="text-lg text-center mb-12 text-muted-foreground">
            Just like Neo in the Matrix, we faced a choice: take the "blue pill" and stay in the safe but limited world of an ordinary life,
            or take the "red pill" and step into the unknown. 🔴💊 We chose the unknown. Because we knew that true freedom begins beyond our comfort zones.
            This choice was not just a decision; it was the first step toward reaching our full potential. 🚀
          </p>

          {/* Restored image section */}
          <div className="grid grid-cols-1 gap-6 mb-12">
            <div className="rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300 mx-auto w-full max-w-2xl">
              <div className="relative" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="./duo/duo-3.jpg"
                  alt="Collaboration session"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          <p className="text-lg text-center mb-12 text-muted-foreground">
            Over two years, we generated countless ideas 🧠, developed projects, and learned something new from each one.
            While some ideas never came to life, the process taught us how to break the chains of the system.
            Every failure made us stronger and more determined. 🦾
          </p>

          <p className="text-lg text-center mb-12 text-muted-foreground">
            Now, as a result of all these experiences, we are working on a project that excites us: **LuckFlix**. 🎬🍀
            This project is not just an idea; it is a step toward creating our own reality.
            Because we believe that limits are nothing but an illusion, and we are here to break that illusion. 🌀🔥
          </p>

          <p className="text-lg text-center mb-12 text-muted-foreground">
            And now, we are here to bring your projects to life. We are ready to work together to turn your dreams into reality. 🌟💼
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
                    src="./Berhan.jpeg"
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
                <Image src="./Enes.jpeg" alt="Enes Bakıroğlu" fill className="object-cover rounded-xl" />
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
