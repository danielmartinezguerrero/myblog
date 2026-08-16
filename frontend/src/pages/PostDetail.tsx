import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPostById } from '../api/posts';
import type { Post } from '../types/Post';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPost() {
      if (!id) {
        setError('No post id provided');
        setLoading(false);
        return;
      }

      const numericId = Number(id);

      if (isNaN(numericId)) {
        setError('Invalid post id');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await fetchPostById(numericId);
        setPost(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [id]);

  if (loading) {
    return <p>Loading post...</p>;
  }

  if (error) {
    return (
      <main>
        <p>Error: {error}</p>
        <Link to="/">Back to home</Link>
      </main>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <main>
      <Link to="/">Back to home</Link>
      <article>
        <div className="post-detail__categories">
          {post.categories.map((pc) => (
            <span key={pc.category.id}>{pc.category.name}</span>
          ))}
        </div>
        <h1>{post.title}</h1>
        <div className="post-detail__meta">
          <span>{post.author.name}</span>
          <time dateTime={post.createdAt}>
            {new Date(post.createdAt).toLocaleDateString()}
          </time>
        </div>
        <div className="post-detail__content">{post.content}</div>
      </article>
    </main>
  );
}

export default PostDetail;