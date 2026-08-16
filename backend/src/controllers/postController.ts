import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export async function getAllPosts(req: Request, res: Response) {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: { id: true, name: true },
        },
        categories: {
          include: { category: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
}

export async function getPostById(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid post id' });
    }

    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        author: {
          select: { id: true, name: true },
        },
        categories: {
          include: { category: true },
        },
      },
    });

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ error: 'Failed to fetch post' });
  }
}

export async function createPost(req: Request, res: Response) {
  try {
    const { title, content, excerpt } = req.body;

    if (!req.user) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    if (!title || !content || !excerpt) {
      return res.status(400).json({
        error: 'Missing required fields: title, content, excerpt',
      });
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        excerpt,
        authorId: req.user.userId,
      },
    });

    res.status(201).json(post);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Failed to create post' });
  }
}