import { Github, Mail, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="container mx-auto py-10"
    >
      <div className="flex justify-center space-x-6">
        <a
          target="_blank"
          href="https://www.instagram.com/soganyy/"
          className="p-3"
        >
          <Instagram className="h-6 w-6" />
          <span className="sr-only">Instagram</span>
        </a>
        <a
          target="_blank"
          href="https://github.com/Soganyy"
          className="p-3"
        >
          <Github className="h-6 w-6" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="mailto:matinmammadli0420@gmail.com"
          className="p-3"
        >
          <Mail className="h-6 w-6" />
          <span className="sr-only">Email</span>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/matin-mammadli-b05167225/"
          className="p-3"
        >
          <Linkedin className="h-6 w-6" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
