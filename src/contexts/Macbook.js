import { createContext, useState } from "react";

const MacbookContext = createContext();

const macbookData = [
    {
        name: 'MacBook Air',
        chip: 'M1 Chip',
        price: 1299,
        image: "https://www.apple.com/in/macbook-air/images/overview/hero_mba_m1__mfge6fbp7t2m_large.jpg"
    },
    {
        name: 'MacBook Pro',
        chip: 'M1 Max Chip',
        price: 2999,
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spacegray-select-202110?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1632788574000"
    },
    {
        name: 'MacBook Air',
        chip: 'M2 Chip',
        price: 2599,
        image: "https://www.apple.com/in/macbook-air/images/overview/hero_mba_m2__ejbs627dj7ee_large.jpg"
    }
]

export function MacbookProvider( { children } ) {
    const [ cart, setCart ] = useState([])
    return (
        <MacbookContext.Provider
            value={{
                macbookData,
                cart, 
                setCart
            }}
        >
            { children }
        </MacbookContext.Provider>
    )
}

export default MacbookContext;
