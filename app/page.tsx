import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white leading-tight">Jyotsan Hamal</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">ML Engineer & Python Automation Specialist</p>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  Building intelligent solutions with AI and automation
                </p>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Baluwatar, Kathmandu
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  hamaljyotsan@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +977-9824595613
                </div>
              </div>

              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/projects">
                    View Projects <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>

              <div className="flex gap-4">
                <Button variant="ghost" size="icon">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-80 relative h-80 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
                  {/* <p className="text-sm">Your Photo Here</p> */}
                  <Image src="/photo.jpeg" alt="" fill className="object-cover object-center rounded-xl"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm dark:bg-gray-900">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="font-semibold mb-2 dark:text-white">AI & ML Engineering</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Production-level chatbots and machine learning solutions
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm dark:bg-gray-900">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🐍</span>
                </div>
                <h3 className="font-semibold mb-2 dark:text-white">Python Automation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Data extraction, OCR, and web scraping solutions
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm dark:bg-gray-900">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="font-semibold mb-2 dark:text-white">Real-time Systems</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  WebSocket integrations and live data processing
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
