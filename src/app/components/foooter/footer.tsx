// src/app/components/footer/footer.tsx
"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "@/tailwind/components/footer/footer.css";

const socialLinks = [
  {
    icon: <FaEnvelope />,
    url: "mailto:kousha@example.com",
    label: "Email",
    color: "#f87171",
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/kousha-dev",
    label: "GitHub",
    color: "#c084fc",
  },
  {
    icon: <FaLinkedin />,
    url: "https://linkedin.com/in/kousha",
    label: "LinkedIn",
    color: "#60a5fa",
  },
  {
    icon: <FaWhatsapp />,
    url: "https://wa.me/989123456789",
    label: "WhatsApp",
    color: "#34d399",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-icons">
          {socialLinks.map(({ icon, url, label, color }, index) => (
            <Link key={index} href={url} target="_blank" aria-label={label}>
              <span className="footer-icon-wrapper" style={{ color }}>
                {icon}
              </span>
            </Link>
          ))}
        </div>

        <p className="footer-text">
          Made with ❤️ by <strong>Kousha</strong> • All rights reserved • {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
