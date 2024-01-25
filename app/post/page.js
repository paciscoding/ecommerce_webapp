
'use client'
import { useState, useEffect } from "react";

// my url is: http://shop-woo.local/wp-json/wp/v2/posts/
async function getData() {
  const res = await fetch('http://shop-woo.local/wp-json/wp/v2/posts')
  // The return value is not serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest error.js Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default function Page({ params }) {
  // const data = await getData(params.id)
  const [posts, setPosts] = useState([]);

  const initPosts = async () => {
    const posts = await getData();
    setPosts(posts);
  };

  useEffect(() =>  {
    initPosts();
  }, []);
  
  return (

    <div>
      <h1>
        Hi
      </h1>
      {posts.map((post, index) => (
      <li key={post.id}>
        <a href={`/post/${post.id}`}> {post.title.rendered} NO.{index}</a>
      </li>
    ))}
    </div>
  );
}