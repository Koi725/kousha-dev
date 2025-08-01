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
    <section className="min-h-screen flex flex-col items-center px-6 py-20 bg-gradient-to-b from-black via-[#0e0e26] to-black text-white">
      <h1 className="text-6xl font-extrabold mb-12 mt-8 py-4 leading-tight animate-fade-in bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-xl">
        {t('my_blogs')}
      </h1>

      {loading ? (
        <p className="text-gray-400 text-lg animate-pulse">{t('blogs.loading') || 'Loading...'}</p>
      ) : blogs.length === 0 ? (
        <p className="text-gray-400 text-lg animate-fade-in">{t('blogs.no_blogs')}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl animate-fade-in-up" dir="ltr">
          {blogs.map((blog) => (
            <Link
              href={`/blog/${blog.slug}`}
              key={blog.id}
              className="group bg-[#13131f] rounded-3xl border border-[#2c2c45] p-6 shadow-2xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-purple-900/40 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-purple-500 via-indigo-400 to-pink-500 blur-xl z-0"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-all duration-300">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">{blog.slug}</p>
                <span className="text-xs text-gray-500">{new Date(blog.published_at).toLocaleDateString()}</span>
              </div>
            </Link>
          ))}
        </div>
      )}

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-in-out forwards;
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
