import { useState } from 'react';
import '../styles/Home.css'

import {Link, useNavigate} from 'react-router-dom'

import fakeProdcuts  from "../helpers/FakeProduct.json";
import HorizontalCard from './HorizontalCard';


const Home = () => {
const router = useNavigate();

const [products] = useState(fakeProdcuts);

    return (
        <>
            
            <div className={'main'}>
                <div className={'containerBannerHome'}>
                    <div className={'ctaBanner'}>
                        <h1>The nature candle</h1>
                        <p>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </p>
                        <button className={'btnCta'}
                            onClick={() => router('/products')}
                        >Discovery our collection</button>
                    </div>
                </div>
                <div className={'productsHome'}>
                    <h2>Products</h2>
                    <p>Order it for you or for your beloved ones</p>
                    <div className={'products'}>
                        {products && products.length ?
                            <>
                                {
                                    products.map(product => (
                                        <HorizontalCard
                                            key={product.id}
                                            productID={product.id}
                                            productName={product.productName}
                                            img={product.productImage}
                                            price={product.productPrice}
                                        />


                                    ))
                                }
                                <Link
                                    to={'/products'}
                                    className={'seeMoreProducts'}
                                >See more</Link>
                            </>
                            : 'Loading products...'
                        }

                    </div>
                </div>
            </div >
        </>
    )
}

export default Home;
