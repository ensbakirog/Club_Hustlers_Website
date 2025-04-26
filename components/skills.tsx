"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Palette, Figma, Database, Globe, Smartphone, Layers, Cpu, LineChart, Lightbulb } from "lucide-react"

type Skill = {
  name: string
  icon: React.ReactNode
  color: string
  person: "name1" | "name2" | "both"
  level: number
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const skills: Skill[] = [
    {
      name: "Python",
      icon: <Code className="h-6 w-6" />,
      color: "electric-blue",
      person: "name1",
      level: 90,
    },
    {
      name: "C/C++",
      icon: <Code className="h-6 w-6" />,
      color: "electric-blue",
      person: "both",
      level: 85,
    },
    {
      name: "Machine Learning",
      icon: <Cpu className="h-6 w-6" />,
      color: "electric-blue",
      person: "name1",
      level: 90,
    },
    {
      name: "Swift",
      icon: <Smartphone className="h-6 w-6" />,
      color: "electric-blue",
      person: "name1",
      level: 80,
    },
    {
      name: "Data Analysis",
      icon: <LineChart className="h-6 w-6" />,
      color: "electric-blue",
      person: "name1",
      level: 85,
    },
    {
      name: "UI/UX Design",
      icon: <Palette className="h-6 w-6" />,
      color: "electric-blue",
      person: "name1",
      level: 95,
    },
    {
      name: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      color: "hot-pink",
      person: "name2",
      level: 90,
    },
    {
      name: "Figma/Design Tools",
      icon: <Figma className="h-6 w-6" />,
      color: "electric-blue",
      person: "name1",
      level: 90,
    },
    {
      name: "Backend Development",
      icon: <Database className="h-6 w-6" />,
      color: "hot-pink",
      person: "name2",
      level: 85,
    },
    {
      name: "Web Animation",
      icon: <Layers className="h-6 w-6" />,
      color: "neon-green",
      person: "both",
      level: 80,
    },
    {
      name: "Responsive Design",
      icon: <Smartphone className="h-6 w-6" />,
      color: "electric-blue",
      person: "name1",
      level: 95,
    },
    {
      name: "API Development",
      icon: <Globe className="h-6 w-6" />,
      color: "hot-pink",
      person: "name2",
      level: 85,
    },
    {
      name: "Performance Optimization",
      icon: <Cpu className="h-6 w-6" />,
      color: "neon-green",
      person: "both",
      level: 75,
    },
    {
      name: "Data Visualization",
      icon: <LineChart className="h-6 w-6" />,
      color: "vibrant-orange",
      person: "both",
      level: 80,
    },
    {
      name: "Creative Problem Solving",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "vibrant-orange",
      person: "both",
      level: 95,
    },
    {
      name: "Flutter",
      icon: <Smartphone className="h-6 w-6" />,
      color: "neon-green",
      person: "both",
      level: 80,
    },
  ]

  const getPersonLabel = (person: string) => {
    switch (person) {
      case "name1":
        return "Berhan Berk Akgün"
      case "name2":
        return "Enes Bakıroğlu"
      default:
        return "Both"
    }
  }

  return (
    <section id="skills" ref={ref} className="w-full py-20 bg-background-alt">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-hot-pink to-electric-blue rounded-full mb-6"></div>
          <p className="max-w-[800px] text-muted-foreground">
            Our combined skill set allows us to handle projects from concept to completion, delivering exceptional
            results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="bg-background p-6 rounded-xl border border-border hover:border-muted-foreground/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-lg bg-${skill.color}/10 flex items-center justify-center text-${skill.color}`}
                >
                  {skill.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold">{skill.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full bg-background-alt2 text-${skill.color}`}>
                      {getPersonLabel(skill.person)}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-background-alt2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.1 * index }}
                      className={`h-full bg-${skill.color} rounded-full`}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
