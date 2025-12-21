import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import Info from '@components/Info/info';
import Advanheadling from '@components/AdvanceHeadling/AdvanceHeadling';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import { useEffect, useState } from 'react';
import { getProducts } from '@/apis/productsService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import SaleHomePage from '@components/SaleHomePage/SaleHomePage';

function HomePage() {
    const [listProducts, setListProducts] = useState([]);
    useEffect(() => {
        getProducts().then((res) => {
            setListProducts(res.contents);
        });
    }, []);
    return (
        <>
            <div>
                <MyHeader />
                <Banner />
                <Info />
                <Advanheadling />
                <HeadingListProduct data={listProducts.slice(0,2)} />
                <PopularProduct data={listProducts.slice(2,listProducts.length -1)}/>
                <SaleHomePage/>
                <div style={{ height: '200px' }}></div>
            </div>
        </>
    );
}

export default HomePage;
