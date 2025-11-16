// import { Button } from "@/components/ui/button";
// import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import developerImage from "@/assets/developer-portrait.jpg";

// export const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
//     >
//       {/* Animated Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-64 gradient-flow opacity-20 rounded-full blur-3xl" />
//       </div>

//       {/* Content - Two Column Layout */}
//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
//           {/* Left Side - Developer Image */}
//           <div className="flex justify-center lg:justify-end animate-fade-in order-2 lg:order-1">
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-accent/50 rounded-3xl blur-2xl opacity-50" />
//               <Avatar className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 ring-4 ring-primary/30 ring-offset-8 ring-offset-background">
//                 <AvatarImage src={developerImage} alt="John Developer - Full Stack Software Developer" className="object-cover" />
//                 <AvatarFallback className="text-6xl">JD</AvatarFallback>
//               </Avatar>
//             </div>
//           </div>

//           {/* Right Side - Description */}
//           <div className="text-center lg:text-left animate-fade-in order-1 lg:order-2" style={{ animationDelay: "0.2s" }}>
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
//               <span className="gradient-text text-glow">John Developer</span>
//             </h1>
//             <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
//               Full Stack Software Developer
//             </p>
//             <p className="text-base sm:text-lg text-muted-foreground max-w-2xl lg:max-w-none mb-8">
//               Crafting elegant solutions to complex problems. Passionate about clean code,
//               user experience, and building products that make a difference.
//             </p>

//             {/* Social Links */}
//             <div className="flex justify-center lg:justify-start gap-4 mb-8">
//               <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
//                 <Github className="h-5 w-5" />
//               </Button>
//               <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
//                 <Linkedin className="h-5 w-5" />
//               </Button>
//               <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
//                 <Mail className="h-5 w-5" />
//               </Button>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
//               <Button size="lg" className="gradient-flow text-white font-semibold glow-effect">
//                 View My Work
//               </Button>
//               <Button size="lg" variant="outline">
//                 Download Resume
//               </Button>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <a
//         href="#about"
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
//       >
//         <ArrowDown className="h-6 w-6 text-muted-foreground" />
//       </a>
//     </section>
//   );
// };



// import { Button } from "@/components/ui/button";
// import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

// import developerImage from "@/assets/r.jpg"

// export const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background via-primary/5 to-background"
//       aria-labelledby="hero-title"
//     >
//       {/* Animated Background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-10 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-primary/15 rounded-full blur-3xl animate-pulse opacity-70" />
//         <div
//           className="absolute bottom-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-accent/15 rounded-full blur-3xl animate-pulse"
//           style={{ animationDelay: "1.5s" }}
//         />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[700px] h-40 sm:h-80 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl opacity-30 animate-float" />
//       </div>

//       {/* Content - Two Column Layout */}
//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//         <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
//           {/* Left Side - Developer Image */}
//           <div className="flex justify-center items-center animate-slide-up order-2 lg:order-1 min-h-[16rem] sm:min-h-[20rem] lg:min-h-[24rem]" style={{ animationDelay: "0.3s" }}>
//             <div className="relative group">
//               <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
//               <img
//                 src={developerImage}
//                 alt="Ritik Mahakalkar - Full Stack Software Developer"
//                 className="relative h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-80 object-cover rounded-xl shadow-2xl ring-4 ring-primary/25 ring-offset-4 ring-offset-background transition-transform duration-300 group-hover:scale-105"
//                 aria-label="John Developer portrait"
//               />
//             </div>
//           </div>

//           {/* Right Side - Description */}
//           <div className="text-center lg:text-left space-y-6 animate-slide-up order-1 lg:order-2" style={{ animationDelay: "0.5s" }}>
//             <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
//             Ritik Mahakalkar
//             </h1>
//             <p className="text-lg sm:text-xl text-muted-foreground font-medium">
//               Full Stack Software Developer
//             </p>
//             <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
//               Crafting elegant, scalable solutions with a passion for clean code, seamless user experiences, and impactful products.
//             </p>

//             {/* Social Links */}
//             <div className="flex justify-center lg:justify-start gap-3 sm:gap-4">
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
//                 asChild
//               >
//                 <a href="https://github.com/Ritik-Mahakalkar" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub profile">
//                   <Github className="h-5 w-5" />
//                 </a>
//               </Button>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
//                 asChild
//               >
//                 <a href="https://www.linkedin.com/in/ritik-mahakalkar-321807285/" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn profile">
//                   <Linkedin className="h-5 w-5" />
//                 </a>
//               </Button>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
//                 asChild
//               >
//                 <a href="mailto:ritikmahakalkar16@gmail.com" aria-label="Send email">
//                   <Mail className="h-5 w-5" />
//                 </a>
//               </Button>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
//               <Button
//                 size="lg"
//                 className="bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//                 asChild
//               >
//                 <a href="https://github.com/Ritik-Mahakalkar" aria-label="View my work">View My Work</a>
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="rounded-full border-2 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300 transform hover:scale-105"
//                 asChild
//               >
//                 <a href="https://drive.google.com/file/d/1grHm6XOWJ_gyH3cYFgO8VgAF9Jp0-6nZ/view?usp=sharing" download aria-label="Download resume">
//                   Download Resume
//                 </a>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <a
//         href="#about"
//         className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce focus:outline-none focus:ring-2 focus:ring-primary hover:text-primary transition-colors duration-300"
//         aria-label="Scroll to about section"
//       >
//         <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
//       </a>
//     </section>
//   );
// };


import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

import developerImage from "@/assets/r.jpg";

// Dialog imports
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background via-primary/5 to-background"
      aria-labelledby="hero-title"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-primary/15 rounded-full blur-3xl animate-pulse opacity-70" />
        <div
          className="absolute bottom-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-accent/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[700px] h-40 sm:h-80 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl opacity-30 animate-float" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Side Image */}
          <div
            className="flex justify-center items-center animate-slide-up order-2 lg:order-1 min-h-[16rem] sm:min-h-[20rem] lg:min-h-[24rem]"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <img
                src={developerImage}
                alt="Ritik Mahakalkar - Full Stack Software Developer"
                className="relative h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-80 object-cover rounded-xl shadow-2xl ring-4 ring-primary/25 ring-offset-4 ring-offset-background transition-transform duration-300 group-hover:scale-105"
                aria-label="Developer portrait"
              />
            </div>
          </div>

          {/* Right Side Text */}
          <div
            className="text-center lg:text-left space-y-6 animate-slide-up order-1 lg:order-2"
            style={{ animationDelay: "0.5s" }}
          >
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
            >
              Ritik Mahakalkar
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground font-medium">
              Full Stack Software Developer
            </p>

            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Crafting elegant, scalable solutions with clean code, smooth user
              experiences, and impactful digital products.
            </p>

            {/* Social Buttons */}
            <div className="flex justify-center lg:justify-start gap-3 sm:gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
                asChild
              >
                <a
                  href="https://github.com/Ritik-Mahakalkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/ritik-mahakalkar-321807285/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>

              {/* EMAIL DIALOG BUTTON */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
                  >
                    <Mail className="h-5 w-5" />
                  </Button>
                </DialogTrigger>

                <DialogContent className="max-w-sm">
                  <DialogHeader>
                    <DialogTitle>Contact Me</DialogTitle>
                    
                  </DialogHeader>

                  <div className="mt-4 p-3 border rounded-lg bg-muted">
                    <p className="font-medium text-center">
                      ritikmahakalkar16@gmail.com
                    </p>
                  </div>

                  <div className="flex justify-center gap-3 mt-4">
                    <Button
                      variant="outline"
                      onClick={() =>
                        navigator.clipboard.writeText(
                          "ritikmahakalkar16@gmail.com"
                        )
                      }
                    >
                      Copy Email
                    </Button>

                   
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href="https://github.com/Ritik-Mahakalkal">
                  View My Work
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1grHm6XOWJ_gyH3cYFgO8VgAF9Jp0-6nZ/view?usp=sharing"
                  download
                >
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce focus:outline-none focus:ring-2 focus:ring-primary hover:text-primary transition-colors duration-300"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
      </a>
    </section>
  );
};
