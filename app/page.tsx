import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Camera, Upload } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <span className="font-bold text-xl">StyleScan</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Discover Your Perfect Style
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Analyze your face shape and get personalized recommendations for glasses, haircuts, and clothing
                  styles.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/scan">
                  <Button className="w-full sm:w-auto" size="lg">
                    <Camera className="mr-2 h-4 w-4" />
                    Start Face Scan
                  </Button>
                </Link>
                <Link href="/upload">
                  <Button className="w-full sm:w-auto" variant="outline" size="lg">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Photo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">About StyleScan</h2>
                <p className="text-gray-500 md:text-xl">
                  StyleScan uses advanced facial recognition technology to analyze your face shape and provide
                  personalized style recommendations that complement your unique features.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Determine your face shape (oval, round, square, heart, etc.)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Get recommendations for flattering glasses styles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Discover haircuts that enhance your features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Learn which clothing collar styles suit you best</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md overflow-hidden rounded-xl">
                  <img
                    alt="Face shape analysis illustration"
                    className="aspect-[4/3] object-cover w-full"
                    src="/placeholder.svg?height=400&width=600"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Our process is simple, quick, and designed to give you accurate style recommendations.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">1</div>
                  <h3 className="text-xl font-bold">Scan Your Face</h3>
                  <p className="text-gray-500">Use your webcam or upload a photo to analyze your face shape.</p>
                </div>
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">2</div>
                  <h3 className="text-xl font-bold">Get Your Analysis</h3>
                  <p className="text-gray-500">Our algorithm determines your face shape based on facial proportions.</p>
                </div>
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">3</div>
                  <h3 className="text-xl font-bold">View Recommendations</h3>
                  <p className="text-gray-500">Receive personalized style suggestions tailored to your face shape.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
        <p className="text-xs text-gray-500">© 2025 StyleScan. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
