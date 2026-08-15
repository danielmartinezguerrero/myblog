import { useParams } from 'react-router-dom';

function PostDetail() {
  const { id } = useParams();

  return (
    <main>
      <h1>Post detail (id: {id})</h1>
      <p>Full post content will go here.</p>
    </main>
  );
}

export default PostDetail;