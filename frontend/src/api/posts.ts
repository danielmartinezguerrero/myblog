import type { Post } from '../types/Post';

const API_URL = import.meta.env.VITE_API_URL;

export async function fetchPosts(): Promise<Post[]> {
  const response = await fetch(`${API_URL}/posts`);

  if (!response.ok) {
    throw new Error(`Failed to fetch posts (${response.status})`);
  }

  return response.json();
}

export async function fetchPostById(id: number): Promise<Post> {
  const response = await fetch(`${API_URL}/posts/${id}`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('404. Post not found');
    }
    throw new Error(`Failed to fetch post (${response.status})`);
  }

  return response.json();
}

export async function createPost(data: {
  title: string;
  content: string;
  excerpt: string;
  authorId: number;
}): Promise<Post> {
  const response = await fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to create post (${response.status})`);
  }

  return response.json();
}