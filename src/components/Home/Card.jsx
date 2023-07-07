import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

export default function Card( props ) {
  return (
    <motion.div className="card"
        initial={ {y: '100vh', opacity: 0} }
        animate={ {y: 0, opacity: 1} }
        transition={{duration: 1.3}}
    >
      <div className="cardImage">
        <img
          src={ props.image }
          alt={ props.name }
        />
      </div>
      <div className="chipType">{ props.chip }</div>
      <div className="model">{ props.name }</div>
      <div className="price">From ${ props.price }</div>
      <div className="actions">
        <button 
            className="buy"
            onClick={ props.addToCart }
        >Buy</button>
        <Link to="/">Learn more</Link>
      </div>
    </motion.div>
  );
}
