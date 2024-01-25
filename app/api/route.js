export async function GET() {
    const res = await fetch('http://shop-woo.local/wp-json/itsc/v1/products/', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();
    return Response.json({data});
}