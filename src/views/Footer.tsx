import React, { useState } from "react";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import lavLogo from "@/assets/lav-logo.png";
import Modal from "./Modal"; // Import the Modal component

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const handleNav = (path: string) => {
    if (pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  const openModal = (type: "privacy" | "terms" | "cookie") => {
    let title = "";
    let content = null;

    switch (type) {
      case "privacy":
        title = "Privacy Policy";
        content = (
          <div>
            <p>Your privacy is important to us. This section explains how we collect, use, and protect your data.</p>
            <ul className="list-disc list-inside mt-2">
              <li>We do not share your personal data with third parties without your consent.</li>
              <li>Cookies help us improve your experience on our platform.</li>
              <li>You can contact us anytime to request data deletion.</li>
            </ul>
          </div>
        );
        break;
      case "terms":
        title = "Terms of Service";
        content = (
          <div>
            <p>These are the terms you agree to by using our platform. Please read carefully.</p>
            <ul className="list-disc list-inside mt-2">
              <li>You must be at least 18 years old to use our services.</li>
              <li>You are responsible for your account security and activity.</li>
              <li>We reserve the right to modify or terminate services at any time.</li>
            </ul>
          </div>
        );
        break;
      case "cookie":
        title = "Cookie Policy";
        content = (
          <div>
            <p>We use cookies to enhance your browsing experience. Here’s how we handle them:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Essential cookies are required for site functionality.</li>
              <li>Analytics cookies help us understand user behavior.</li>
              <li>You can manage cookie preferences through your browser settings.</li>
            </ul>
          </div>
        );
        break;
    }

    setModalTitle(title);
    setModalContent(content);
    setIsModalOpen(true);
  };

  return (
    <footer className="bg-card border-t border-border dark:bg-gray-950 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={lavLogo} alt="LAV Company Logo" className="w-10 h-10 object-contain" />
              <span className="text-2xl font-bold text-foreground dark:text-white">LAV</span>
            </div>
            <p className="text-muted-foreground dark:text-gray-400 mb-6 max-w-md leading-relaxed">
              LAV Company is dedicated to connecting compassionate hearts with animals in need. 
              Through OneBowl, we're making animal welfare accessible, transparent, and impactful.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors dark:bg-gray-800 dark:hover:bg-primary" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors dark:bg-gray-800 dark:hover:bg-primary" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors dark:bg-gray-800 dark:hover:bg-primary" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[{ to: "/", label: "Home" }, { to: "/how-it-works", label: "How It Works" }, { to: "/impact", label: "Our Impact" }, { to: "/about", label: "About Us" }].map(({ to, label }) => (
                <li key={to}>
                  <button onClick={() => handleNav(to)} className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white transition-colors">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground dark:text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-muted-foreground dark:text-gray-400 mt-0.5" />
                <a href="mailto:onebowl.lav@gmail.com" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white transition-colors">
                  onebowl.lav@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-muted-foreground dark:text-gray-400 mt-0.5" />
                <div className="flex flex-col leading-tight">
                  <a href="tel:+919953048059" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white transition-colors">
                    9953048059
                  </a>
                  <a href="tel:+919871050724" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white transition-colors">
                    9871050724
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground dark:text-gray-400 mt-0.5" />
                <span className="text-muted-foreground dark:text-gray-400">
                  New Delhi, Delhi<br />India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border dark:border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <span className="text-muted-foreground dark:text-gray-400">© {currentYear} LAV Company. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <button onClick={() => openModal("privacy")} className="text-sm text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button onClick={() => openModal("terms")} className="text-sm text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white transition-colors">
                Terms of Service
              </button>
              <button onClick={() => openModal("cookie")} className="text-sm text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border dark:border-gray-800 text-center">
            <p className="text-sm text-muted-foreground dark:text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> for animals everywhere
            </p>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
        content={modalContent}
      />
    </footer>
  );
};

export default Footer;
