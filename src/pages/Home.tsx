import { useState } from 'react';
import CommunityCard from '../components/CommunityCard';

const SAMPLE_COMMUNITIES = [
  {
    id: '1',
    name: 'Photography Enthusiasts',
    description: 'A community for sharing photography tips and showcasing your best shots',
    category: 'Arts',
    members: 1234,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
    createdAt: new Date(),
  },
  {
    id: '2',
    name: 'Cooking Masters',
    description: 'Share recipes, cooking techniques, and food photography',
    category: 'Food',
    members: 2345,
    image: 'https://images.unsplash.com/photo-1556910633-5099dc3b3e3c',
    createdAt: new Date(),
  },
  {
    id: '3',
    name: 'Fitness Journey',
    description: 'Support and motivation for your fitness goals',
    category: 'Health',
    members: 3456,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
    createdAt: new Date(),
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Find Your Community
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Connect with people who share your interests
          </p>
        </div>

        <div className="mt-8 max-w-xl mx-auto">
          <div className="flex gap-x-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search communities..."
              className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SAMPLE_COMMUNITIES.map((community) => (
            <CommunityCard key={community.id} community={community} />
          ))}
        </div>
      </div>
    </div>
  );
}