import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} Zoila Benel Pando
        </p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:zoila.benel@gmail.com"
            className="text-zinc-600 hover:text-violet-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/zoila-benel/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-violet-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
