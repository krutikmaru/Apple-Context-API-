import './Home.css'
import Card from './Card';
import { useContext } from 'react';
import MacbookContext from '../../contexts/Macbook';
import { motion } from 'framer-motion';

export default function Home() {
    const { macbookData, cart, setCart } = useContext( MacbookContext );

    const addToCart = macbook => {
        if ( cart.includes( macbook ) ) {
            return;
        } else {
            setCart( prevState => [ ...prevState, macbook] )
        }
    }

    return (
        <motion.div id="main"
            exit={{
                x: '-200vh',
                transition: {
                    ease: 'easeInOut',
                    duration: 0.3
                }
            }}
        >
            <motion.div id="title"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
            >
                <h1>MacBook Air</h1>
            </motion.div>
            <div id="items">
                { macbookData.map( (macbook, index) => {
                    return <Card 
                        key={ index }
                        name={macbook.name}
                        chip={macbook.chip}
                        price={macbook.price}
                        image={macbook.image}
                        addToCart={ () => addToCart( macbook ) }
                    />
                } ) }
            </div>
        </motion.div>
    )
}