"use client"

import { useRef, useState, useEffect } from "react"
// Change this import to use our wrapper
import { motion, AnimatePresence } from "@/lib/motion"
import { 
  LineChart, Palette, Code, Figma, Database, 
  Globe, Smartphone, Cpu, BarChart3, Layers
} from "lucide-react"

type Skill = {
  name: string
  icon: React.ReactNode
  color: string
  person: "name1" | "name2" | "both"
  level: number
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [hoverSkill, setHoverSkill] = useState<number | null>(null)
  const [symbioteActive, setSymbioteActive] = useState(false)

  // Handle intersection observer manually
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    if (entry.isIntersecting) {
      setIsInView(true)
      // Activate symbiote effect after skills bars have animated
      setTimeout(() => setSymbioteActive(true), 2000)
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

  const getPersonLabel = (person: "name1" | "name2" | "both") => {
    if (person === "name1") return "Berhan"
    if (person === "name2") return "Enes"
    return "Together"
  }

  const skills: Skill[] = [
    {
      name: "Symbiote Binding",
      icon: <Code className="h-6 w-6" />,
      color: "toxic-green",
      person: "both",
      level: 95,
    },
    {
      name: "Neural Interface",
      icon: <LineChart className="h-6 w-6" />,
      color: "symbiote-blue",
      person: "name1",
      level: 85,
    },
    {
      name: "Predator Design",
      icon: <Palette className="h-6 w-6" />,
      color: "symbiote-blue",
      person: "name1",
      level: 95,
    },
    {
      name: "Frontend Consumption",
      icon: <Code className="h-6 w-6" />,
      color: "venom-purple",
      person: "name2",
      level: 90,
    },
    {
      name: "Shape Shifting",
      icon: <Figma className="h-6 w-6" />,
      color: "symbiote-blue",
      person: "name1",
      level: 90,
    },
    {
      name: "Backend Assimilation",
      icon: <Database className="h-6 w-6" />,
      color: "venom-purple",
      person: "name2",
      level: 88,
    },
    {
      name: "World Wide Hunting",
      icon: <Globe className="h-6 w-6" />,
      color: "toxic-green",
      person: "both",
      level: 92,
    },
    {
      name: "Responsive Mutation",
      icon: <Smartphone className="h-6 w-6" />,
      color: "symbiote-blue",
      person: "name1",
      level: 95,
    },
    {
      name: "System Hijacking",
      icon: <Cpu className="h-6 w-6" />,
      color: "toxic-green",
      person: "both",
      level: 75,
    },
    {
      name: "Visual Perception",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "venom-purple",
      person: "name2",
      level: 82,
    },
    {
      name: "Layer Manipulation",
      icon: <Layers className="h-6 w-6" />,
      color: "toxic-green",
      person: "both",
      level: 80,
    },
  ]

  // Fake particles for symbiote effect
  const renderSymbioteParticles = (skillIndex: number) => {
    if (!symbioteActive || hoverSkill !== skillIndex) return null;
    
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 bg-toxic-green rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              height: `${Math.random() * 10 + 3}px`,
              width: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.8 + 0.2
            }}
            animate={{
              top: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              left: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="skills" ref={ref} className="w-full py-20 bg-venom-black relative overflow-hidden">
      {/* Symbiote web background effect */}
      {symbioteActive && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-b from-toxic-green/20 to-transparent"
              style={{
                width: '1px',
                height: `${Math.random() * 30 + 20}%`,
                left: `${i * (100 / 30)}%`,
                top: `${Math.random() * 70}%`,
                opacity: Math.random() * 0.3 + 0.1,
                filter: 'blur(0.5px)',
                transform: `rotate(${Math.random() * 20 - 10}deg)`
              }}
            />
          ))}
        </div>
      )}
      
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron symbiote-text">Symbiote Abilities</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-toxic-green to-venom-purple rounded-full mb-6"></div>
          <p className="max-w-[600px] text-muted-foreground">
            Our powers, enhanced by the symbiote bond, allow us to assimilate and conquer any digital challenge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="bg-black p-6 rounded-xl border border-gray-800 hover:border-toxic-green/50 transition-all duration-300 relative overflow-hidden group"
              onMouseEnter={() => setHoverSkill(index)}
              onMouseLeave={() => setHoverSkill(null)}
            >
              {/* Symbiote effect on hover */}
              <AnimatePresence>
                {hoverSkill === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-0"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-transparent z-0"></div>
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-toxic-green/20 to-transparent z-0"
                      style={{
                        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 75% 35%, 50% 0%, 25% 35%, 0% 0%)'
                      }}
                    ></div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Skill content */}
              <div className="flex items-start gap-4 relative z-10">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-lg bg-${skill.color}/10 flex items-center justify-center text-${skill.color} relative`}
                >
                  {skill.icon}
                  
                  {/* Pulsing ring effect */}
                  <AnimatePresence>
                    {hoverSkill === index && (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1.2, opacity: 0.5 }}
                        exit={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className={`absolute inset-0 rounded-lg bg-${skill.color}/30`}
                      />
                    )}
                  </AnimatePresence>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold font-orbitron">{skill.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full bg-background-alt2 text-${skill.color} symbiote-text`}>
                      {getPersonLabel(skill.person)}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-black rounded-full overflow-hidden relative">
                    {/* Skill bar background with symbiote pattern */}
                    <div className="absolute inset-0 opacity-30">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div 
                          key={i}
                          className="absolute top-0 bottom-0 w-[3px] bg-gray-800"
                          style={{ left: `${i * 10}%` }}
                        />
                      ))}
                    </div>
                    
                    {/* Animated progress bar */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ 
                        duration: 1.5, 
                        delay: 0.1 * index,
                        ease: [0.25, 0.1, 0.25, 1]
                      }}
                      className={`h-full bg-${skill.color} rounded-full relative overflow-hidden group-hover:brightness-125`}
                    >
                      {/* Liquid effect inside bar */}
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-0 opacity-50">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute bottom-0 bg-white/20 w-[20%]"
                              style={{ 
                                height: `${Math.random() * 100}%`,
                                left: `${i * 20}%` 
                              }}
                              animate={{
                                height: [`${Math.random() * 50 + 50}%`, `${Math.random() * 50 + 50}%`]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse",
                                delay: i * 0.2
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Glowing dot at the end */}
                      {hoverSkill === index && (
                        <motion.div
                          className="absolute top-1/2 right-0 w-4 h-4 -translate-y-1/2 translate-x-1/2 rounded-full"
                          style={{ 
                            background: `radial-gradient(circle, hsl(var(--${skill.color})) 0%, transparent 70%)`,
                            filter: 'blur(2px)'
                          }}
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Floating symbiote particles */}
              {renderSymbioteParticles(index)}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Symbiote tendrils in corners */}
      <div className="hidden md:block">
        <div className="absolute -bottom-10 -left-10 w-60 h-60">
          <motion.div
            initial={{ opacity: 0 }}
            animate={symbioteActive ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <motion.path
                d="M40,10 Q100,50 60,180"
                stroke="hsla(140, 100%, 50%, 0.4)"
                strokeWidth="4"
                fill="transparent"
                initial={{ pathLength: 0 }}
                animate={symbioteActive ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 2, delay: 2 }}
              />
              <motion.path
                d="M35,20 Q80,90 90,150"
                stroke="hsla(140, 100%, 50%, 0.3)"
                strokeWidth="3"
                fill="transparent"
                initial={{ pathLength: 0 }}
                animate={symbioteActive ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 2, delay: 2.2 }}
              />
              <motion.path
                d="M50,15 Q120,40 70,190"
                stroke="hsla(140, 100%, 50%, 0.2)"
                strokeWidth="2"
                fill="transparent"
                initial={{ pathLength: 0 }}
                animate={symbioteActive ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 2, delay: 2.4 }}
              />
            </svg>
          </motion.div>
        </div>
        
        <div className="absolute -top-10 -right-10 w-60 h-60 rotate-180">
          <motion.div
            initial={{ opacity: 0 }}
            animate={symbioteActive ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <motion.path
                d="M40,10 Q100,50 60,180"
                stroke="hsla(180, 100%, 40%, 0.4)"
                strokeWidth="4"
                fill="transparent"
                initial={{ pathLength: 0 }}
                animate={symbioteActive ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 2, delay: 2 }}
              />
              <motion.path
                d="M35,20 Q80,90 90,150"
                stroke="hsla(180, 100%, 40%, 0.3)"
                strokeWidth="3"
                fill="transparent"
                initial={{ pathLength: 0 }}
                animate={symbioteActive ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 2, delay: 2.2 }}
              />
              <motion.path
                d="M50,15 Q120,40 70,190"
                stroke="hsla(180, 100%, 40%, 0.2)"
                strokeWidth="2"
                fill="transparent"
                initial={{ pathLength: 0 }}
                animate={symbioteActive ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 2, delay: 2.4 }}
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
