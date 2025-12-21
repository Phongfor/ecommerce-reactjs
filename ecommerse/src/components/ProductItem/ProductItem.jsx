import styles from './styles.module.scss';
import reload from '@icons/svgs/reload-icon.svg';
import heart from '@icons/svgs/heart-icon.svg';
import cart from '@icons/svgs/cart-icon.svg';
import BoxIcon from '@components/Header/BoxIcon/BoxIcon';

function ProductItem({src,prevSrc,name,price}) {
    const { boxImg, showImgWhenHover,showFncWhenHover ,BoxIcon,title,priceCl} = styles;
    return (
        <div>
            <div className={boxImg}>
                <img
                    src={src}
                    alt=''
                />
                <img
                    src={prevSrc}
                    alt=''
                    className={showImgWhenHover}
                />

                <div className={showFncWhenHover}>
                    <div className={BoxIcon}>
                        <img src={reload} alt=""  />
                    </div>
                    <div className={BoxIcon}>
                        <img src={heart} alt=""  />
                    </div>
                    <div className={BoxIcon}>
                        <img src={cart} alt=""  />
                    </div>
                    <div className={BoxIcon}>
                        <img src={heart} alt=""  />
                    </div>
                </div>
            </div>

            <div className={title}>{name}</div>
            <div className={priceCl}>${price}</div>
        </div>
    );
}

export default ProductItem;
