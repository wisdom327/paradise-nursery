import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [page, setPage] = useState('landing');

  return (
    <Provider store={store}>
      <div className="App">

        {page === 'landing' && (
          <div className="landing-page">
            <div className="landing-overlay"></div>
            <div className="landing-content">
              <h1>🌿 Paradise Nursery</h1>
              <p>Where Green Meets Serenity</p>
              <button
                className="get-started-btn"
                onClick={() => setPage('products')}
              >
                Get Started
              </button>
            </div>
          </div>
        )}

        {page === 'products' && (
          <ProductList
            onCartClick={() => setPage('cart')}
            onHomeClick={() => setPage('landing')}
            onAboutClick={() => setPage('about')}
          />
        )}

        {page === 'cart' && (
          <CartItem
            onContinueShopping={() => setPage('products')}
            onHomeClick={() => setPage('landing')}
            onAboutClick={() => setPage('about')}
          />
        )}

        {page === 'about' && (
          <div>
            <nav style={{
              display: 'flex', justifyContent: 'space-between',
              padding: '16px 32px', background: '#2d6a2d', color: 'white'
            }}>
              <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
                🌿 Paradise Nursery
              </span>
              <div style={{ display: 'flex', gap: '20px' }}>
                <button onClick={() => setPage('landing')}
                  style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1rem' }}>
                  Home
                </button>
                <button onClick={() => setPage('products')}
                  style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1rem' }}>
                  Plants
                </button>
              </div>
            </nav>
            <AboutUs />
          </div>
        )}

      </div>
    </Provider>
  );
}

export default App;