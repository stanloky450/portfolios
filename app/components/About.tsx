import { Code, Palette, Zap, Users } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices.",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting beautiful and intuitive user interfaces with attention to detail.",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimizing applications for speed and excellent user experience.",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborating effectively with cross-functional teams to deliver results.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text-primary">About Me</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-5xl mx-auto">
            I'm a results-driven Software Developer with 3+ years of hands-on experience in full-stack web and mobile application development. Proficient in modern front-end and back-end technologies including React, React Native, Node.js, TypeScript, and Firebase. Adept at designing scalable solutions, optimizing performance, and delivering exceptional user experiences. Strong communicator with proven ability to lead training programs and work collaboratively in Agile environments..
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20 dark:border-neutral-700/50"
            >
              <div className="w-16 h-16 gradient-bg-primary rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 glass rounded-3xl p-8 lg:p-12 shadow-lg border border-white/20 dark:border-neutral-700/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">My Journey</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Started as a curious student who loved building things with code. Over the years, I've worked with
                startups and established companies, helping them bring their digital visions to life.
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or
                sharing knowledge with the developer community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-slate-600 dark:text-slate-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">3+</div>
                <div className="text-slate-600 dark:text-slate-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">10+</div>
                <div className="text-slate-600 dark:text-slate-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-slate-600 dark:text-slate-300">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
