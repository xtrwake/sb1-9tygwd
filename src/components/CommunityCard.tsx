import { Link } from 'react-router-dom';
import { Community } from '../types';

interface CommunityCardProps {
  community: Community;
}

export default function CommunityCard({ community }: CommunityCardProps) {
  return (
    <Link
      to={`/communities/${community.id}`}
      className="block rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
    >
      <img
        src={community.image}
        alt={community.name}
        className="h-48 w-full object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900">{community.name}</h3>
        <p className="mt-1 text-gray-500">{community.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">{community.members} members</span>
          <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
            {community.category}
          </span>
        </div>
      </div>
    </Link>
  );
}