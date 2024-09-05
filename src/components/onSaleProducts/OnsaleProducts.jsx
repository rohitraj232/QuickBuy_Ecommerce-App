import React, { useContext } from 'react'
import myContext from '../../context/myContext'
import { useNavigate } from 'react-router-dom';
import '../../App.css'

const OnsaleProducts = () => {

    // navigate
    const navigate = useNavigate();

    // getAllProduct from the context
    const context = useContext(myContext);
    const { getAllProduct } = context;

    return (
        <>
            <section>
                <div className="container">
                    <div className="wrapper_onSaleProducts my-5">
                        <div className="row">

                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="wrapper_featured-products">
                                    <h5 className='mb-3 pb-3 border-bottom position-relative section-title'>Featured Products</h5>
                                    {getAllProduct.slice(0, 5).map((item, index) => {
                                        const { productImageUrl, title, category, price, id } = item;
                                        return (
                                            <div key={index} onClick={() => navigate(`/productInfo/${id}`)} className="featured-products d-flex align-items-center cursor-pointer mb-3 border border-1 p-2 rounded-3 wrapper_product">
                                                <div className="featured-products_img wrapper_product-img">
                                                    <img src={productImageUrl} width="80" alt="product-img" className='img-fluid bg-muted rounded-2' loading='lazy' />
                                                </div>
                                                <div className="featured-products_details ms-2">
                                                    <p className="fw-semibold mb-1 text-muted font-13">{category}</p>
                                                    <h5 className='font-15'>{title.substring(0, 28) + "..."}</h5>
                                                    <h6 className="text-primary font-13 fw-semibold"> ₹  {price}</h6>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="wrapper_onSale-products">
                                    <h5 className='mb-3 pb-3 border-bottom position-relative section-title'>On Sale Products</h5>
                                    {getAllProduct.slice(5, 10).map((item, index) => {
                                        const { productImageUrl, title, category, price, id } = item;
                                        return (
                                            <div key={index} onClick={() => navigate(`/productInfo/${id}`)} className="featured-products d-flex align-items-center cursor-pointer mb-3 border border-1 p-2 rounded-3 wrapper_product">
                                                <div className="featured-products_img wrapper_product-img">
                                                    <img src={productImageUrl} width="80" alt="product-img" className='img-fluid bg-muted rounded-2' loading='lazy' />
                                                </div>
                                                <div className="featured-products_details ms-2">
                                                    <p className="fw-semibold mb-1 text-muted font-13">{category}</p>
                                                    <h5 className='font-15'>{title.substring(0, 28) + "..."}</h5>
                                                    <h6 className="text-primary font-13 fw-semibold"> ₹  {price}</h6>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>


                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="wrapper_topRated-products">
                                    <h5 className='mb-3 pb-3 border-bottom position-relative section-title'>Top Rated Products</h5>
                                    {getAllProduct.slice(10, 15).map((item, index) => {
                                        const { productImageUrl, title, category, price, id } = item;
                                        return (
                                            <div key={index} onClick={() => navigate(`productInfo/${id}`)} className="featured-products d-flex align-items-center cursor-pointer mb-3 border border-1 p-2 rounded-3 wrapper_product">
                                                <div className="featured-products_img wrapper_product-img">
                                                    <img src={productImageUrl} width="80" alt="product-img" className='img-fluid bg-muted rounded-2' loading='lazy' />
                                                </div>
                                                <div className="featured-products_details ms-2">
                                                    <p className="fw-semibold mb-1 text-muted font-13">{category}</p>
                                                    <h5 className='font-15'>{title.substring(0, 28) + "..."}</h5>
                                                    <h6 className="text-primary font-13 fw-semibold"> ₹  {price}</h6>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OnsaleProducts
