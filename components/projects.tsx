"use client"

import { useRef, useState, useEffect } from "react"
// Change this import to use our wrapper
import { motion, AnimatePresence } from "@/lib/motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, FileText } from "lucide-react"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  contributors: ("name1" | "name2" | "both")[]
  links: {
    demo?: string
    code?: string
    case?: string
  }
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [hoverProject, setHoverProject] = useState<number | null>(null)
  const [symbioteActive, setSymbioteActive] = useState(false)

  // Handle intersection observer manually
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    if (entry.isIntersecting) {
      setIsInView(true)
      // Activate symbiote effect after projects have animated in
      setTimeout(() => setSymbioteActive(true), 1500)
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

  const projects: Project[] = [
    {
      id: 1,
      title: "VenomFlix",
      description: "A movie discovery symbiote that devours boring recommendations and injects thrill into your viewing experience with a venomous twist.",
      image: "./luckflix-project.png",
      tags: ["Flutter", "Dart", "TMDB API"],
      contributors: ["both"],
      links: {
        demo: "#",
        code: "#",
        case: "#",
      },
    }
  ]

  const getContributorColors = (contributors: ("name1" | "name2" | "both")[]) => {
    if (contributors.includes("both")) return "bg-gradient-to-r from-symbiote-blue to-toxic-green"
    if (contributors.includes("name1")) return "bg-symbiote-blue"
    return "bg-toxic-green"
  }

  const getContributorNames = (contributors: ("name1" | "name2" | "both")[]) => {
    if (contributors.includes("both")) return "Berhan Berk Akgün & Enes Bakıroğlu"
    if (contributors.includes("name1")) return "Berhan Berk Akgün"
    return "Enes Bakıroğlu"
  }

  // Generate symbiote tendrils
  const renderSymbioteTendrils = () => {
    if (!symbioteActive) return null;
    
    return Array.from({ length: 15 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-gradient-to-t from-toxic-green to-transparent"
        style={{ 
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 20 + 10}vh`,
          left: `${i * (100/15)}%`,
          bottom: 0,
          filter: 'blur(0.5px)',
          opacity: Math.random() * 0.6 + 0.2,
          zIndex: 0
        }}
        animate={{
          height: [`${Math.random() * 10 + 10}vh`, `${Math.random() * 20 + 20}vh`],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: Math.random() * 5 + 7,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    ));
  };

  return (
    <section id="projects" ref={ref} className="w-full py-20 bg-venom-black relative overflow-hidden">
      {/* Symbiote tendrils in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {renderSymbioteTendrils()}
      </div>
      
      <div className="container px-4 md:px-6 max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron symbiote-text">Our Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-toxic-green to-venom-purple rounded-full mb-6"></div>
          <p className="max-w-[600px] text-muted-foreground">
            Digital conquests that demonstrate our symbiotic power across various technologies and platforms.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative bg-black rounded-xl overflow-hidden border border-gray-800 hover:border-toxic-green transition-all duration-300"
              onMouseEnter={() => setHoverProject(project.id)}
              onMouseLeave={() => setHoverProject(null)}
            >
              {/* Project Image with Symbiote Effects */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-contain md:object-cover transition-all duration-500 group-hover:scale-105 mix-blend-luminosity group-hover:mix-blend-normal"
                />
                
                {/* Animated overlay on hover */}
                <AnimatePresence>
                  {hoverProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-venom-black via-transparent to-transparent pointer-events-none"
                    >
                      {/* Animated symbiote tendrils */}
                      <div className="absolute inset-0 overflow-hidden">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute bottom-0 bg-toxic-green"
                            style={{ 
                              width: '2px',
                              height: '0%',
                              left: `${(i + 0.5) * (100/8)}%`,
                              opacity: 0.7
                            }}
                            animate={{ height: ['0%', '50%', '30%'] }}
                            transition={{ 
                              duration: 2,
                              delay: i * 0.05,
                              ease: "easeOut"
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Contributor Badge with Venom style */}
                {project.id !== 1 && (
                  <div
                    className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium text-venom-black symbiote-text ${getContributorColors(project.contributors)}`}
                  >
                    {getContributorNames(project.contributors)}
                  </div>
                )}

                {/* Animated blood/symbiote drip effect */}
                <AnimatePresence>
                  {symbioteActive && (
                    <motion.div
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="absolute -bottom-2 left-0 right-0 h-4 overflow-hidden"
                    >
                      <div className="flex justify-around">
                        {Array.from({ length: 10 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-8 bg-toxic-green rounded-b-none rounded-t-full"
                            style={{
                              opacity: Math.random() * 0.7 + 0.3,
                              filter: 'blur(1px)',
                            }}
                            animate={{ 
                              height: [`${Math.random() * 5 + 5}px`, `${Math.random() * 15 + 10}px`],
                              opacity: [0.3, 0.7, 0.3]
                            }}
                            transition={{
                              duration: Math.random() * 3 + 2,
                              repeat: Infinity,
                              repeatType: "reverse",
                              delay: i * 0.2
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Project Content */}
              <div className="p-6 relative">
                {/* Background symbiote pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" 
                    style={{
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ff00' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
                    }}>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-toxic-green transition-colors duration-300 font-orbitron relative inline-block venom-teeth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                {/* Tags with Venom Style */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className="bg-black border-toxic-green/30 text-xs text-toxic-green hover:bg-toxic-green/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  {project.links.demo && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-toxic-green hover:text-toxic-green hover:bg-toxic-green/10 symbiote-text"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Prey
                    </Button>
                  )}
                  {project.links.code && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-symbiote-blue hover:text-symbiote-blue hover:bg-symbiote-blue/10 symbiote-text"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                  )}
                  {project.links.case && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-venom-purple hover:text-venom-purple hover:bg-venom-purple/10 symbiote-text"
                    >
                      <FileText className="h-4 w-4 mr-1" />
                      Case Study
                    </Button>
                  )}
                </div>
              </div>

              {/* Glowing Border Effect on Hover */}
              <AnimatePresence>
                {hoverProject === project.id && (
                  <motion.div 
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="absolute inset-0 border-2 border-toxic-green rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Corner accents like symbiote claws */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-toxic-green rounded-tl-xl"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-toxic-green rounded-tr-xl"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-toxic-green rounded-bl-xl"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-toxic-green rounded-br-xl"></div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-xl shadow-[0_0_15px_rgba(0,255,0,0.3)]"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Extra Symbiote Elements */}
        <div className="absolute -bottom-20 right-0 w-60 h-60 opacity-30 hidden md:block">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={symbioteActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ 
              duration: 1,
              delay: 2,
              type: "spring",
              damping: 12
            }}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <linearGradient id="symbioteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsla(140, 100%, 50%, 0.6)" />
                  <stop offset="100%" stopColor="hsla(180, 100%, 40%, 0.6)" />
                </linearGradient>
              </defs>
              <motion.path
                d="M20,100 Q60,20 100,100 T180,100"
                stroke="url(#symbioteGradient)"
                strokeWidth="5"
                fill="transparent"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={symbioteActive ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 2, delay: 2.2 }}
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
