import {useNavigate} from 'react-router-dom'
import '../styles/HorizontalCard.css';


import productPlaceholder from '../../public/product-placeholder.webp';

const HorizontalCard = ({ productName, price, img, productID }) => {


    const router = useNavigate();

    return (
        <div
            className='container-horizontal-card'
            onClick={() => router(`/products/${productID}`)}>
            <div className="container-photo">
                <img
                    src={img ? img : productPlaceholder}
                    alt={`${productName ? productName : 'Unnamed product'}´s image.`}
                    width={50}
                    height={50}
                />

            </div>
            <div className="container-info-product">
                <p>{productName}</p>
                <p>${price}</p>
            </div>
        </div>
    );
}

export default HorizontalCard;
