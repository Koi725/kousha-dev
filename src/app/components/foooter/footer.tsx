// src/app/components/footer/footer.tsx
"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import "@/tailwind/components/footer/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">&copy; {new Date().getFullYear()} Kousha.dev. All rights reserved.</p>
        <div className="footer-icons">
          <Link href="mailto:kousha@example.com" target="_blank" aria-label="Email">
            <FaEnvelope className="footer-icon" />
          </Link>
          <Link href="https://github.com/kousha-dev" target="_blank" aria-label="GitHub">
            <FaGithub className="footer-icon" />
          </Link>
          <Link href="https://linkedin.com/in/kousha" target="_blank" aria-label="LinkedIn">
            <FaLinkedin className="footer-icon" />
          </Link>
          <Link href="https://wa.me/989123456789" target="_blank" aria-label="WhatsApp">
            <FaWhatsapp className="footer-icon" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
