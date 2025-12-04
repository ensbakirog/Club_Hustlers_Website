"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "@/lib/motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Send, CheckCircle } from "lucide-react"

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [symbioteTentacles, setSymbioteTentacles] = useState(false)
  const [inputFocus, setInputFocus] = useState<string | null>(null)

  // Handle intersection observer manually
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    if (entry.isIntersecting) {
      setIsInView(true)
      setTimeout(() => setSymbioteTentacles(true), 1000)
    }
  }

  // Set up intersection observer
  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1
    })

    observer.observe(ref.current)

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, url: "#", color: "hover:text-venom-white" },
    { icon: <Linkedin className="h-5 w-5" />, url: "#", color: "hover:text-symbiote-blue" },
  ]

  // Generate symbiote tentacles
  const renderSymbioteTentacles = () => {
    if (!symbioteTentacles) return null;

    return Array.from({ length: 6 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{
          background: `linear-gradient(to ${i % 2 === 0 ? 'left' : 'right'}, 
                       hsl(var(--toxic-green)), transparent)`,
          height: `${Math.random() * 2 + 1}px`,
          width: '25%',
          left: `${i * 20}%`,
          bottom: 0,
          opacity: 0
        }}
        animate={{
          opacity: [0, 0.7, 0],
          height: ['1px', '100px', '1px']
        }}
        transition={{
          duration: Math.random() * 5 + 5,
          delay: i * 0.5,
          repeat: Infinity,
          repeatType: "loop"
        }}
      />
    ));
  };

  return (
    <section id="contact" ref={ref} className="w-full py-20 bg-venom-black relative overflow-hidden">
      {/* Background symbiote effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {renderSymbioteTentacles()}
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron symbiote-text">Contact Us</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-toxic-green to-symbiote-blue rounded-full mb-6"></div>
          <p className="max-w-[800px] text-muted-foreground">
            Reach out to collaborate with us. We're ready to transform your ideas into impressive digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form with Symbiote Effects */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black p-8 rounded-xl border border-gray-800 hover:border-toxic-green/50 transition-all duration-500 relative overflow-hidden"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="w-16 h-16 rounded-full bg-toxic-green/20 flex items-center justify-center mb-6"
                >
                  <CheckCircle className="h-8 w-8 text-toxic-green symbiote-text" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 font-orbitron">Symbiosis Complete!</h3>
                <p className="text-muted-foreground text-center">
                  Your message has been consumed. We'll devour your request and respond soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold mb-4 symbiote-text font-orbitron">Send Us a Message</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium font-orbitron">
                      Name
                    </label>
                    <div className="relative">
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        className="bg-black border-gray-800 focus-visible:ring-toxic-green focus-visible:border-toxic-green transition-all duration-300"
                        onFocus={() => setInputFocus("name")}
                        onBlur={() => setInputFocus(null)}
                      />

                      {/* Animated border effect when focused */}
                      <AnimatePresence>
                        {inputFocus === "name" && (
                          <motion.div
                            className="absolute -inset-[1px] z-0 rounded-md pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <div className="absolute inset-0 rounded-md border border-toxic-green/50 shadow-[0_0_10px_rgba(0,255,0,0.3)]"></div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium font-orbitron">
                      Email
                    </label>
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="bg-black border-gray-800 focus-visible:ring-toxic-green focus-visible:border-toxic-green transition-all duration-300"
                        onFocus={() => setInputFocus("email")}
                        onBlur={() => setInputFocus(null)}
                      />

                      {/* Animated border effect when focused */}
                      <AnimatePresence>
                        {inputFocus === "email" && (
                          <motion.div
                            className="absolute -inset-[1px] z-0 rounded-md pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <div className="absolute inset-0 rounded-md border border-toxic-green/50 shadow-[0_0_10px_rgba(0,255,0,0.3)]"></div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium font-orbitron">
                      Subject
                    </label>
                    <div className="relative">
                      <Input
                        id="subject"
                        placeholder="Project inquiry"
                        className="bg-black border-gray-800 focus-visible:ring-toxic-green focus-visible:border-toxic-green transition-all duration-300"
                        onFocus={() => setInputFocus("subject")}
                        onBlur={() => setInputFocus(null)}
                      />

                      {/* Animated border effect when focused */}
                      <AnimatePresence>
                        {inputFocus === "subject" && (
                          <motion.div
                            className="absolute -inset-[1px] z-0 rounded-md pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <div className="absolute inset-0 rounded-md border border-toxic-green/50 shadow-[0_0_10px_rgba(0,255,0,0.3)]"></div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium font-orbitron">
                      Message
                    </label>
                    <div className="relative">
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        required
                        className="min-h-[150px] bg-black border-gray-800 focus-visible:ring-toxic-green focus-visible:border-toxic-green transition-all duration-300"
                        onFocus={() => setInputFocus("message")}
                        onBlur={() => setInputFocus(null)}
                      />

                      {/* Animated border effect when focused */}
                      <AnimatePresence>
                        {inputFocus === "message" && (
                          <motion.div
                            className="absolute -inset-[1px] z-0 rounded-md pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <div className="absolute inset-0 rounded-md border border-toxic-green/50 shadow-[0_0_10px_rgba(0,255,0,0.3)]"></div>

                            {/* Animated symbiote tendrils in textarea */}
                            {Array.from({ length: 5 }).map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute bottom-0 bg-toxic-green/30"
                                style={{
                                  width: '2px',
                                  height: '20%',
                                  left: `${(i + 1) * 16}%`,
                                  filter: 'blur(1px)'
                                }}
                                animate={{
                                  height: ['20%', '60%', '40%'],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  repeatType: "reverse",
                                  delay: i * 0.2
                                }}
                              />
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
                <Button
                  type="submit"
                  variant="toxicGlow"
                  className="w-full font-orbitron transition-all duration-500 group relative overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                  <Send className="ml-2 h-4 w-4 relative z-10" />

                  {/* Moving symbiote effect on hover */}
                  <div className="absolute inset-0 w-full h-full scale-x-0 group-hover:scale-x-100 bg-toxic-green/20 transition-transform duration-500 origin-left"></div>
                </Button>
              </form>
            )}

            {/* Symbiote effect in the corners */}
            <div className="absolute top-0 left-0 w-10 h-10 pointer-events-none">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <path
                  d="M0,0 L20,0 Q10,10 0,20 Z"
                  fill="hsla(140, 100%, 50%, 0.3)"
                />
              </svg>
            </div>

            <div className="absolute bottom-0 right-0 w-10 h-10 pointer-events-none">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <path
                  d="M40,40 L20,40 Q30,30 40,20 Z"
                  fill="hsla(140, 100%, 50%, 0.3)"
                />
              </svg>
            </div>
          </motion.div>

          {/* Contact Info with Symbiote Effects */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-symbiote-blue to-toxic-green font-orbitron symbiote-text">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-6">
                Whether you need web development or mobile solutions, we're ready to collaborate on your next big project.
              </p>

              <div className="space-y-6">
                {/* Enes Bakıroğlu */}
                <div className="group">
                  <h4 className="text-lg font-bold mb-3 font-orbitron text-toxic-green">Enes Bakıroğlu</h4>
                  <div className="flex space-x-3">
                    <motion.a
                      href="https://github.com/ensbakirog"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="w-10 h-10 rounded-full bg-black border border-gray-800 flex items-center justify-center text-muted-foreground hover:text-venom-white hover:border-toxic-green transition-colors duration-300"
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/enesbakiroglu"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="w-10 h-10 rounded-full bg-black border border-gray-800 flex items-center justify-center text-muted-foreground hover:text-symbiote-blue hover:border-toxic-green transition-colors duration-300"
                    >
                      <Linkedin className="h-5 w-5" />
                    </motion.a>
                  </div>
                </div>

                {/* Berhan Berk Akgün */}
                <div className="group">
                  <h4 className="text-lg font-bold mb-3 font-orbitron text-symbiote-blue">Berhan Berk Akgün</h4>
                  <div className="flex space-x-3">
                    <motion.a
                      href="https://github.com/99berk"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="w-10 h-10 rounded-full bg-black border border-gray-800 flex items-center justify-center text-muted-foreground hover:text-venom-white hover:border-toxic-green transition-colors duration-300"
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/berhanberkakgun"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="w-10 h-10 rounded-full bg-black border border-gray-800 flex items-center justify-center text-muted-foreground hover:text-symbiote-blue hover:border-toxic-green transition-colors duration-300"
                    >
                      <Linkedin className="h-5 w-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-black to-black border border-gray-800 group hover:border-toxic-green transition-all duration-300 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-toxic-green to-symbiote-blue font-orbitron">
                  Available for Bonding
                </h3>
                <p className="text-muted-foreground mb-4">Currently accepting new hosts starting from:</p>
                <p className="text-2xl font-bold font-orbitron symbiote-text">June 2025</p>
              </div>

              {/* Background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-toxic-green/5 to-symbiote-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Corner effect */}
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-toxic-green/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
