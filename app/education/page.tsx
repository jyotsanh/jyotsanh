import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar } from "lucide-react"

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Education</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and educational background in technology and computer science.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold dark:text-white">Bachelor of Information Technology</h3>
                  <p className="text-gray-600 dark:text-gray-300">Lincoln University</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Phoenix College of IT & Management, Maitidevi, Kathmandu
                  </p>
                </div>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  2022-2025
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Currently pursuing Bachelor's degree in Information Technology with focus on software development,
                machine learning, and modern web technologies.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold dark:text-white">High School</h3>
                  <p className="text-gray-600 dark:text-gray-300">Hope International College</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Karkando, NPJ</p>
                </div>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  2019-2021
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Completed higher secondary education with strong foundation in mathematics and science, which laid the
                groundwork for my technical career.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Skills Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Technical Skills</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-lg dark:text-white">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Python", "JavaScript", "TypeScript", "SQL"].map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-lg dark:text-white">Frameworks & Libraries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["FastAPI", "React", "Next.js", "PyTorch", "LangChain", "LangGraph"].map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-lg dark:text-white">AI & ML Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["OpenAI API", "PaddlePaddle", "Llama.cpp", "CUDA", "Computer Vision"].map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-lg dark:text-white">Tools & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Docker", "WebSocket", "Twilio", "SQLite", "BeautifulSoup"].map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
