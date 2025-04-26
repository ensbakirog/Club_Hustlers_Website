import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <AboutUs />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
