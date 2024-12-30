import React from 'react';


// Define the Card component
const Cards = ({ title, content, imageUrl }) => {
  return (
    
    <div className="card" style={styles.card}>
      {imageUrl && <img src={imageUrl} alt={title} style={styles.image} />}
      <div className="card-body" style={styles.cardBody}>
        <h5 className="card-title" style={styles.title}>{title}</h5>
        <p className="card-text" style={styles.text}>{content}</p>
      </div>
    </div>
    
  );
};
const styles = {
    card: {
      width: '18rem',
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    image: {
      width: '100%',
      height: 'auto',
    },
    cardBody: {
      padding: '15px',
    },
    title: {
      marginBottom: '10px',
      fontSize: '1.25rem',
    },
    text: {
      fontSize: '1rem',
      color: '#555',
    },
  };
  
  export default Cards;