import React from 'react';

function AboutUs() {
  return (
    <div style={{
      padding: '60px 40px',
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#2d6a2d', fontSize: '2.5rem', marginBottom: '20px' }}>
        About Paradise Nursery
      </h1>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444', marginBottom: '20px' }}>
        Welcome to Paradise Nursery, where green meets serenity. We are passionate 
        about bringing the beauty of nature into your home and garden.
      </p>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444', marginBottom: '20px' }}>
        Founded in 2024, Paradise Nursery offers a wide selection of houseplants, 
        succulents, air-purifying plants, and tropical species carefully curated 
        for plant lovers of all experience levels.
      </p>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444' }}>
        Our mission is simple: to make plant ownership accessible, joyful, and 
        rewarding for everyone. Whether you are a seasoned gardener or just starting 
        your plant journey, we are here to help you grow.
      </p>
    </div>
  );
}

export default AboutUs;