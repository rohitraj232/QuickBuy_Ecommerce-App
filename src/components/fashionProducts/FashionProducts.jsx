import React, { useContext } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import myContext from '../../context/myContext';
import { useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import Loader from '../loader/Loader';


const FashionProducts = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    // fetching data from context
    const context = useContext(myContext);
    const { loading, getAllProduct } = context;
    const navigate = useNavigate();

    // filtering only shoe category
    const filterShoes = getAllProduct.filter((obj) => obj.category.includes("Fashion"));

  return (
    <>
    <section className='my-5'>
                <div className="container">
                    <div className="wrapper_topSelling-shoes mt-5 mb-4">
                        <h2 class="fw-semibold text-center">Top Fashion Collections</h2>
                    </div>

                    <div>
                        {loading && <Loader />}
                    </div>

                    <Slider {...settings}>
                        {filterShoes.map((item, index) => {
                            const { id, title, price, productImageUrl } = item;
                            return (
                                <div key={index} className='px-2'>
                                    <div className="wrapper_topselling-shoes-details border border-1 shadow-sm rounded-3 position-relative">
                                        <img src={productImageUrl} onClick={() => navigate(`/productInfo/${id}`)} alt="top selling shoe image" className='cursor-pointer rounded-3 img-fluid' loading='lazy' />
                                        <div className="sub-wrapper_topselling-shoes-details p-2">
                                            <div className="wrapper_stars d-flex">
                                                <p className='me-1 mb-1'><FaStar className='text-warning' /></p>
                                                <p className='me-1 mb-1'><FaStar className='text-warning' /></p>
                                                <p className='me-1 mb-1'><FaStar className='text-warning' /></p>
                                                <p className='me-1 mb-1'><FaStar className='text-warning' /></p>
                                                <p className='me-1 mb-1'><FaStar className='text-warning' /></p>
                                            </div>
                                            <p className="fw-semibold mb-1 text-muted"></p>
                                            <h5 className='font-15 fw-semibold cursor-pointer' onClick={() => navigate(`/productInfo/${id}`)}>{title.substring(0, 28) + "..."}</h5>
                                            <h6 className="text-primary fw-bold"> ₹  {price}</h6>
                                        </div>
                                        <div className='position-absolute top-0'>
                                            <div className="mt-2 mx-2 rounded-2 bg-purple position-relative">
                                                <p className="font-13 text-white fw-semibold py-1 px-2">New Arrival</p>
                                            </div>
                                            <div className="triangle-path"></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>

            </section>
      
    </>
  )
}

export default FashionProducts
