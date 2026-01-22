import { deleteItem } from '@/apis/cartService';
import styles from './styles.module.scss';
import { IoMdClose } from 'react-icons/io';
import { useContext, useState } from 'react';
import { sideBarContext } from '@/contexts/SideBarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

function ItemProduct({
    src,
    nameProduct,
    priceProduct,
    skuProduct,
    sizeProduct,
    quantity,
    productId,
    userId
}) {
    const {
        container,
        boxContent,
        title,
        des,
        boxClose,
        price,
        Size,
        overlayLoading
    } = styles;
    const [isDelete, setIsDelete] = useState(false);
    const { handleGetListProductCarts } = useContext(sideBarContext);

    const handleRemoveItem = () => {
        setIsDelete(true);
        deleteItem({ productId, userId })
            .then((res) => {
                setIsDelete(false);
                handleGetListProductCarts(userId, 'cart');
            })
            .catch((err) => {
                console.log(err);
                setIsDelete(false);
            });
    };

    return (
        <div className={container}>
            <img src={src} alt='' />
            <div className={boxClose} onClick={handleRemoveItem}>
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
                <div className={price}>
                    {quantity} x {priceProduct}
                </div>
                <div className={des}>{skuProduct}</div>
            </div>
            {isDelete && (
                <div className={overlayLoading}>
                    <LoadingTextCommon />
                </div>
            )}
        </div>
    );
}

export default ItemProduct;
