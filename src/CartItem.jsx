import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

function CartItem({ onContinueShopping, onHomeClick, onAboutClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.name));
    } else {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
  };

  const handleCheckout = () => {
    alert('Coming Soon! Thank you for shopping at Paradise Nursery 🌿');
  };

  return (
    <div className="cart-container">
      {/* Navbar */}
      <nav className="cart-navbar">
        <div className="navbar-brand">🌿 Paradise Nursery</div>
        <div className="navbar-links">
          <button onClick={onHomeClick}>Home</button>
          <button onClick={onAboutClick}>About Us</button>
          <button onClick={onContinueShopping}>Plants</button>
        </div>
        <div className="cart-total-nav">
          🛒 Total: ${totalCost.toFixed(2)}
        </div>
      </nav>

      <h2 className="cart-heading">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>🌱 Your cart is empty!</p>
          <button className="continue-btn" onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.name} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="unit-price">Unit Price: ${item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button onClick={() => handleDecrement(item)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrement(item)}>+</button>
                  </div>
                  <p className="item-subtotal">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    className="delete-btn"
                    onClick={() => dispatch(removeItem(item.name))}
                  >
                    🗑 Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            {cartItems.map(item => (
              <div key={item.name} className="summary-row">
                <span>{item.name} x{item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="summary-total">
              <span>Total Amount</span>
              <span>${totalCost.toFixed(2)}</span>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
            <button className="continue-btn" onClick={onContinueShopping}>
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItem;
