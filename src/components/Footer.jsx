import { Github, Linkedin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // WhatsApp Configuration (Synchronized with Contact component)
  const phoneNumber = "917904578239";
  const message = "Hi, I saw your portfolio and I want to work with you";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand/Role */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Pradeepa <span className="text-blue-600">.</span>
            </h3>
            <p className="text-slate-500 text-sm font-medium">
              Freelance Web Developer & UI Designer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/PradeepaKandasamy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-50 text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-50 text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#2563EB] text-white font-bold text-lg rounded-2xl shadow-2xl shadow-blue-200 hover:bg-[#1D4ED8] hover:scale-105 active:scale-95 transition-all duration-300 group"
            >
              <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Work with me
            </a>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs font-medium">
            © {currentYear} Pradeepa. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-slate-400 text-xs hover:text-blue-600 hover:underline transition-all">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-400 text-xs hover:text-blue-600 hover:underline transition-all">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
