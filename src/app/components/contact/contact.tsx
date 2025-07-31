// src/app/contact/page.tsx
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import "@/tailwind/components/contact/contact.css";

const ContactPage = () => {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const sanitizeInput = (value: string) =>
    value.replace(/<[^>]*>?/gm, "").trim();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: sanitizeInput(value) });
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      return setError(t("errors.required"));
    }

    if (!validateEmail(email)) {
      return setError(t("errors.email"));
    }

    if (message.length > 1000) {
      return setError(t("errors.messageTooLong"));
    }

    // Simulate sending for now
    setTimeout(() => {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">{t("title")}</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={t("fields.name")}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("fields.email")}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder={t("fields.message")}
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          {error && <p className="form-error">{error}</p>}
          {success && <p className="form-success">{t("success")}</p>}

          <button type="submit" className="contact-button">
            {t("button")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
