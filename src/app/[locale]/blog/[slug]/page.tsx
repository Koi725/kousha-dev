'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import axios from 'axios';
import Image from 'next/image';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  image: string;
  published_at: string;
}

export default function BlogDetailPage() {
  const { slug } = useParams();
  const t = useTranslations('BlogDetail');
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_BASE}/api/v1/blogposts/?slug=${slug}`)
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setBlog(res.data[0]);
        } else {
          setBlog(null);
        }
      })
      .catch((err) => console.error('Blog fetch error:', err))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-black text-white text-lg animate-pulse">
        {t('loading')}...
      </section>
    );
  }

  if (!blog) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-black text-red-500 text-xl">
        {t('not_found')}
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-[#0e0e26] to-black text-white px-6 py-24">
      <div className="max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="text-6xl leading-tight font-extrabold mb-10 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 text-transparent bg-clip-text">
          {blog.title}
        </h1>

        <p className="text-sm text-gray-400 mb-6 italic">
          {new Date(blog.published_at).toLocaleDateString()}
        </p>

        {blog.image && (
          <div className="w-full max-w-4xl mx-auto mb-12 overflow-hidden rounded-xl border border-[#2c2c45] shadow-[0_0_40px_#2c2c45] transform transition duration-500 hover:scale-[1.01] hover:rotate-[0.3deg]">
            <Image
              src={blog.image.startsWith('http') ? blog.image : `${API_BASE}${blog.image}`}
              alt={blog.title}
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        )}

        <article className="prose prose-invert max-w-none text-lg leading-relaxed tracking-wide selection:bg-indigo-600 selection:text-white">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </article>
      </div>

      <style jsx>{`
        .animate-fade-in-up {
          animation: fadeInUp 1.2s ease-out both;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.98) rotateX(10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0);
          }
        }
      `}</style>
    </section>
  );
}
