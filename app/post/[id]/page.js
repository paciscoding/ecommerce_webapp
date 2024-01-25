async function getData(id) {
  const link = 'http://shop-woo.local/wp-json/wp/v2/posts/' + id

  const res = await fetch(link)

  // The return value is not serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest error.js Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Page({params}) {
  const data = await getData(params.id)
  console.log("safasfas: " + data.id)
  return (
      data.content.rendered
  );
}