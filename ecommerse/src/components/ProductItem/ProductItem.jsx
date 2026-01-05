import styles from './styles.module.scss';
import reload from '@icons/svgs/reload-icon.svg';
import heart from '@icons/svgs/heart-icon.svg';
import cart from '@icons/svgs/cart-icon.svg';
import classNames from 'classnames';
import Button from '@components/Button/Button';
import { useContext, useEffect, useState } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';

function ProductItem({
    src,
    prevSrc,
    name,
    price,
    details,
    isHomepage = true
}) {
    const {
        boxImg,
        showImgWhenHover,
        showFncWhenHover,
        BoxIcon,
        title,
        priceCl,
        BoxSize,
        size,
        textCenter,
        boxBtn,
        content,
        containerItem,
        leftBtn,
        largeImg,
        isActive,
        btnClear
    } = styles;

    const ourShopStore = useContext(OurShopContext);
    const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
    const [sizeChoose, setSizeChoose] = useState('');

    const handleChooseSize = (size) => {
        setSizeChoose(size);
    };

    const handleClearSize = () => {
        setSizeChoose('');
    };

    useEffect(() => {
        if (isHomepage) {
            setIsShowGrid(true);
        } else {
            setIsShowGrid(ourShopStore?.isShowGrid);
        }
    }, [isHomepage, ourShopStore?.isShowGrid]);

    return (
        <div className={isShowGrid ? '' : containerItem}>
            <div
                className={classNames(boxImg, {
                    [largeImg]: !isShowGrid
                })}
            >
                <img src={src} alt='' />
                <img src={prevSrc} alt='' className={showImgWhenHover} />

                <div className={showFncWhenHover}>
                    <div className={BoxIcon}>
                        <img src={reload} alt='' />
                    </div>
                    <div className={BoxIcon}>
                        <img src={heart} alt='' />
                    </div>
                    <div className={BoxIcon}>
                        <img src={cart} alt='' />
                    </div>
                    <div className={BoxIcon}>
                        <img src={heart} alt='' />
                    </div>
                </div>
            </div>

            <div className={isShowGrid ? '' : content}>
                {!isHomepage && (
                    <div className={BoxSize}>
                        {details.size.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={classNames(size, {
                                        [isActive]: sizeChoose === item.name
                                    })}
                                    onClick={() => handleChooseSize(item.name)}
                                >
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                )}

                {sizeChoose && (
                    <div className={btnClear} onClick={() => handleClearSize()}>
                        Clear
                    </div>
                )}

                <div
                    className={classNames(title, {
                        [textCenter]: !isHomepage
                    })}
                >
                    {name}
                </div>

                {!isHomepage && (
                    <div className={textCenter} style={{ color: '#c1c1c1' }}>
                        Brand 01
                    </div>
                )}
                <div
                    className={classNames(priceCl, {
                        [textCenter]: !isHomepage
                    })}
                    style={{
                        color: isHomepage ? '#333' : '#888'
                    }}
                >
                    ${price}
                </div>

                {!isHomepage && (
                    <div
                        className={classNames(boxBtn, {
                            [leftBtn]: !isShowGrid
                        })}
                    >
                        <Button content={'ADD TO CART'} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
