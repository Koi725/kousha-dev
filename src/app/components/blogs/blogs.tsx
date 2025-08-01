"use client";
import { useTranslations } from "next-intl";
import { blogPosts } from "./blogs-data";
import { BlogItemType } from "./blogs.types";
import "@/tailwind/components/blogs/blogs.css";
import Link from "next/link";

const Blogs = () => {
  const t = useTranslations("BlogPage");

  return (
    <section className="blogs-section" id="blogs">
      <div className="blogs-container">
        <h2 className="blogs-title">{t("my_blogs")}</h2>
        <div className="blogs-grid">
          {blogPosts.map((post: BlogItemType) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-desc">{post.desc}</p>
                <span className="blog-date">{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
