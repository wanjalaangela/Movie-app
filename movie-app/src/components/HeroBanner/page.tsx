'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Movie {
  id: number;
  title: string;
  backdrop_path?: string;
  poster_path?: string;
  release_date?: string;
  overview: string;
}

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

export default function HeroBanner() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    async function fetchPopularMovies() {
      if (!TMDB_API_KEY) {
        console.error(
          'Missing TMDB API key in env variables (NEXT_PUBLIC_TMDB_API_KEY)'
        );
        return;
      }
      try {
        const response = await fetch(
          `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
        );
        const data = await response.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error('Failed to fetch movies from TMDB', error);
      }
    }
    fetchPopularMovies();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        movies.length ? (prev + 1) % movies.length : 0
      );
    }, 45000); 
    return () => clearInterval(interval);
  }, [movies]);

  if (!movies.length)
    return <div className="text-center py-20 text-white">Loading...</div>;

  const currentMovie = movies[currentIndex];

  return (
    <section className="relative w-screen h-[700px] overflow-hidden m-0 p-0">
      <Image
        src={`${TMDB_IMAGE_BASE_URL}${currentMovie.backdrop_path || currentMovie.poster_path}`}
        alt={currentMovie.title}
        fill
        className="object-cover opacity-90"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent p-8 flex flex-col justify-center h-full text-white max-w-4xl">
        <p className="text-sm mb-1">{currentMovie.release_date?.slice(0, 4)}</p>
        <h1 className="text-5xl font-extrabold mb-3">{currentMovie.title}</h1>
        <p className="mb-6 line-clamp-4">{currentMovie.overview}</p>
        <div className="flex space-x-4">
          <button className="bg-yellow-500 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition">
            Watch Now
          </button>
          <button className="border border-yellow-500 px-6 py-2 rounded font-semibold hover:bg-yellow-500 hover:text-black transition">
            Add To Favorites
          </button>
        </div>
      </div>
    </section>
  );
}
