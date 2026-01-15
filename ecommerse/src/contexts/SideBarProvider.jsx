import { createContext, useEffect, useState } from 'react';
import { getCart } from '@/apis/cartService';
import Cookies from 'js-cookie';

export const sideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState('');
    const [listProductCart, setListProductCart] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [detailProduct, setDetailProduct] = useState(null);
    const userId = Cookies.get('userId');

    const handleGetListProductCarts = (userId, type) => {
        setIsLoading(true);
        if (userId && type === 'cart') {
            getCart(userId)
                .then((res) => {
                    setListProductCart(res.data.data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    setListProductCart([]);
                    setIsLoading(false);
                });
        }
    };

    const values = {
        isOpen,
        setIsOpen,
        type,
        setType,
        listProductCart,
        handleGetListProductCarts,
        isLoading,
        setListProductCart,
        userId,
        setIsLoading,
        detailProduct,
        setDetailProduct
    };

    useEffect(() => {
        handleGetListProductCarts(userId, 'cart');
    }, []);

    return (
        <sideBarContext.Provider value={values}>
            {children}
        </sideBarContext.Provider>
    );
};
