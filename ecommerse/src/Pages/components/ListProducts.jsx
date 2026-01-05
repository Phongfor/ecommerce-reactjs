import MainLayout from '@components/Layout/Layout';
import { useContext } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from '../styles.module.scss';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Button from '@components/Button/Button';

function ListProducts() {
    const { containerProducts,sessionListProduct,rotate } = styles;
    const { products, isShowGrid, isLoading, handleLoadMore, total,isLoadMore } =
        useContext(OurShopContext);
    return (
        <div className={sessionListProduct}>
            <MainLayout>
                {isLoading ? (
                    <>LOADING......</>
                ) : (
                    <>
                        {' '}
                        <div className={isShowGrid ? containerProducts : ''}>
                            {products.map((product) => {
                                return (
                                    <ProductItem
                                        key={product.id}
                                        src={product.images[0]}
                                        prevSrc={product.images[1]}
                                        name={product.name}
                                        price={product.price}
                                        details={product}
                                        isHomepage={false}
                                    />
                                );
                            })}
                        </div>
                       
                        {products.length < total && (
                            <div
                                style={{ width: '180px', margin: '20px auto' }}
                            >
                                <Button
                                    content={isLoadMore ? <AiOutlineLoading3Quarters className={rotate}/> :'LOAD MORE PRODUCT'}
                                    onClick={handleLoadMore}
                                />
                            </div>
                        )}
                    </>
                )}
            </MainLayout>
        </div>
    );
}

export default ListProducts;
