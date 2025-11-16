import { Card } from "@/components/ui/card";
import { Code2, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code is my passion",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quick to adapt to new technologies and frameworks",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborative mindset with strong communication skills",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-20 h-1 gradient-flow mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12 animate-slide-in-left">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I am a dedicated Full Stack Developer with 9 months of professional experience in designing and developing scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). My expertise lies in creating responsive user interfaces, building efficient backend APIs, and ensuring smooth integration across the entire development cycle. With a strong foundation in Java, JavaScript, and modern web technologies, I focus on writing clean, maintainable code and optimizing performance to deliver seamless digital experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
            Throughout my journey, I’ve built and deployed several projects such as e-commerce, food delivery, and media streaming platforms, showcasing my ability to solve real-world problems through code. I actively follow Agile development practices and have a keen eye for detail, adaptability, and continuous learning. My goal is to contribute to impactful projects that merge functionality with user-focused design while enhancing my technical expertise in full-stack development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:glow-effect animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <item.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-center">{item.title}</h3>
                <p className="text-muted-foreground text-center text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
