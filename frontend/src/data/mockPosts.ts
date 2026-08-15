import type { Post } from '../types/Post';

export const mockPosts: Post[] = [
  {
    id: 1,
    title: 'Introduction to TypeScript',
    excerpt: 'Why TypeScript will save you from silly bugs.',
    content: 'Full post content...',
    author: 'Ana Torres',
    category: 'TypeScript',
    createdAt: '2026-08-01',
  },
  {
    id: 2,
    title: 'React Hooks Explained',
    excerpt: 'useState, useEffect, and when to use them.',
    content: 'Full post content...',
    author: 'Carlos Ruiz',
    category: 'React',
    createdAt: '2026-08-05',
  },
  {
    id: 3,
    title: 'Modeling Data with Prisma',
    excerpt: 'How to design your schema for PostgreSQL.',
    content: 'Full post content...',
    author: 'Ana Torres',
    category: 'Backend',
    createdAt: '2026-08-10',
  },
];