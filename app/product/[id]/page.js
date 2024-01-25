async function getData(id) {
  const link = 'http://shop-woo.local/wp-json/itsc/v1/products' + id

  console.log(link)
  const res = await fetch('http://shop-woo.local/wp-json/itsc/v1/products/' + id)
  // The return value is not serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest error.js Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Page({params}) {
  // console.log("_-------------------------")
  const data = await getData(params.id)
  console.log("safasfas: " + data.id)
  return (
    <div>
      {
      data.title
    }
    </div>
  );
}