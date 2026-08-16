export interface Author {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface PostCategory {
  category: Category;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  createdAt: string;
  authorId: number;
  author: Author;
  categories: PostCategory[];
}