import styles from './styles.module.scss';
import { IoMdClose } from 'react-icons/io';

function ItemProduct({
    src,
    nameProduct,
    priceProduct,
    skuProduct,
    sizeProduct,quantity
}) {
    const { container, boxContent, title, des, boxClose, price,Size } = styles;

    return (
        <div className={container}>
            <img
                src={src}
                alt=''
            />
            <div className={boxClose}>
                <IoMdClose
                    style={{
                        fontSize: '20px',
                        color: 'c1c1c1'
                    }}
                />
            </div>
            <div className={boxContent}>
                <div className={title}>{nameProduct}</div>
                <div className={Size}>Size: {sizeProduct}</div>
                <div className={price}>{quantity} x {priceProduct}</div>
                <div className={des}>{skuProduct}</div>
            </div>
        </div>
    );
}

export default ItemProduct;
