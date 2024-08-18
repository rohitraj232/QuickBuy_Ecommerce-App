import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

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

const AllProduct = () => {
    // navigate
    const navigate = useNavigate();

    // get loading & getAllProduct from the context
    const context = useContext(myContext);
    const { loading, getAllProduct } = context;

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    // add to cart function
    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Add to cart")
    }

    // delete to cart function
    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Delete Cart")
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <Layout>
            <section className="my-5">
                <div className="container">
                    <div className="">
                        <p className="text-center">All Products</p>
                        <div>
                            {loading && <Loader />}
                        </div>
                    </div>
                    <div className="wrapper_productCards">
                        <div className="row">
                            {getAllProduct.map((item, index) => {
                                const { id, title, price, productImageUrl } = item;
                                return (
                                    <div key={index} className="col-12 col-md-4 col-lg-3">
                                        <div className="wrapper_product">
                                            <img
                                                src={productImageUrl}
                                                onClick={() => navigate(`/productInfo/${id}`)}
                                                alt=""
                                                className="img-fluid"
                                            />
                                            <p>QuickBuy</p>
                                            <h5>{title.substring(0, 20)}</h5>
                                            <h4>Rs {price}</h4>
                                            <div>
                                                {cartItems.some((p) => p.id === item.id)
                                                    ?
                                                    <button onClick={() => deleteCart(item)} className="mt-2">
                                                        Delete from Cart
                                                    </button>
                                                    :
                                                    <button onClick={() => addCart(item)} className="mt-2">
                                                        Add to cart
                                                    </button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default AllProduct;
