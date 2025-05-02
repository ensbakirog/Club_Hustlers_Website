"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
// Change this import to use our wrapper
import { motion, AnimatePresence } from "@/lib/motion"
import { ArrowRight } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const tentacleRef = useRef<HTMLDivElement>(null)
  const mousePos = useRef({ x: -100, y: -100 })
  const interactionRadius = 100
  const isMobile = useIsMobile()
  const [showVenomFace, setShowVenomFace] = useState(false)

  // Symbiote effect logic
  const drawSymbioteEffect = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return () => {}

    const ctx = canvas.getContext('2d')
    if (!ctx) return () => {}

    // Make canvas fill the screen
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Symbiote tendrils/particles
    const particles: {x: number; y: number; dirX: number; dirY: number; size: number; opacity: number}[] = []
    const particleCount = 100

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dirX: (Math.random() - 0.5) * 2,
        dirY: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1
      })
    }

    let animationFrameId: number
    let lastTime = 0

    const draw = (timestamp: number) => {
      const deltaTime = timestamp - lastTime
      if (deltaTime > 30) { // Limit to ~30fps for performance
        lastTime = timestamp
        
        // Clear canvas with semi-transparent black for trail effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Get mouse position
        const currentMouseX = mousePos.current.x
        const currentMouseY = mousePos.current.y

        // Update and draw particles
        particles.forEach(particle => {
          // Calculate distance from mouse
          const dx = particle.x - currentMouseX
          const dy = particle.y - currentMouseY
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Particles gravitate toward mouse position
          if (distance < interactionRadius * 3) {
            const angle = Math.atan2(dy, dx)
            const force = 0.5 * (1 - Math.min(distance, interactionRadius * 3) / (interactionRadius * 3))
            particle.dirX -= Math.cos(angle) * force
            particle.dirY -= Math.sin(angle) * force
          }

          // Update position
          particle.x += particle.dirX
          particle.y += particle.dirY

          // Boundary checking with bounce
          if (particle.x < 0 || particle.x > canvas.width) {
            particle.dirX *= -1
          }
          if (particle.y < 0 || particle.y > canvas.height) {
            particle.dirY *= -1
          }

          // Draw particle
          ctx.beginPath()
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0, 
            particle.x, particle.y, particle.size
          )
          
          // Decide color based on distance from mouse
          if (distance < interactionRadius) {
            gradient.addColorStop(0, `hsla(140, 100%, 50%, ${particle.opacity * 1.5})`) // Toxic green
            gradient.addColorStop(1, 'transparent')
          } else {
            gradient.addColorStop(0, `hsla(180, 100%, 40%, ${particle.opacity})`) // Symbiote blue
            gradient.addColorStop(1, 'transparent')  
          }
          
          ctx.fillStyle = gradient
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()

          // Occasionally adjust direction randomly
          if (Math.random() < 0.02) {
            particle.dirX = (Math.random() - 0.5) * 2
            particle.dirY = (Math.random() - 0.5) * 2
          }
        })

        // Draw tendrils connecting nearby particles
        ctx.beginPath()
        ctx.strokeStyle = 'rgba(140, 255, 200, 0.1)'
        
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x
            const dy = particles[i].y - particles[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)
            
            if (distance < 100) {
              ctx.moveTo(particles[i].x, particles[i].y)
              ctx.lineTo(particles[j].x, particles[j].y)
            }
          }
        }
        ctx.stroke()
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    animationFrameId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  // Move tentacle to follow mouse
  const moveTentacle = (e: MouseEvent) => {
    if (tentacleRef.current) {
      const tentacle = tentacleRef.current
      const rect = tentacle.getBoundingClientRect()
      const tentacleX = rect.left + rect.width / 2
      const tentacleY = rect.top + rect.height / 2
      
      // Calculate angle to mouse
      const angle = Math.atan2(e.clientY - tentacleY, e.clientX - tentacleX)
      
      // Apply rotation
      tentacle.style.transform = `rotate(${angle}rad) scaleX(${e.clientX < tentacleX ? -1 : 1})`
      
      // If mouse gets close to the tentacle, show the Venom face
      const distance = Math.sqrt(
        Math.pow(e.clientX - tentacleX, 2) + 
        Math.pow(e.clientY - tentacleY, 2)
      )
      
      if (distance < 200 && !showVenomFace) {
        setShowVenomFace(true)
      } else if (distance >= 200 && showVenomFace) {
        setShowVenomFace(false)
      }
    }
  }

  useEffect(() => {
    setMounted(true)
    let cleanupDraw: (() => void) | undefined

    const handleMouseMove = (event: MouseEvent) => {
      mousePos.current = { x: event.clientX, y: event.clientY }
      moveTentacle(event)
    }
    
    window.addEventListener('mousemove', handleMouseMove)

    // Delay initial draw to ensure layout is stable
    const timerId = setTimeout(() => {
      cleanupDraw = drawSymbioteEffect()
    }, 100)

    const handleResize = () => {
      cleanupDraw?.()
      cleanupDraw = drawSymbioteEffect()
    }

    // Only add resize listener on non-mobile devices
    if (!isMobile) {
      window.addEventListener('resize', handleResize)
    }

    // Cleanup
    return () => {
      clearTimeout(timerId)
      cleanupDraw?.()
      window.removeEventListener('mousemove', handleMouseMove)
      if (!isMobile) {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [drawSymbioteEffect, isMobile])

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
      {/* Symbiote Canvas Effect */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      ></canvas>
      
      {/* Venom tentacle following mouse */}
      <div 
        ref={tentacleRef}
        className="absolute z-10 pointer-events-none w-40 h-40 opacity-70"
        style={{
          top: '30%',
          right: '10%',
          transformOrigin: '50% 100%'
        }}
      >
        <div className="w-8 h-60 bg-gradient-to-t from-toxic-green to-transparent absolute top-0 left-1/2 -translate-x-1/2 rounded-full"></div>
      </div>
      
      {/* Venom face that appears on interaction */}
      <AnimatePresence>
        {showVenomFace && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", damping: 10 }}
            className="absolute z-20 pointer-events-none"
            style={{ top: '30%', right: '10%' }}
          >
            <div className="relative w-40 h-40">
              {/* Venom eyes */}
              <div className="absolute top-1/4 left-1/4 w-8 h-16 bg-white rounded-full transform -rotate-12"></div>
              <div className="absolute top-1/4 right-1/4 w-8 h-16 bg-white rounded-full transform rotate-12"></div>
              
              {/* Venom mouth */}
              <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-24 h-12">
                <div className="w-full h-full bg-white mask-venom-mouth flex justify-center items-end">
                  <div className="w-3/4 h-1/2 flex justify-around items-end pb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="w-1 h-4 bg-toxic-green rounded-b-sm"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Container with content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-symbiote-blue to-toxic-green flex items-center justify-center relative overflow-hidden symbiote-border"
            >
              <div className="w-[95%] h-[95%] rounded-full bg-background flex items-center justify-center text-2xl font-bold font-orbitron relative z-10">
                <span className="symbiote-text">Berk</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-symbiote-blue via-toxic-green to-symbiote-blue bg-[length:200%_100%] animate-symbiote-flow opacity-40"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl font-bold text-toxic-green symbiote-text"
            >
              &amp;
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-toxic-green to-venom-purple flex items-center justify-center relative overflow-hidden symbiote-border"
            >
              <div className="w-[95%] h-[95%] rounded-full bg-background flex items-center justify-center text-2xl font-bold font-orbitron flex-col relative z-10">
                <span className="symbiote-text">Enes</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-toxic-green via-venom-purple to-toxic-green bg-[length:200%_100%] animate-symbiote-flow opacity-40"></div>
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter font-orbitron"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-symbiote-blue via-toxic-green to-venom-purple symbiote-text">
              Club Hustlers
            </span>
            <br className="hidden sm:inline" /> 
            <span className="text-venom-white relative">
              Design & Development
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-toxic-green"></span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-[800px] text-lg md:text-xl text-muted-foreground"
          >
            We merge with your ideas like a symbiote, creating digital experiences that
            <span className="text-toxic-green symbiote-text"> consume boundaries</span> and
            <span className="text-symbiote-blue symbiote-text"> devour limitations</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button
              size="lg"
              variant="toxicGlow"
              className="text-lg px-8 py-6 font-orbitron transition-all duration-300 group"
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
