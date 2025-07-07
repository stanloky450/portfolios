import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Hotel Booking Management System",
      description:
        "Hotel Management System is a modern web-based application for managing hotel operations efficiently.It provides a clean, responsive interface for managing bookings, rooms, customers, and other hotel-related services. Built with Next.js, TailwindCSS, and Shadcn UI, it is fast, extensible, and easy to maintain",
      image: "/assets/udoka.jpeg",
      tags: ["Next js", "Node.js", "Typescript", "Sanity", "paystack", "Tailwind"],
      github: "#",
      live: "https://www.udokansonhotel.com/",
    },
    {
      title: "Swimming company with dashboard system mange registration",
      description:
        "SwimPerfect is a vibrant, modern web application designed for managing and showcasing children’s summer swimming, coding, and sports training programs. Built with Next.js, TailwindCSS, and Shadcn UI, it provides a responsive, colorful, and easy-to-use interface for parents and program managers.",
      image: "/assets/perfect.jpeg",
      tags: ["Next.js", "TypeScript", "Node js", "mongodb", "TailwindCSS"],
      github: "#",
      live: "https://swimperfect.vercel.app/",
    },
    {
      title: "Church Website",
      description:
        "Church Website is a beautifully designed, responsive web application for a modern church. It provides sections for sermons, events, giving/donations, first-timer forms, ministries, live streaming, and more. Built with Next.js, TailwindCSS, and Shadcn UI, the site is fast, scalable, and easy to customize.",
      image: "/assets/church.jpeg",
      tags: ["Next js", "Node.js", "Typescript", "Tailwind"],
      github: "#",
      live: "https://www.rccgjeabuja.org/",
    },
    {
      title: "Gistmedia",
      description:
        "  Gistmedia is a project built with Mern stack with full CRUD functionality Material-UI, Redux. The backend is nodejs, Mongodb, express-validator. The app is a social app that allow user create and account then create content that enable them upload events of happening around them other user can like the post the original use can update and delete the poste.",
      image: "/assets/Gistmedia.png",
      tags: ["React js", "Node js", "Express", "MongoDB", "Redux", "Material UI"],
      github: "#",
      live: "https://gistmedia.netlify.app/posts",
    },
    {
      title: "Wordpress Project",
      description:
        "This project is an ecommerce site built with wordpress with full functionality owner would be able to upload product add price and deliveris done nation wide",
      image: "/assets/slimshantel.png",
      tags: ["Wordpress", "WooComerce", "Theme", "Plugins"],
      github: "#",
      live: "https://slimwithshantel.com/",
    },
    {
      title: "Cryptocurrency Tracker",
      description: "A real-time cryptocurrency tracking application with portfolio management and price alerts.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React Native", "Firebase", "CoinGecko API", "Redux"],
      github: "#",
      live: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-neutral-50/50 dark:bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text-primary">Featured Projects</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating innovative digital
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-background backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20 dark:border-neutral-700/50"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white ">{project.title}</h3>
                <p className="text-slate-600 dark:text-white  mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-blue-900 dark:bg-white text-white  text-sm dark:text-blue-800">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Projects
          </Button>
        </div> */}
      </div>
    </section>
  )
}
