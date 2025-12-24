import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import ItemProduct from '@components/ContentSideBar/components/itemProduct/ItemProduct';
import styles from './styles.module.scss'
import { PiShoppingCartLight } from 'react-icons/pi';
import Button from '@components/Button/Button';

function Cart() {
    const {container,total,boxBtn} =styles
    return (
        <div className={container}>
            <div>
                <HeaderSideBar
                    icon={<PiShoppingCartLight style={{ fontSize: '30px' }} title='CART'/>}
                />
                <ItemProduct/>
            </div>
            <div>
                <div className={total}>
                    <p>Subtotal: </p>
                    <p>$199.99 </p>
                </div>
                <div className={boxBtn}>
                    <Button content={'VIEW CART'}/>
                    <Button content={'CHECKOUT'} isPrimary={false}/>
                </div>
            </div>
        </div>
    );
}

export default Cart;
