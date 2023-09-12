import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
  const { name, quantity, imageUrl } = item;

  return (
    <div className="cart-item-container">
      <img className="cart-img" src={imageUrl} alt={`${name}`} />
      <h3 className="name">{name}</h3>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
