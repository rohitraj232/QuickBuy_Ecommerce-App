import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import '../../App.css'

// productData
const productData = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
    title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 150,
    trendingProductName: "Featured",
    quantity: 1,
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
    title: "Kaushalam kalash Copper Pot",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 120,
    trendingProductName: "Featured",
    quantity: 1,
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
    title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 130,
    trendingProductName: "Featured",
    quantity: 1,
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
    title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 120,
    trendingProductName: "Featured",
    quantity: 1,
  },
  {
    id: 1,
    image:
      "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
    title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 150,
    trendingProductName: "Featured",
    quantity: 1,
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
    title: "Kaushalam kalash Copper Pot",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 120,
    trendingProductName: "Featured",
    quantity: 1,
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
    title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 130,
    trendingProductName: "Featured",
    quantity: 1,
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
    title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 120,
    trendingProductName: "Featured",
    quantity: 1,
  },
];

const HomePageProductCard = () => {
  const navigate = useNavigate();

  const context = useContext(myContext);
  const { loading, getAllProduct } = context;

  // from redux-toolkit
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // add to cart function
  const addCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Added to Cart");
  }

  // delete from cart function
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete Cart")
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      <section>
        <div className="container my-5">
          <div className="mb-4">
            <h2 className="fw-semibold text-center">Bestselling Products</h2>
            <div>
              {loading && <Loader />}
            </div>
          </div>
          <div className="wrapper_productCards">
            <div className="row">
              {getAllProduct.slice(0, 8).map((item, index) => {
                const { id, title, price, productImageUrl, category } = item;
                return (
                  <div key={index} className="col-12 col-md-4 col-lg-3">
                    <div className="wrapper_product border border-1 rounded-3 mb-4 cursor-pointer">
                      <div className="wrapper_product-img">
                        <img src={productImageUrl} onClick={() => navigate(`/productInfo/${id}`)} alt="product" loading="lazy" className="img-fluid b-t-r" />
                      </div>
                      <div className="wrapper-item-details p-3">
                        <p className="fw-semibold mb-1 text-muted">{category}</p>
                        <h5>{title.substring(0, 19) + "..."}</h5>
                        <h6 className="text-primary"> ₹  {price}</h6>
                        <div>
                          {cartItems.some((p) => p.id === item.id)
                            ?
                            <button onClick={() => deleteCart(item)} type="button" class="btn btn-primary mt-3 w-100">
                              Delete from Cart <MdDelete />
                            </button>
                            :
                            <button onClick={() => addCart(item)} type="button" class="btn btn-primary mt-3 w-100">
                              Add to Cart <FaShoppingCart />
                            </button>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePageProductCard;
