export interface User {
  id: string;
  username: string;
  name: string;
  bio: string;
  avatar: string;
  interests: string[];
  location: string;
  joinDate: Date;
}

export interface Community {
  id: string;
  name: string;
  description: string;
  category: string;
  members: number;
  image: string;
  createdAt: Date;
}

export interface Post {
  id: string;
  userId: string;
  content: string;
  media?: string;
  likes: number;
  comments: number;
  createdAt: Date;
}