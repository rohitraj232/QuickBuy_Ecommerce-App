import { useNavigate } from "react-router-dom";
import '../../App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// category
const category = [
  {
    image: "/assets/products/handbag/handbag1.jpg",
    name: "Handbag",
  },
  {
    image: "/assets/products/sony-watch2.png",
    name: "Smartwatch",
  },
  // {
  //   image: "/assets/category/category-jacket.webp",
  //   name: "Jacket",
  // },
  {
    image: "/assets/products/shoes/1.jpg",
    name: "Shoe",
  },
  // {
  //   image: "/assets/category/category-jeans.webp",
  //   name: "Jean",
  // },
  // {
  //   image: "/assets/products/shirts/shirt3.jpg",
  //   name: "Shirt",
  // },
  {
    image: "/assets/products/shirts/shirt3.jpg",
    name: "Fashion",
  },
  {
    image: "/assets/products/jbl-headphone.png",
    name: "Headphone",
  },
  {
    image: "/assets/products/lenovo-airbud.png",
    name: "Earbuds",
  },
  {
    image: "/assets/products/speaker.webp",
    name: "Speaker",
  }
];

const Category = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 4,
          infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          initialSlide: 6
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      }
    ]
  };

  // navigate
  const navigate = useNavigate();

  return (
    <>
      <section className="my-5">
        <div className="container">
          <h3 className="text-center mb-4">Top Categories</h3>
          <Slider {...settings}>
            {category.map((item, index) => {
              return (
                <div onClick={() => navigate(`/category/${item.name}`)} key={index} className="px-2 ">
                  <div className="wrapper_categories custom-category-hover cursor-pointer">
                    <div className="custom-category-hover-img">
                      <img src={item.image} alt="categories-img" width="100" height="100" className="img-fluid mx-md-3 my-2 border border-1 bg-muted custm-shadow rounded-pill" loading="lazy" />
                    </div>
                    <h5 className="mt-3 font-15 text-center">{item.name}</h5>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Category;
