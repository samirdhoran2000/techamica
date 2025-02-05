import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Info,
  Briefcase,
  BookOpen,
  Mail,
  Phone,
  Globe,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Github,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 md:px-16 py-8 md:py-12" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm md:text-base">
            <li>
              <Link to="/" className="flex items-center">
                <Home size={16} className="mr-2" /> Home
              </Link>
            </li>
            <li>
              <Link to="/commingsoon" className="flex items-center">
                <Info size={16} className="mr-2" /> About Us
              </Link>
            </li>
            <li>
              <Link to="/commingsoon" className="flex items-center">
                <Briefcase size={16} className="mr-2" /> Services
              </Link>
            </li>
            <li>
              <Link to="/commingsoon" className="flex items-center">
                <BookOpen size={16} className="mr-2" /> Blog / Insights
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-sm md:text-base">
            <li>
              <Link to="/commingsoon">Custom Web Development</Link>
            </li>
            <li>
              <Link to="/commingsoon">UI/UX Design</Link>
            </li>
            <li>
              <Link to="/commingsoon">E-commerce Development</Link>
            </li>
            <li>
              <Link to="/commingsoon">Web App Development</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Contact Information</h3>
          <ul className="space-y-2 text-sm md:text-base">
            <li className="flex items-center">
              <Phone size={16} className="mr-2" /> +91 90223 28048
            </li>
            <li className="flex items-center">
              <Mail size={16} className="mr-2" /> contact@techamica.com
            </li>
            <li className="flex items-center">
              <Globe size={16} className="mr-2" /> Business Hours: Mon - Sat | 9
              AM - 6 PM
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Legal & Policies</h3>
          <ul className="space-y-2 text-sm md:text-base">
            <li>
              <Link to="/commingsoon">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/commingsoon">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/commingsoon">Refund Policy</Link>
            </li>
            <li>
              <Link to="/commingsoon">Cookie Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 md:mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm text-gray-400">Tech Amica © 2025 All rights reserved</p>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=61556388266304"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/99411614/admin/feed/posts/"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={24} />
          </a>
          <a href="/commingsoon"target="_blank"
            rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <Twitter size={24} />
            
          </a>
          <a
            href="https://www.instagram.com/invites/contact/?i=y2g5u5sly94a&utm_content=tmb1mkp"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://github.com/"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
