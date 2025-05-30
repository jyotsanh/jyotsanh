import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Phone Call Agent",
      description:
        "Real-time phone call agent using Twilio and OpenAI APIs for booking, rescheduling, and canceling appointments through natural conversation.",
      icon: "📞",
      technologies: ["WebSocket", "FastAPI", "Twilio", "OpenAI"],
      githubLink: "#",
    },
    {
      title: "Llama.cpp Custom GPU Build",
      description:
        "Built and configured llama.cpp for custom GPU architectures (GTX 1650 Ti Mobile and RTX 3060). Successfully served gemma-3 4B GGUF multi-model setup.",
      icon: "🔧",
      technologies: ["Llama.cpp", "CMake", "CUDA Toolkit", "Multer", "REST API"],
      githubLink: "#",
    },
    {
      title: "PPOCRv5 Fine-tuning Backend",
      description:
        "FastAPI backend for receiving images and PDFs from frontend dashboard, enabling easy fine-tuning of PPOCRv5 model for document OCR tasks.",
      icon: "📄",
      technologies: ["PyTorch", "FastAPI", "PaddlePaddle", "Datasets"],
      githubLink: "#",
    },
    {
      title: "ExStock Trading Platform",
      description:
        "Risk-free platform for learning stock trading using real-time NEPSE data. Features AI tutor, pattern recognition, and simulated trading with virtual currency.",
      icon: "📈",
      technologies: ["BeautifulSoup", "LangGraph", "FastAPI", "React", "Socket"],
      githubLink: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of my technical projects showcasing AI, automation, and full-stack development skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border border-gray-200 dark:border-gray-700 dark:bg-gray-800 hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <CardTitle className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-2xl">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold dark:text-white">{project.title}</h3>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
