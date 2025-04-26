"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects: Project[] = [
    {
      id: 1,
      title: "LuckFlix",
      description: "A movie discovery app that helps users find their next favorite film with a spin of luck feature and genre-based recommendations.",
      image: "/luckflix-project.png",
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
    if (contributors.includes("both")) return "bg-gradient-to-r from-electric-blue to-hot-pink"
    if (contributors.includes("name1")) return "bg-electric-blue"
    return "bg-hot-pink"
  }

  const getContributorNames = (contributors: ("name1" | "name2" | "both")[]) => {
    if (contributors.includes("both")) return "Berhan Berk Akgün & Enes Bakıroğlu"
    if (contributors.includes("name1")) return "Berhan Berk Akgün"
    return "Enes Bakıroğlu"
  }

  return (
    <section id="projects" ref={ref} className="w-full py-20 bg-background">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-green to-vibrant-orange rounded-full mb-6"></div>
          <p className="max-w-[600px] text-muted-foreground">
            A showcase of our collaborative and individual work spanning various industries and technologies.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative bg-background-alt rounded-xl overflow-hidden border border-border hover:border-muted-foreground/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-contain md:object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-alt to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>

                {/* Contributor Badge - removed for LuckFlix project */}
                {project.id !== 1 && (
                  <div
                    className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium text-background ${getContributorColors(project.contributors)}`}
                  >
                    {getContributorNames(project.contributors)}
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-neon-green transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="bg-background-alt2 text-xs">
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
                      className="text-vibrant-orange hover:text-vibrant-orange hover:bg-vibrant-orange/10"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                  )}
                  {project.links.code && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-electric-blue hover:text-electric-blue hover:bg-electric-blue/10"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                  )}
                  {project.links.case && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-hot-pink hover:text-hot-pink hover:bg-hot-pink/10"
                    >
                      <FileText className="h-4 w-4 mr-1" />
                      Case
                    </Button>
                  )}
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-green rounded-xl transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
