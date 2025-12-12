import { useEffect, useState } from "react";
import fetchData from "../fetchDatas";
import Product from "./Product";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      setProducts(data);
    });
  }, []);
  console.log(products);

  return (
    <div className="products-box">
      {products?.map((product, index) => {
        return <Product key={index} product={product} index={index} />;
      })}
    </div>
  );
};

export default Products;
