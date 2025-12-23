import HeaderSideBar from '../components/HeaderSideBar/HeaderSideBar';
import ItemProduct from '../components/itemProduct/ItemProduct';
import styles from './styles.module.scss';
import { TfiReload } from 'react-icons/tfi';

function Compare() {
    const {container} = styles
    return ( <div className={container}>
        <HeaderSideBar icon={<TfiReload style={{fontSize : '30px'}}/>} title={'COMPARE'}/>
        <ItemProduct/>
    </div> );
}

export default Compare;