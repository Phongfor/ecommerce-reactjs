import styles from './styles.module.scss';
import classNames from 'classnames';
import Button from '@components/Button/Button';
import { useContext, useEffect, useState } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import Cookies from 'js-cookie';
import { ToastContext } from '@/contexts/ToastProvider';
import { sideBarContext } from '@/contexts/SideBarProvider';
import { addProductToCart } from '@/apis/cartService';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import { CiHeart } from 'react-icons/ci';
import { LiaEyeSolid, LiaShoppingBagSolid } from 'react-icons/lia';
import { TfiReload } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';
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
    const [Loading, setIsLoading] = useState(false);
    const userId = Cookies.get('userId');
    const { setIsOpen, setType, handleGetListProductCarts, setDetailProduct } =
        useContext(sideBarContext);
    const { toast } = useContext(ToastContext);
    const navigate = useNavigate();

    const handleChooseSize = (size) => {
        setSizeChoose(size);
    };

    const handleClearSize = () => {
        setSizeChoose('');
    };

    const handleAddCart = () => {
        if (!userId) {
            setIsOpen(true);
            setType('login');
            toast.warning('Please login to add product to cart!');

            return;
        }
        if (!sizeChoose) {
            toast.warning(' Please choose size!');
            return;
        }

        const data = {
            userId,
            productId: details._id,
            quantity: 1,
            size: sizeChoose
        };
        setIsLoading(true);
        addProductToCart(data)
            .then((res) => {
                setIsOpen(true);
                setType('cart');
                toast.success('Add product to cart successfully!');
                setIsLoading(false);
                handleGetListProductCarts(userId, 'cart');
            })
            .catch((err) => {
                toast.error('Add product to cart failed!');
                setIsLoading(false);
            });
    };

    const handleNavigateToDetail = () => {
        const path = `/product/${details._id}`;

        navigate(path);
    };

    const handlleShowDetailProductSideBar = () => {
        setIsOpen(true);
        setType('detail');
        setDetailProduct(details);
    };

    useEffect(() => {
        if (isHomepage) {
            setIsShowGrid(true);
        } else {
            setIsShowGrid(ourShopStore?.isShowGrid);
        }
    }, [isHomepage, ourShopStore?.isShowGrid]);

    return (
        <div
            className={isShowGrid ? '' : containerItem}
            style={{ cursor: 'pointer' }}
        >
            <div
                className={classNames(boxImg, {
                    [largeImg]: !isShowGrid
                })}
                onClick={handleNavigateToDetail}
            >
                <img src={src} alt='' />
                <img src={prevSrc} alt='' className={showImgWhenHover} />

                <div className={showFncWhenHover}>
                    <div className={BoxIcon}>
                        <LiaShoppingBagSolid
                            style={{
                                fontSize: '20px'
                            }}
                        />
                    </div>
                    <div className={BoxIcon}>
                        <CiHeart
                            style={{
                                fontSize: '25px'
                            }}
                        />
                    </div>
                    <div className={BoxIcon}>
                        <TfiReload
                            style={{
                                fontSize: '20px'
                            }}
                        />
                    </div>
                    <div className={BoxIcon}>
                        <LiaEyeSolid
                            style={{
                                fontSize: '23px'
                            }}
                            onClick={handlleShowDetailProductSideBar}
                        />
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
                        <Button
                            content={
                                Loading ? <LoadingTextCommon /> : 'ADD TO CART'
                            }
                            onClick={handleAddCart}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
