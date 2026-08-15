import { mockPosts } from '../data/mockPosts';
import PostCard from '../components/PostCard';

function Home() {
  return (
    <main>
      <h1>Tutorial Blog</h1>
      <div className="post-list">
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}

export default Home;