
export default async function fetchData() {
 const res = fetch("https://fakestoreapi.com/products");
 return (await res).json();
}
