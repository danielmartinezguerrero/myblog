import type { Post } from '../types/Post';

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      <span className="post-card__category">{post.category}</span>
      <h1>{post.title}</h1>
      <p>{post.excerpt}</p>
      <footer>
        <span>{post.author}</span>
        <time dateTime={post.createdAt}>{post.createdAt}</time>
      </footer>
    </article>
  );
}

export default PostCard;