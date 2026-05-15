import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

const plants = [
  {
    category: "Air Purifying Plants",
    items: [
      { name: "Snake Plant", price: 15.00, description: "Easy to care for, purifies air.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Single_leaf_of_Sansevieria_trifasciata_%27Laurentii%27.jpg/440px-Single_leaf_of_Sansevieria_trifasciata_%27Laurentii%27.jpg" },
      { name: "Spider Plant", price: 12.00, description: "Great for beginners, removes toxins.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chlorophytum_comosum_0001.jpg/440px-Chlorophytum_comosum_0001.jpg" },
      { name: "Peace Lily", price: 18.00, description: "Beautiful white flowers, cleans air.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Spathiphyllum_cochlearispathum_RTBG.jpg/440px-Spathiphyllum_cochlearispathum_RTBG.jpg" },
      { name: "Boston Fern", price: 14.00, description: "Lush green fronds, removes pollutants.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Nephrolepis_exaltata_'Bostoniensis'_kz.jpg/440px-Nephrolepis_exaltata_'Bostoniensis'_kz.jpg" },
      { name: "Bamboo Palm", price: 22.00, description: "Tropical look, excellent air purifier.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Chamaedorea_seifrizii.jpg/440px-Chamaedorea_seifrizii.jpg" },
      { name: "Rubber Plant", price: 19.00, description: "Bold leaves, filters indoor toxins.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Ficus_elastica_26175.jpg/440px-Ficus_elastica_26175.jpg" },
    ]
  },
  {
    category: "Succulents",
    items: [
      { name: "Aloe Vera", price: 10.00, description: "Medicinal plant, easy to grow.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Aloe_vera_flower_inset.png/440px-Aloe_vera_flower_inset.png" },
      { name: "Echeveria", price: 8.00, description: "Rosette shaped, colorful succulent.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Echeveria_purpusorum.jpg/440px-Echeveria_purpusorum.jpg" },
      { name: "Jade Plant", price: 14.00, description: "Symbol of good luck and prosperity.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Crassula_ovata.jpg/440px-Crassula_ovata.jpg" },
      { name: "Haworthia", price: 9.00, description: "Small, striking, low maintenance.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Haworthia_attenuata_b.jpg/440px-Haworthia_attenuata_b.jpg" },
      { name: "Sedum", price: 7.00, description: "Drought tolerant, variety of colors.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Sedum_spurium.jpg/440px-Sedum_spurium.jpg" },
      { name: "Agave", price: 16.00, description: "Bold architectural succulent.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Agave_americana_2.jpg/440px-Agave_americana_2.jpg" },
    ]
  },
  {
    category: "Tropical Plants",
    items: [
      { name: "Monstera", price: 25.00, description: "Iconic split leaves, tropical vibes.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Monstera_deliciosa_cropped.jpg/440px-Monstera_deliciosa_cropped.jpg" },
      { name: "Bird of Paradise", price: 30.00, description: "Stunning orange flowers.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Strelitzia_reginae_Kew_Gardens.jpg/440px-Strelitzia_reginae_Kew_Gardens.jpg" },
      { name: "Hibiscus", price: 20.00, description: "Vibrant tropical flowering plant.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Hibiscus_rosa-sinensis.jpg/440px-Hibiscus_rosa-sinensis.jpg" },
      { name: "Anthurium", price: 23.00, description: "Waxy red flowers, exotic look.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Anthurium_andraeanum.jpg/440px-Anthurium_andraeanum.jpg" },
      { name: "Bromeliad", price: 17.00, description: "Colorful, dramatic tropical plant.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Guzmania_lingulata.jpg/440px-Guzmania_lingulata.jpg" },
      { name: "Heliconia", price: 28.00, description: "Lobster claw shaped tropical blooms.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Heliconia_rostrata.jpg/440px-Heliconia_rostrata.jpg" },
    ]
  },
];

function ProductList({ onCartClick, onHomeClick, onAboutClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const isAdded = (name) => cartItems.some(item => item.name === name);

  return (
    <div className="product-list-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">🌿 Paradise Nursery</div>
        <div className="navbar-links">
          <button onClick={onHomeClick}>Home</button>
          <button onClick={onAboutClick}>About Us</button>
          <button className="active">Plants</button>
        </div>
        <button className="cart-btn" onClick={onCartClick}>
          🛒 Cart ({totalQuantity})
        </button>
      </nav>

      {/* Plant Categories */}
      {plants.map((category) => (
        <div key={category.category} className="category-section">
          <h2 className="category-title">{category.category}</h2>
          <div className="plants-grid">
            {category.items.map((plant) => (
              <div key={plant.name} className="plant-card">
                <img src={plant.image} alt={plant.name} className="plant-image" />
                <div className="plant-info">
                  <h3>{plant.name}</h3>
                  <p className="plant-description">{plant.description}</p>
                  <p className="plant-price">${plant.price.toFixed(2)}</p>
                  <button
                    className={`add-btn ${isAdded(plant.name) ? 'added' : ''}`}
                    onClick={() => dispatch(addItem(plant))}
                    disabled={isAdded(plant.name)}
                  >
                    {isAdded(plant.name) ? '✓ Added' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
