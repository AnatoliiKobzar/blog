'use client';

import BlocCard from '@components/cards/BlogCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);
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
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-10 flex justify-center items-center">
        <span className="text-5xl border-b-3 pb-3 font-bold">Keba Web Dev Blog</span>
      </h2>
    </main>
  );
}
