import { mockPosts } from './data/mockPosts';
import PostCard from './components/PostCard';
import './App.css';

function App() {
  return (
    <main>
      <h1>Blog</h1>
      <div className="post-list">
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}

export default App;