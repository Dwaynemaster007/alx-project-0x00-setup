import React from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const Landing: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>
      <div className="flex flex-col gap-4">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="mt-6 flex flex-wrap gap-4">
        <Button title="Small Rounded" styles="px-2 py-1 bg-blue-500 rounded-sm" />
        <Button title="Medium Rounded" styles="px-4 py-2 bg-blue-500 rounded-md" />
        <Button title="Large Full Rounded" styles="px-6 py-3 bg-blue-500 rounded-full" />
        <Button title="Small Full Rounded" styles="px-2 py-1 bg-blue-500 rounded-full" />
        <Button title="Medium Small Rounded" styles="px-4 py-2 bg-blue-500 rounded-sm" />
        <Button title="Large Medium Rounded" styles="px-6 py-3 bg-blue-500 rounded-md" />
      </div>
    </div>
  );
};

export default Landing;