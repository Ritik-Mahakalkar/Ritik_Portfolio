// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ExternalLink, Github } from "lucide-react";

// const projects = [
//   // {
//   //   title: "E-Commerce Platform",
//   //   description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
//   //   technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
//   //   image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
//   //   github: "#",
//   //   live: "#",
//   // },
//   // {
//   //   title: "Food Delivery Application",
//   //   description: "Collaborative project management tool with real-time updates, kanban boards, and team collaboration features.",
//   //   technologies: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
//   //   image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
//   //   github: "#",
//   //   live: "#",
//   // },
//   // {
//   //   title: "You Tube Clone",
//   //   description: "Machine learning powered content generation tool with natural language processing capabilities.",
//   //   technologies: ["Python", "TensorFlow", "React", "FastAPI"],
//   //   image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
//   //   github: "#",
//   //   live: "#",
//   // },
//   // {
//   //   title: "Netflix Clone",
//   //   description: "Analytics dashboard for managing multiple social media accounts with insights and scheduling features.",
//   //   technologies: ["Vue.js", "Node.js", "Redis", "Chart.js"],
//   //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
//   //   github: "#",
//   //   live: "#",
//   // },
//   {
//     title: "E-Commerce Platform",
//     description:
//       "A scalable MERN-based e-commerce platform featuring dynamic product listings, secure checkout, and RESTful APIs for seamless data management. Optimized frontend performance reduced page load time by 30%, improving user engagement and conversion rates.",
//     technologies: ["React", "Node.js", "Express.js", "MongoDB"],
//     image:
//       "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
//     github: "https://github.com/Ritik-Mahakalkar/e-commerce",
//     live: "#",
//   },
//   {
//     title: "Food Purchasing and Delivery System",
//     description:
//       "A modern food ordering platform with real-time delivery tracking, role-based dashboards, and an intuitive user experience. Built with React and Node.js, the backend integrates MongoDB for efficient data storage and quick restaurant lookup functionality.",
//     technologies: ["React", "Node.js", "Express.js", "MongoDB"],
//     image:
//       "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
//     github: "#",
//     live: "#",
//   },
//   {
//     title: "YouTube Clone",
//     description:
//       "A feature-rich YouTube clone leveraging the YouTube Data API to display trending videos, search results, and playback. Integrated Firebase authentication reduced unauthorized access by 40%, with deployment on Netlify ensuring global accessibility.",
//     technologies: ["React.js", "Firebase Auth", "YouTube API"],
//     image:
//       "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
//     github: "https://github.com/Ritik-Mahakalkar/you_tube_clone",
//     live: "#",
//   },
//   {
//     title: "Netflix Clone",
//     description:
//       "A visually engaging Netflix clone built with React.js and TMDB API for personalized movie recommendations. Integrated Firebase for user authentication and dynamic content loading for a seamless streaming-like experience.",
//     technologies: ["React.js", "TMDB API", "Firebase"],
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
//     github: "https://github.com/Ritik-Mahakalkar/NetflixClone.git",
//     live: "#",
//   },
// ];

// export const Projects = () => {
//   return (
//     <section id="projects" className="py-20">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12 animate-fade-in">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Projects</h2>
//           <div className="w-20 h-1 gradient-flow mx-auto rounded-full" />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//           {projects.map((project, index) => (
//             <Card
//               key={index}
//               className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 group animate-fade-in"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="relative h-48 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//                 <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.technologies.map((tech, idx) => (
//                     <span
//                       key={idx}
//                       className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex gap-3">
//                   <Button variant="outline" size="sm" className="flex-1">
//                     <Github className="h-4 w-4 mr-2" />
//                     Code
//                   </Button>
//                   <Button size="sm" className="flex-1 gradient-flow">
//                     <ExternalLink className="h-4 w-4 mr-2" />
//                     Live Demo
//                   </Button>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, AlertTriangle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A scalable MERN-based e-commerce platform featuring dynamic product listings, secure checkout, and RESTful APIs for seamless data management. Optimized frontend performance reduced page load time by 30%, improving user engagement and conversion rates.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    github: "https://github.com/Ritik-Mahakalkar/e-commerce",
    live: "#",
  },
  {
    title: "Food Purchasing and Delivery System",
    description:
      "A modern food ordering platform with real-time delivery tracking, role-based dashboards, and an intuitive user experience. Built with React and Node.js, the backend integrates MongoDB for efficient data storage and quick restaurant lookup functionality.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "YouTube Clone",
    description:
      "A feature-rich YouTube clone leveraging the YouTube Data API to display trending videos, search results, and playback. Integrated Firebase authentication reduced unauthorized access by 40%, with deployment on Netlify ensuring global accessibility.",
    technologies: ["React.js", "Firebase Auth", "YouTube API"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    github: "https://github.com/Ritik-Mahakalkar/you_tube_clone",
    live: "#",
  },
  {
    title: "Netflix Clone",
    description:
      "A visually engaging Netflix clone built with React.js and TMDB API for personalized movie recommendations. Integrated Firebase for user authentication and dynamic content loading for a seamless streaming-like experience.",
    technologies: ["React.js", "TMDB API", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    github: "https://github.com/Ritik-Mahakalkar/NetflixClone.git",
    live: "#",
  },
];

export const Projects = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleLinkClick = (url) => {
    if (!url || url === "#" || url.trim() === "") {
      setDialogOpen(true);
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            Projects
          </h2>
          <div className="w-20 h-1 gradient-flow mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {/* GitHub Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleLinkClick(project.github)}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>

                  {/* Live Demo Button */}
                  <Button
                    size="sm"
                    className="flex-1 gradient-flow"
                    onClick={() => handleLinkClick(project.live)}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* ❌ Dialog Box for Missing Links */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-red-600">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                Link Not Found
              </DialogTitle>
              <DialogDescription className="text-gray-600">
                The requested project link could not be found. Please check
                again later or contact the project owner.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="destructive"
                onClick={() => setDialogOpen(false)}
                className="w-full"
              >
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
