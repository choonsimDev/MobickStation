import { useEffect, useState } from 'react';

function communityPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('/api/post');
      const data = await response.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Community Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default communityPost;
