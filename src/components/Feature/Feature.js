import React from 'react';
import './feature.css';
import featuresData from '../../Data/features.json'

const Feature = () => {
  return (
    <section className="features">
    <h2 className="sr-only">Features</h2>
    {featuresData.map((feature, index) => (
      <div key={index} className="feature-item">
        <img src={feature.imageSrc} alt={feature.altText} className="feature-icon" />
        <h3 className="feature-item-title">{feature.title}</h3>
        <p>{feature.content}</p>
      </div>
    ))}
  </section>
  );
};

export default Feature;
