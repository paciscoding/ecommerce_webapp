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

export default async function Home() {
  const data = await getData()
  return (
    <div>
    <ul>
      {data.map((post, index) => (
        <li key={post.id}>
          <a href={`/post/${post.id}`}> {post.title.rendered} {index}</a>
        </li>
      ))}
    </ul>
    </div>
  );
}