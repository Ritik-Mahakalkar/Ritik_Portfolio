import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
 
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    school: "Rashtrasant Tukadoji Maharaj Nagpur University",
    year: "2022 - 2025",
    description: "Gained in-depth knowledge of software development, data structures, algorithms, and full-stack web technologies. Developed several hands-on projects focusing on modern frameworks, database management, and application scalability. CGPA: 7.6/10",
  },
  {
    degree: "Diploma in Computer Technology",
    school: "Maharashtra State Board Of Technical Education",
    year: "2020 - 2022",
    description: "Built a strong foundation in programming, computer networks, and system design. Engaged in practical projects involving web development and database systems, graduating with distinction.",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Education</h2>
          <div className="w-20 h-1 gradient-flow mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
                  <p className="text-primary mb-2">{item.school}</p>
                  <p className="text-sm text-muted-foreground mb-2">{item.year}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
