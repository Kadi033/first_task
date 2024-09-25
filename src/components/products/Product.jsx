import PropTypes from "prop-types";

function Product({ image, title, description, onAddToCart }) {
  return (
    <>
      <div className="product">
        <img src={image} alt={title} className="product-image" />
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <button className="product-button" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </>
  );
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default Product;
