'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header(): JSX.Element {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`You searched for ${search}`);
  };

  return (
    <header className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">
        <div className="text-yellow-500 font-bold text-2xl">Moovie</div>
        <form onSubmit={handleSearchSubmit} className="flex flex-grow mx-8 max-w-xl">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow rounded-l-md px-4 py-2 text-black"
            value={search}
            onChange={handleSearchChange}
            aria-label="Search movies"
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 rounded-r-md px-4 font-semibold"
          >
            Search
          </button>
        </form>
        <nav className="flex items-center space-x-8">
          <Link href="/" className="text-yellow-500 font-semibold underline">
            Home
          </Link>
          <Link href="/my-list" className="hover:text-yellow-500">
            My list
          </Link>
          <Link
            href="/sign-in"
            className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600"
          >
            Sign in
          </Link>
        </nav>
      </div>
    </header>
  );
}
