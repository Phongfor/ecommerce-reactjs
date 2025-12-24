import Button from '@components/Button/Button';
import HeaderSideBar from '../components/HeaderSideBar/HeaderSideBar';
import ItemProduct from '../components/itemProduct/ItemProduct';
import styles from './styles.module.scss';
import { CiHeart } from 'react-icons/ci';

function WhistList() {
    const { container,boxBtn } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar
                    content={<CiHeart style={{ fontSize: '30px' }} />}
                    title={'WHIST LIST'}
                />
                <ItemProduct />
            </div>
            <div className={boxBtn}>
                <Button content={'VIEW WHISTLIST'}/>
                <Button content={'ADD ALL CART'} isPrimary={false}/>
            </div>
        </div>
    );
}

export default WhistList;
