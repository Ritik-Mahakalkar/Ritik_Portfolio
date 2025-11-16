// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Mail, MapPin, Phone } from "lucide-react";

// const contactInfo = [
//   {
//     icon: Mail,
//     title: "Email",
//     value: "ritikmahakalkar16@gmail.com",
//   },
//   {
//     icon: Phone,
//     title: "Phone",
//     value: "+91 9763767457",
//   },
//   {
//     icon: MapPin,
//     title: "Location",
//     value: "Nagpur, MH",
//   },
// ];

// export const Contact = () => {
//   return (
//     <section id="contact" className="py-20">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12 animate-fade-in">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
//           <div className="w-20 h-1 gradient-flow mx-auto rounded-full" />
//           <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
//             I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
//           </p>
//         </div>

//         <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Contact Information */}
//           <div className="space-y-6 animate-slide-in-left">
//             {contactInfo.map((item, index) => (
//               <Card
//                 key={index}
//                 className="p-6 bg-card border-border hover:border-primary transition-all duration-300"
//               >
//                 <div className="flex items-center gap-4">
//                   <div className="p-3 bg-primary/10 rounded-lg">
//                     <item.icon className="h-6 w-6 text-primary" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-muted-foreground">{item.title}</p>
//                     <p className="font-medium">{item.value}</p>
//                   </div>
//                 </div>
//               </Card>
//             ))}

//             <Card className="p-6 bg-card border-border">
//               <h3 className="text-lg font-semibold mb-4">Why Work With Me?</h3>
//               <ul className="space-y-2 text-muted-foreground">
//                 <li className="flex items-start">
//                   <span className="text-primary mr-2">✓</span>
//                   Responsive and clear communication
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-primary mr-2">✓</span>
//                   Commitment to quality and deadlines
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-primary mr-2">✓</span>
//                   Collaborative and team-oriented approach
//                 </li>
//               </ul>
//             </Card>
//           </div>

//           {/* Contact Form */}
//           <Card className="p-6 bg-card border-border animate-slide-in-right">
//             <form className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="text-sm font-medium mb-2 block">
//                   Name
//                 </label>
//                 <Input id="name" placeholder="Your name" />
//               </div>
//               <div>
//                 <label htmlFor="email" className="text-sm font-medium mb-2 block">
//                   Email
//                 </label>
//                 <Input id="email" type="email" placeholder="your.email@example.com" />
//               </div>
//               <div>
//                 <label htmlFor="subject" className="text-sm font-medium mb-2 block">
//                   Subject
//                 </label>
//                 <Input id="subject" placeholder="What's this about?" />
//               </div>
//               <div>
//                 <label htmlFor="message" className="text-sm font-medium mb-2 block">
//                   Message
//                 </label>
//                 <Textarea
//                   id="message"
//                   placeholder="Tell me about your project..."
//                   rows={5}
//                 />
//               </div>
//               <Button className="w-full gradient-flow glow-effect" size="lg">
//                 Send Message
//               </Button>
//             </form>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };



import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "ritikmahakalkar16@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9763767457",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Nagpur, MH",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Replace with your WhatsApp number in international format (without + or spaces)
    const phoneNumber = "919763767457"; // ✅ your number

    const { name, email, subject, message } = formData;
    const text = `💬 *Message From ${name}*\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`;

    // Encode message for URL
    const encodedText = encodeURIComponent(text);

    // WhatsApp API link
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    // Redirect user to WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <div className="w-20 h-1 gradient-flow mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in-left">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold mb-4">Why Work With Me?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Responsive and clear communication
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Commitment to quality and deadlines
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Collaborative and team-oriented approach
                </li>
              </ul>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6 bg-card border-border animate-slide-in-right">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="text-sm font-medium mb-2 block">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium mb-2 block">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium mb-2 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button className="w-full gradient-flow glow-effect" size="lg" type="submit">
                Send Message on WhatsApp
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
