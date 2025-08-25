'use client';
import { useState, useEffect } from 'react';
import { fetchLatestMovies } from '../utils/tmdb';

export default function useLatestMovies() {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadLatest() {
      try {
        const data = await fetchLatestMovies();
        setMovies(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    loadLatest();
  }, []);

  return { movies, loading, error };
}
