// src/app/components/footer/footer.tsx
"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "@/tailwind/components/footer/footer.css";

const socialLinks = [
  {
    icon: <FaEnvelope />,
    url: "mailto:kousha.rezaei@ua.pt",
    label: "Email",
    color: "#f87171", // Red
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/Koi725",
    label: "GitHub",
    color: "#c084fc", // Purple
  },
  {
    icon: <FaLinkedin />,
    url: "https://linkedin.com/in/kousha",
    label: "LinkedIn",
    color: "#60a5fa", // Blue
  },
  {
    icon: <FaWhatsapp />,
    url: "https://wa.me/351910856484",
    label: "WhatsApp",
    color: "#34d399", // Green
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Icons */}
        <div className="footer-icons">
          {socialLinks.map(({ icon, url, label, color }, index) => (
            <Link key={index} href={url} target="_blank" aria-label={label}>
              <span
                className="footer-icon-wrapper"
                style={{ color }}
                title={label}
              >
                {icon}
              </span>
            </Link>
          ))}
        </div>

        {/* Footer Text */}
        <p className="footer-text">
          Made with <span className="animate-pulse text-red-400">❤️</span> by{" "}
          <strong>Kousha</strong> • All rights reserved • {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
