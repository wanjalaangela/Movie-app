

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_API_BASE_URL;

export async function fetchLatestMovies() {
  const response = await fetch(
    `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  );
  if (!response.ok) throw new Error('Failed to fetch latest movies');
  const data = await response.json();
  return data.results;
}

export async function fetchMovieDetails(id: string) {
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  if (!response.ok) throw new Error('Failed to fetch movie details');
  return response.json();
}

export async function fetchMovieCast(id: string) {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  if (!response.ok) throw new Error('Failed to fetch movie cast');
  const data = await response.json();
  return data.cast;
}

export async function fetchRecommendations(id: string) {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
  );
  if (!response.ok) throw new Error('Failed to fetch movie recommendations');
  const data = await response.json();
  return data.results;
}

export async function searchMovies(query: string) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1&include_adult=false`
  );
  if (!response.ok) throw new Error('Failed to search movies');
  const data = await response.json();
  return data.results;
}
