import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <main className="flex flex-col min-h-[calc(100vh-49px)] justify-center items-center text-4xl font-semibold">
      <h1>Airbnb Application Clone system</h1>
      <Link href="/landing" className="border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-full">Get Started</Link>
    </main>
  );
};

export default Home;