import { createContext, useReducer } from "react";
import { createAction } from "../utils/create-action/create-action.utils";

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

  const updatedCartItems = cartItems.filter(
    (cartItem) => cartItem.id !== itemToClear.id
  );
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

export const INITIAL_STATE = {
  cartDropdown: false,
  cartCount: 0,
  checkoutPrice: 0,
  cartItems: [],
};

export const CART_ACTION_TYPE = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_DROPDOWN: "SET_CART_DROPDOWN",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      }
      case CART_ACTION_TYPE.SET_CART_DROPDOWN:
        return {
          ...state,
          cartDropdown: payload,
        }

    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

//This provider provides context for managing the shopping cart state-
export const CartProvider = ({ children }) => {
  // State for managing the visibility of the cart dropdown


  const [{ checkoutPrice, cartDropdown, cartCount, cartItems }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const setCartDropdown = (bool) => {
    dispatch(createAction(CART_ACTION_TYPE.SET_CART_DROPDOWN, bool));
  }

  const updateCartItemsReducer = (newCartItems) => {
    
    const newCartCountNumber = newCartItems.reduce(
      (accumulator, item) => accumulator + item.quantity,
      0
    );

    const newCheckoutPrice = newCartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    dispatch(createAction(CART_ACTION_TYPE.SET_CART_ITEMS, {cartItems :newCartItems, cartCount: newCartCountNumber, checkoutPrice: newCheckoutPrice  } ));
  };

  // Function to add an item to the cart
  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  // Function to increment the quantity of an item in the cart
  const incrementItem = (productToAdd) => {
    const newCartItems = incrementCheckoutItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  // Function to decrement the quantity of an item in the cart
  const decrementItem = (productToRemove) => {
    const newCartItems = decrementCheckoutItem(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  };

  // Function to remove an item from the cart
  const removeItem = (itemToClear) => {
    const newCartItems = removeCheckoutItem(cartItems, itemToClear);
    updateCartItemsReducer(newCartItems);
  };

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
