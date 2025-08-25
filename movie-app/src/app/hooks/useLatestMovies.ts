'use client';
import { useState, useEffect } from 'react';
import { fetchLatestMovies } from '../utils/tmdb';


interface Movie {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  
}

export default function useLatestMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadLatest() {
      try {
        const data = await fetchLatestMovies();
        setMovies(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err));
        }
      } finally {
        setLoading(false);
      }
    }
    loadLatest();
  }, []);

  return { movies, loading, error };
}
