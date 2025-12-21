import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import Info from '@components/Info/info';
import Advanheadling from '@components/AdvanceHeadling/AdvanceHeadling';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import { useEffect, useState } from 'react';
import { getProducts } from '@/apis/productsService';
import PopularProduct from '@components/PopularProduct/PopularProduct';

function HomePage() {
    const { container } = styles;
    const [listProducts, setListProducts] = useState([]);
    useEffect(() => {
        getProducts().then((res) => {
            setListProducts(res.contents);
        });
    }, []);

    console.log(listProducts);
    return (
        <>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info />
                <Advanheadling />
                <HeadingListProduct data={listProducts.slice(0,2)} />
                <PopularProduct data={listProducts.slice(2,listProducts.length)}/>
                <div style={{ height: '200px' }}></div>
            </div>
        </>
    );
}

export default HomePage;
