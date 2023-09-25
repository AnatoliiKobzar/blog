'use client';

// import BlocCard from '@components/cards/BlogCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([
    {
      title: 'Введение в Next.js',
      subheading: 'Основные концепции и преимущества',
      image: 'https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png',
      tag: 'Next.js',
    },
    {
      title: 'Изучение React.js',
      subheading: 'Основы и преимущества библиотеки React',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
      tag: 'React.js',
    },
  ]);
  const [selectedTag, setSelectedTag] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios.get('/api/posts');
        setPosts(data.data);
      } catch (error) {
        setError('Error fetching posts');
      }
    }
  }, []);

  if (posts?.length === 0) {
    return <div className="text-center">No posts found...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-3xl mt-10">
        <img src="#" alt="error" className="w-96" />
      </div>
    );
  }

  return (
    <main className="min-h-screen lg:p:20">
      <div className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-10 flex flex-col justify-center items-center uppercase tracking-widest h-96">
        <h2 className="text-5xl border-b-4 pb-3 font-bold">Keba Web Dev Blog</h2>
        <p className="text-lg mt-10">Like, share and subscribe for more content!</p>
      </div>
      <h3 className="flex flex-wrap mt-10 gap-4">{[...new Set(posts?.map(post => post.tag))]}</h3>
    </main>
  );
}
