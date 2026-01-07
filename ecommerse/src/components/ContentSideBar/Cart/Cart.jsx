import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import ItemProduct from '@components/ContentSideBar/components/itemProduct/ItemProduct';
import styles from './styles.module.scss';
import { PiShoppingCartLight } from 'react-icons/pi';
import Button from '@components/Button/Button';
import { useContext } from 'react';
import { sideBarContext } from '@/contexts/SideBarProvider';

function Cart() {
    const { container, total, boxBtn } = styles;
    const { listProductCart } = useContext(sideBarContext);
    console.log(listProductCart);
    return (
        <div className={container}>
            <div>
                <HeaderSideBar
                    icon={
                        <PiShoppingCartLight
                            style={{ fontSize: '30px' }}
                            title='CART'
                        />
                    }
                />
                {listProductCart.map((item, index) => {
                    return (
                        <ItemProduct
                            key={index}
                            src={item.images[0]}
                            nameProduct={item.name}
                            priceProduct={item.price}
                            skuProduct={item.sku}
                            sizeProduct={item.size}
                            quantity={item.quantity}
                        />
                    );
                })}
            </div>
            <div>
                <div className={total}>
                    <p>Subtotal: </p>
                    <p>$199.99 </p>
                </div>
                <div className={boxBtn}>
                    <Button content={'VIEW CART'} />
                    <Button content={'CHECKOUT'} isPrimary={false} />
                </div>
            </div>
        </div>
    );
}

export default Cart;
