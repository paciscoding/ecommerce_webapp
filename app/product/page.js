// my url is: http://shop-woo.local/wp-json/wp/v2/posts/1
'use client'

import Link from 'next/link'
import {useState, useEffect} from 'react'

async function getData() {
  const res = await fetch('http://shop-woo.local/wp-json/itsc/v1/products')
  // The return value is not serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest error.js Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default function Page() {
  /* 
  const [posts, setPosts] = useState([]);
  const initPosts = async () => {
    const posts = await getData();
    setPosts(posts);
    console.log(posts);
  };
  
  console.log("before useEffect");
  useEffect(() =>  {
    initPosts();
  });
  console.log("after useEffect");
  
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
  
  */
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('http://shop-woo.local/wp-json/itsc/v1/products')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
 
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  // const data = await getData()
  return (
    <div>
      <h1> Product Lists </h1>

      {data.map((post, index) => (
      <li key={post.ID}>
        <Link href={`/product/${post.ID}`}> NO.{index} | {post.title} | {post.id}</Link>
      </li>
    ))}
    </div>
  );
}