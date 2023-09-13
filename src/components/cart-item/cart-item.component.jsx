import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
  const { name, quantity, price, imageUrl } = item;

  return (quantity >= 1 &&
    <div className="cart-item-container">
      <img className="cart-img" src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x €{price}</span>
      </div>
    </div>
  );
};

export default CartItem;
