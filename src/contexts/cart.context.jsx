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

//This provider provides context for managing the shopping cart state-
export const CartProvider = ({ children }) => {
  // State for managing the visibility of the cart dropdown
  const [cartDropdown, setCartDropdown] = useState(false);

  // State for managing cart items
  const [cartItems, setCartItems] = useState([]);

  // State for keeping track of the total number of items in the cart
  const [cartCount, setCartCount] = useState(0);
  
  // State for keeping track of the total checkout price
  const [checkoutPrice, setCheckoutPrice] = useState(0);

  // useEffect to update cartCOunt when cartItems change
  useEffect(() => {
    const cartCountNumber = () =>
      cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0);
    setCartCount(cartCountNumber);
  }, [cartItems]);

  // Function to add an item to the cart
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  // Function to increment the quantity of an item in the cart
  const incrementItem = (productToAdd) => {
    setCartItems(incrementCheckoutItem(cartItems, productToAdd));
  };

  // Function to decrement the quantity of an item in the cart
  const decrementItem = (productToRemove) => {
    setCartItems(decrementCheckoutItem(cartItems, productToRemove));
  };

  // Function to remove an item from the cart
  const removeItem = (itemToClear) => {
    setCartItems(removeCheckoutItem(cartItems, itemToClear));
  };

  // useEffect to update checkoutPrice when cartItems change
  useEffect(() => {
    const totalPrice = () =>
      cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setCheckoutPrice(totalPrice);
  }, [cartItems]);

  // Context value to be provided to other components
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
