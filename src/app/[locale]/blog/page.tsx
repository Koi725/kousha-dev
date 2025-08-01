'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { fetchBlogPosts } from '@/lib/api';
import Link from 'next/link';

type BlogPost = {
  id: number;
  title: string;
  slug: string;
  summary: string;
  published_at: string;
};

export default function BlogPage() {
  const t = useTranslations('BlogPage');
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts()
      .then((data) => setBlogs(data))
      .catch((err) => console.error('Failed to fetch blogs:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="min-h-screen px-6 py-16 text-white bg-gradient-to-b from-black via-[#0e0e26] to-black">
      <h1 className="text-4xl font-bold mb-10 animate-fade-in">{t('my_blogs')}</h1>

      {loading ? (
        <p className="text-gray-400 animate-pulse">{t('blogs.loading') || 'Loading...'}</p>
      ) : blogs.length === 0 ? (
        <p className="text-gray-400 animate-fade-in">{t('blogs.no_blogs')}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
          {blogs.map((blog) => (
            <Link
              href={`/blog/${blog.slug}`}
              key={blog.id}
              className="bg-[#1f1f3a] hover:bg-[#2e2e52] transition-all duration-300 p-6 rounded-2xl shadow-xl border border-[#333348]"
            >
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-sm text-gray-400 mb-4">{blog.summary}</p>
              <span className="text-xs text-gray-500">{new Date(blog.published_at).toLocaleDateString()}</span>
            </Link>
          ))}
        </div>
      )}

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-in-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
