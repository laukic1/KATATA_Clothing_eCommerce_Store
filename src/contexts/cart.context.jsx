import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const foundItem = cartItems.find((item) => {
    return item.id === productToAdd.id;
  });
  // if found, increment quantity
  if (foundItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // return new array with modified cartItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const incrementCheckoutItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const foundItem = cartItems.find((item) => {
    return item.id === productToAdd.id;
  });
  
  // if found, increment quantity
  if (foundItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // return new array with modified cartItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decrementCheckoutItem = (cartItems, productToRemove) => {
  const updatedCartItems = cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );

  return updatedCartItems.filter((cartItem) => cartItem.quantity > 0);
};


const removeCheckoutItem = (cartItems, itemToClear) => {
  // find if cartItems contains productToAdd
  const foundItem = cartItems.find((item) => {
    return item.id === itemToClear.id;
  });

  const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== itemToClear.id);
  // if found, increment quantity
  
  if (foundItem) {
    return updatedCartItems.map((cartItem) =>
      cartItem.id === itemToClear.id
        ? { ...cartItem, quantity: cartItem.quantity === 0 }
        : cartItem
    );
  }
  // return new array with modified cartItems/ new cart item
  return [...cartItems, { ...itemToClear, quantity: 0 }];
};

export const CartContext = createContext({
  cartDropdown: false,
  setCartDropdown: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  checkoutPrice: 0,
  decrementItem: () => {},
  removeItem: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartDropdown, setCartDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [checkoutPrice, setCheckoutPrice] = useState(0);

  useEffect(() => {
    const cartCountNumber = () =>
      cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0);
    setCartCount(cartCountNumber);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const incrementItem = (productToAdd) => {
    setCartItems(incrementCheckoutItem(cartItems, productToAdd));
  };

  const decrementItem = (productToRemove) => {
    setCartItems(decrementCheckoutItem(cartItems, productToRemove));
  };

  const removeItem = (itemToClear) => {
    setCartItems(removeCheckoutItem(cartItems, itemToClear));
  };

  
  useEffect(() => {
    const totalPrice = () =>
      cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setCheckoutPrice(totalPrice);
  }, [cartItems]);

  
  const value = {
    removeItem,
    decrementItem,
    incrementItem,
    checkoutPrice,
    cartCount,
    cartDropdown,
    setCartDropdown,
    addItemToCart,
    cartItems,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
