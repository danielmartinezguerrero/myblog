import { Link } from 'react-router-dom';
import type { Post } from '../types/Post';

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      <div className="post-card__categories">
        {post.categories.map((pc) => (
          <span key={pc.category.id}>{pc.category.name}</span>
        ))}
      </div>
      <Link to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.excerpt}</p>
      <footer>
        <span>{post.author.name}</span>
        <time dateTime={post.createdAt}>
          {new Date(post.createdAt).toLocaleDateString()}
        </time>
      </footer>
    </article>
  );
}

export default PostCard;