import styles from './styles.module.scss';
import { IoMdClose } from "react-icons/io";

function ItemProduct() {
    const {container,boxContent,title,des,boxClose} = styles

    return (
        <div className={container}>
            <img
                src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.1-min.jpg'
                alt=''
            />
            <div className={boxClose}><IoMdClose style={{
                fontSize : '20px', color : 'c1c1c1'
            }}/></div>
            <div className={boxContent}>
                <div className={title}>Consectetur nibh at</div>
                <div className={price}>Size:M</div>
                <div className={des}>$119.99</div>
                <div className={des}>SKU:12349</div>
            </div>
        </div>
    );
}

export default ItemProduct;
