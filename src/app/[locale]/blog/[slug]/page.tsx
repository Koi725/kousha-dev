// src/app/[locale]/blog/[slug]/page.tsx
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
    <section className="min-h-screen bg-gradient-to-b from-black via-[#0e0e26] to-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 text-transparent bg-clip-text">
          {blog.title}
        </h1>

        <p className="text-sm text-gray-400 mb-4">
          {new Date(blog.published_at).toLocaleDateString()}
        </p>

        {blog.image && (
          <div className="w-full h-80 relative mb-8 rounded-xl overflow-hidden shadow-2xl border border-[#2c2c45]">
            <Image
              src={blog.image}
              alt={blog.title}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              priority
            />
          </div>
        )}

        <article className="prose prose-invert max-w-none text-lg leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </article>
      </div>

      <style jsx>{`
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-in-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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