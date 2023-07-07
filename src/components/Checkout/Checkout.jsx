import "./Checkout.css";
import Item from "./Item";
import { useContext } from "react";
import MacbookContext from "../../contexts/Macbook";
import { motion } from "framer-motion";

export default function Checkout() {
  const { cart, setCart } = useContext( MacbookContext );

  const removeFromCart = macbook => {
    const newCart = cart.filter( item => item !== macbook );
    setCart( newCart );
  }

  const checkOutVariants = {
    hidden: {
      opacity: 0,
      x: "100vw"
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
        type: 'spring'
      }
    },
    exit: {
      x: '-200vh',
      transition: {
        ease: 'easeInOut',
        duration: 0.3
      }
    }
  }

  if ( cart.length === 0 ) {
    return (
      <motion.div id="empty"
        variants={ checkOutVariants }
        initial="hidden"
        animate="visible" 
        exit="exit"
      >
        <div id="emptyCartImage">
          <img src="https://cdn-icons-png.flaticon.com/512/4555/4555971.png" alt="Cart is empty" />
        </div>
        <div id="message">
          <h2>You currently have no items in your cart</h2>
        </div>
      </motion.div>
    );
  }

  return (
    <>
      <motion.div 
        id="orderContainer"
        variants={ checkOutVariants }
        initial="hidden"
        animate="visible"
      >
        { cart.map( ( macbook, index ) => {
            return <Item 
                key={ index }
                name={macbook.name}
                chip={macbook.chip}
                price={macbook.price}
                image={macbook.image}
                removeFromCart={ () => removeFromCart( macbook ) }
            />
        }) }
  
      </motion.div>
      <motion.div id="final"
        initial={{
          y: 0,
          x: 0,
          opacity: 0
        }}
        animate={{
          y: 0,
          x: '-50%',
          opacity: 1
        }}
      >
        <h1>Total: ${ cart.reduce( (acc, curr) => {
            acc += curr.price;
            return acc;
        }, 0 ) }</h1>
      </motion.div>
    </>
  );
}
