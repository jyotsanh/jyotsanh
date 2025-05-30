import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Get In Touch</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's discuss opportunities, collaborations, or any questions you might have about my work.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">hamaljyotsan@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium dark:text-white">Phone</p>
                    <p className="text-gray-600 dark:text-gray-300">+977-9824595613</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium dark:text-white">Location</p>
                    <p className="text-gray-600 dark:text-gray-300">Baluwatar, Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="lg" className="flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  GitHub
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Button>
              </div>
            </div>

            <Card className="border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="dark:text-white">QR Codes</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">LinkedIn QR</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">LinkedIn</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">GitHub QR</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">GitHub</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="dark:text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium dark:text-white">First Name</label>
                  <Input placeholder="Your first name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium dark:text-white">Last Name</label>
                  <Input placeholder="Your last name" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-white">Email</label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-white">Subject</label>
                <Input placeholder="What's this about?" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-white">Message</label>
                <Textarea placeholder="Tell me about your project or inquiry..." className="min-h-[120px]" />
              </div>

              <Button className="w-full" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
