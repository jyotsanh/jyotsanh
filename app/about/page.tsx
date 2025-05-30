import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">About Me</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate about building intelligent solutions that make a real-world impact
          </p>
        </div>

        {/* About Me Section */}
        <section className="space-y-6">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">Who I Am</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                I'm a dedicated <strong>Machine Learning Engineer</strong> and{" "}
                <strong>Python Automation Specialist</strong> with a passion for creating intelligent systems that solve
                real-world problems. Currently based in <strong>Kathmandu, Nepal</strong>, I specialize in building{" "}
                <strong>production-level AI solutions</strong>, <strong>chatbots</strong>, and{" "}
                <strong>automation pipelines</strong> that drive business value.
              </p>
              <p>
                My journey in technology began with a curiosity about how machines can learn and adapt. This led me to
                pursue a <strong>Bachelor's in Information Technology</strong> while simultaneously gaining hands-on
                experience through internships and professional roles. I believe in <strong>continuous learning</strong>{" "}
                and staying at the forefront of emerging technologies.
              </p>
              <p>
                What sets me apart is my ability to bridge the gap between <strong>cutting-edge AI research</strong> and{" "}
                <strong>practical business applications</strong>. I excel at taking complex machine learning concepts
                and transforming them into <strong>scalable, production-ready solutions</strong> that deliver measurable
                results.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* What I Do Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">What I Do</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 dark:text-white">
                  <span className="text-2xl">🤖</span>
                  AI & Machine Learning
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300">
                <p>
                  Developing <strong>intelligent chatbots</strong>, <strong>computer vision systems</strong>, and{" "}
                  <strong>natural language processing</strong> solutions. Experienced with <strong>OpenAI APIs</strong>,{" "}
                  <strong>LangChain/LangGraph</strong>, and <strong>custom model fine-tuning</strong>.
                </p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 dark:text-white">
                  <span className="text-2xl">🐍</span>
                  Python Automation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300">
                <p>
                  Building <strong>data extraction pipelines</strong>, <strong>OCR systems</strong>, and{" "}
                  <strong>web scraping solutions</strong>. Expertise in <strong>FastAPI</strong>,{" "}
                  <strong>asynchronous programming</strong>, and <strong>real-time data processing</strong>.
                </p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 dark:text-white">
                  <span className="text-2xl">⚡</span>
                  Real-time Systems
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300">
                <p>
                  Creating <strong>WebSocket applications</strong>, <strong>live data streaming</strong>, and{" "}
                  <strong>real-time communication systems</strong>. Proficient in <strong>Twilio integration</strong>{" "}
                  and <strong>socket programming</strong>.
                </p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 dark:text-white">
                  <span className="text-2xl">🔧</span>
                  System Optimization
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300">
                <p>
                  Optimizing <strong>performance</strong>, <strong>scalability</strong>, and{" "}
                  <strong>concurrency</strong> in existing systems. Experience with{" "}
                  <strong>database optimization</strong>, <strong>memory management</strong>, and{" "}
                  <strong>deployment strategies</strong>.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Professional Experience</h2>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold dark:text-white">ML Engineer</h3>
                  <p className="text-gray-600 dark:text-gray-300">Palm Mind Technology</p>
                </div>
                <Badge variant="secondary">Dec 2024 - Present</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>
                  • <strong>CG Motors Chatbot Optimization</strong>: Refactored the entire CG Motors chatbot system to
                  be fully <strong>asynchronous</strong>, significantly improving <strong>concurrency</strong> and{" "}
                  <strong>response time</strong>. Enabled the bot to handle more users simultaneously with increased
                  efficiency and scalability.
                </li>
                <li>
                  • <strong>Sanima Bank OCR Integration</strong>: Developed a <strong>FastAPI backend</strong> to
                  integrate an <strong>OCR pipeline</strong> for extracting data from documents like application forms
                  and KYC, and storing the structured output in <strong>MongoDB</strong>.
                </li>
                <li>
                  • Integrated <strong>OpenAI APIs</strong> with <strong>Twilio</strong> for{" "}
                  <strong>real-time user interaction</strong> and automation
                </li>
                <li>
                  • <strong>Hyundai Chatbot Revamp</strong>: Migrated Hyundai chatbot from{" "}
                  <strong>LangChain to LangGraph</strong>, integrated <strong>SQLite for memory</strong>, and optimized
                  the <strong>RAG pipeline</strong>. Deployed and maintaining with improved performance and scalability.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold dark:text-white">Python Automation Engineer Intern</h3>
                  <p className="text-gray-600 dark:text-gray-300">Subiz Innovations</p>
                </div>
                <Badge variant="secondary">Jun 2023 - Nov 2023</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  • Developed <strong>Python bot</strong> for <strong>Nepal stock exchange data extraction</strong> to
                  CSV format
                </li>
                <li>
                  • Implemented <strong>PaddlePaddle OCR</strong> for converting{" "}
                  <strong>bank statement images and PDFs</strong> to Excel sheets
                </li>
                <li>
                  • Performed <strong>data cleaning</strong> from various sites for <strong>ML model training</strong>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Training Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Training & Fellowship</h2>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold dark:text-white">AI Fellowship</h3>
                  <p className="text-gray-600 dark:text-gray-300">Fusemachines</p>
                </div>
                <Badge variant="secondary">Apr - Oct 2024</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  • Comprehensive <strong>AI fellowship</strong> focused on advanced <strong>machine learning</strong>,{" "}
                  <strong>deep learning</strong>, and <strong>computer vision</strong>
                </li>
                <li>
                  • Applied technologies like <strong>face detection</strong>, <strong>gaze tracking</strong>, and{" "}
                  <strong>head pose detection</strong> in fellowship projects
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Values Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">My Values</h2>
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">🎯</div>
                  <h3 className="font-semibold mb-2 dark:text-white">Excellence</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Committed to delivering <strong>high-quality solutions</strong> that exceed expectations
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🚀</div>
                  <h3 className="font-semibold mb-2 dark:text-white">Innovation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Always exploring <strong>cutting-edge technologies</strong> and creative approaches
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🤝</div>
                  <h3 className="font-semibold mb-2 dark:text-white">Collaboration</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Believing in <strong>teamwork</strong> and <strong>knowledge sharing</strong> for mutual growth
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
