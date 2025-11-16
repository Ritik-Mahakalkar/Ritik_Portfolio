import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: " Software Engineer Traniee",
    company: "eLan Technology, Nagpur",
    period: "August 2025- Present",
    description: [
      "Working as a MERN Stack Developer Trainee with hands-on experience in building real-world web applications.",
    "Collaborated with the development team to implement frontend features using React.js and backend APIs using Node.js and Express.",
    "Assisted in designing and managing MongoDB databases, including schema creation and CRUD operations.",
    "Contributed to bug fixing, testing, code improvements, and writing clean, maintainable code.",
    "Gained experience in Git/GitHub, API integrations, and basic deployment workflows.",
    ],
  },
  {
    title: "Software Developer intern",
    company: "Numetry Technologies, Pune",
    period: "March 2025 – August 2025",
    description: [
      "Developed and maintained dynamic web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js)",
      "Collaborated with senior developers to implement RESTful APIs and ensure smooth integration between frontend and backend",
      "Optimized application performance and improved code reusability through modular component design",
      "Worked closely with UI/UX designers to deliver responsive and user-friendly interfaces",
      "Participated in Agile development cycles, including daily stand-ups, sprint planning, and code reviews",
      "Utilized Git and GitHub for version control and collaborated with team members to manage project repositories",
    ],
    
  },
  {
    title: "Web Developer",
    company: "Freelancer",
    period: "November 2024 - March 2025",
    description: [
      "Designed and developed responsive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) to deliver efficient and scalable solutions for clients.",
      "Collaborated with clients to understand project requirements, define technical specifications, and deliver customized digital products on time.",
      "Optimized web application performance, achieving up to 40% faster load times through efficient API integration and frontend optimization.",
      "Implemented secure authentication systems, data validation, and RESTful APIs for seamless user experience and reliability.",
      "Used Git and GitHub for version control, managing multiple projects simultaneously with Agile development practices.",
      "Deployed and maintained projects on Netlify, Vercel, and Render, ensuring continuous delivery and smooth deployment pipelines. ",
      "Focused on clean code architecture, reusable components, and scalable backend design for long-term maintainability.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Experience</h2>
          <div className="w-20 h-1 gradient-flow mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 animate-slide-in-right"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-primary mb-3">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
