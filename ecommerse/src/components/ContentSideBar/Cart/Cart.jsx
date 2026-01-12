import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import ItemProduct from '@components/ContentSideBar/components/itemProduct/ItemProduct';
import styles from './styles.module.scss';
import { PiShoppingCartLight } from 'react-icons/pi';
import Button from '@components/Button/Button';
import { useContext } from 'react';
import { sideBarContext } from '@/contexts/SideBarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const {
        container,
        total,
        boxBtn,
        isEmpty,
        boxBtnEmpty,
        boxEmpty,
        containerListItem
    } = styles;
    const { listProductCart, isLoading, setIsOpen } =
        useContext(sideBarContext);
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/shop');
        setIsOpen(false);
    };

     const handleNavigateToCart = () => {
        navigate('/cart');
        setIsOpen(false);
    };

    const subtotal = listProductCart.reduce((acc, item) => {
        return acc + item.total;
    }, 0);

    return (
        <div
            className={classNames(container, {
                [isEmpty]: !listProductCart.length
            })}
        >
            <HeaderSideBar
                icon={<PiShoppingCartLight style={{ fontSize: '30px' }} />}
                title={'CART'}
            />

            {listProductCart.length ? (
                <div className={containerListItem}>
                    <div>
                        {isLoading ? (
                            <LoadingTextCommon />
                        ) : (
                            listProductCart.map((item, index) => {
                                return (
                                    <ItemProduct
                                        key={index}
                                        src={item.images[0]}
                                        nameProduct={item.name}
                                        priceProduct={item.price}
                                        skuProduct={item.sku}
                                        sizeProduct={item.size}
                                        quantity={item.quantity}
                                        productId={item.productId}
                                        userId={item.userId}
                                    />
                                );
                            })
                        )}
                    </div>

                    <div>
                        <div className={total}>
                            <p>Subtotal: </p>
                            <p>${subtotal} </p>
                        </div>
                        <div className={boxBtn}>
                            <Button content={'VIEW CART'}  onClick={handleNavigateToCart}/>
                            <Button content={'CHECKOUT'} isPrimary={false} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className={boxEmpty}>
                    <div>No products in the cart.</div>
                    <div className={boxBtnEmpty}>
                        <Button
                            content={'RETURN TO SHOP'}
                            onClick={handleNavigate}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
