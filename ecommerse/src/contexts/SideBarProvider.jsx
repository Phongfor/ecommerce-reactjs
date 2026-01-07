import { createContext, useState } from 'react';
import { getCart } from '@/apis/cartService';

export const sideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState('');
    const [listProductCart, setListProductCart] = useState([]);

    const handleGetListProductCarts = (userId, type) => {
        if (userId && type === 'cart') {
            getCart(userId)
                .then((res) => {
                    setListProductCart(res.data.data);
                })
                .catch((err) => {
                    setListProductCart([]);
                });
        }
    };

    const values = {
        isOpen,
        setIsOpen,
        type,
        setType,
        listProductCart,
        handleGetListProductCarts
    };

    return (
        <sideBarContext.Provider value={values}>
            {children}
        </sideBarContext.Provider>
    );
};
