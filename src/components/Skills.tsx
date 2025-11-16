import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
      
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 80 },
      { name: "Java", level: 85 },
      { name: "C++", level: 70 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MYSQL", level: 95 },
      { name: "MongoDB", level: 85 },
      { name: "Supabase", level: 80 },
      { name: "Oracle", level: 75 },
      // { name: "Postman", level: 85 },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", level: 95 },
      // { name: "Docker", level: 80 },
      { name: "AWS", level: 65 },
      { name: "Netlify", level: 85 },
      { name: "Postman", level: 85 },
      { name: "Vercel", level: 85 },
    ],
  },
  {
    category: "Software Engineering Concepts",
    skills: [
      { name: "OOP", level: 90 },
      { name: "DSA", level: 85 },
      { name: "SDLC", level: 80 },
      { name: "Agile Development Methodology", level: 80 },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Adaptability", level: 95 },
      { name: "Collaboration", level: 85 },
      { name: "Logical Thinking", level: 80 },
      { name: "Problem Solving", level: 85 },
      { name: "Leadership", level: 85 },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Skills</h2>
          <div className="w-20 h-1 gradient-flow mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <Card
              key={idx}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full gradient-flow rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
