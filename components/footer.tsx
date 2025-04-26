export default function Footer() {
  return (
    <footer className="w-full py-8 bg-background-alt2 border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-electric-blue via-neon-green to-hot-pink">
              Berhan Berk Akgün & Enes Bakıroğlu
            </div>
          </div>

          <div className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
