const Product = ({ product, index }) => {
  return (
    <div className="product-cart">
      <div className="product-cart-image">
        <img src={product.image} alt="" />
      </div>
      <h4>{product.title}</h4>
      <div className="product-cart-price">
        <h4>${product.price}</h4>
        <button>ADD TO CART</button>
      </div>
    </div>
  );
};

export default Product;
