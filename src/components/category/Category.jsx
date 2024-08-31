import { useNavigate } from "react-router-dom";
import '../../App.css'

// category
const category = [
  {
    image: "/assets/category/category-handbag.webp",
    name: "HandBags",
  },
  {
    image: "/assets/category/category-watches.webp",
    name: "Watches",
  },
  {
    image: "/assets/category/category-jacket.webp",
    name: "Jackets",
  },
  {
    image: "/assets/category/category-shoes.webp",
    name: "Shoes",
  },
  {
    image: "/assets/category/category-jeans.webp",
    name: "Jeans",
  },
  {
    image: "/assets/category/category-shirt.webp",
    name: "Shirts",
  },   
];

const Category = () => {

  // navigate
  const navigate = useNavigate();

  return (
    <>
      <section>
        <div className="container">
        <h3 className="text-center mb-4">Top Categories</h3>
          <div className="row">
            {category.map((item, index) => {
              return (
                <div onClick={() => navigate(`/category/${item.name}`)} key={index} className="col-4 col-md-1">
                  <div className="wrapper_categories text-center cursor-pointer">
                    <img src={item.image} alt="categories-img" width="100" height="100" className="img-fluid custom-shadow rounded-pill" loading="lazy" />
                    <h5 className="mt-3">{item.name}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
