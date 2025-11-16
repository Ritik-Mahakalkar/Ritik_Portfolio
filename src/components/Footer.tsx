// import { Github, Linkedin, Mail, Twitter } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export const Footer = () => {
//   return (
//     <footer className="border-t border-border py-8 bg-secondary/30">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col items-center gap-4">
//           <div className="flex gap-4">
//             <Button variant="ghost" size="icon" className="hover:text-primary">
//               <Github className="h-5 w-5" />
//             </Button>
//             <Button variant="ghost" size="icon" className="hover:text-primary">
//               <Linkedin className="h-5 w-5" />
//             </Button>
//             <Button variant="ghost" size="icon" className="hover:text-primary">
//               <Twitter className="h-5 w-5" />
//             </Button>
//             <Button variant="ghost" size="icon" className="hover:text-primary">
//               <Mail className="h-5 w-5" />
//             </Button>
//           </div>
//           <p className="text-sm text-muted-foreground text-center">
//             © 2025 Ritik Mahakalkar. All Rights Reserved
//           </p>
//           <p className="text-xs text-muted-foreground">
//             Designed with passion, coded with precision
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };


import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-8 bg-secondary/30">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center gap-4">
          {/* Social Icons */}
          <div className="flex gap-4">
            {/* GitHub */}
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary transition-all duration-300 hover:shadow-md hover:shadow-primary/30"
                onClick={() =>
                  window.open("https://github.com/Ritik-Mahakalkar", "_blank")
                }
              >
                <Github className="h-5 w-5" />
              </Button>
            </motion.div>

            {/* LinkedIn */}
            <motion.div whileHover={{ scale: 1.2, rotate: -5 }}>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary transition-all duration-300 hover:shadow-md hover:shadow-primary/30"
                onClick={() =>
                  window.open(
                    "https://linkedin.com/in/ritik-mahakalkar-321807285",
                    "_blank"
                  )
                }
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </motion.div>

            {/* Twitter */}
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary transition-all duration-300 hover:shadow-md hover:shadow-primary/30"
                onClick={() =>
                  window.open("https://x.com/RitikMahak83938", "_blank")
                }
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </motion.div>

            {/* Email */}
            <motion.div whileHover={{ scale: 1.2, rotate: -5 }}>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary transition-all duration-300 hover:shadow-md hover:shadow-primary/30"
                onClick={() =>
                  window.open("mailto:ritikmahakalkar@gmail.com", "_blank")
                }
              >
                <Mail className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          {/* Text Section */}
          <motion.p
            className="text-sm text-muted-foreground text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            © 2025 Ritik Mahakalkar. All Rights Reserved
          </motion.p>

          <motion.p
            className="text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Designed with passion, coded with precision
          </motion.p>
        </div>
      </motion.div>
    </footer>
  );
};
