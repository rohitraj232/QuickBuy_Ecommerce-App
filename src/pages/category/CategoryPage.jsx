import { useNavigate, useParams } from "react-router-dom"
import Layout from "../../components/layout/Layout"
import { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const CategoryPage = () => {

    const { categoryname } = useParams();
    const context = useContext(myContext);
    const { loading, getAllProduct } = context;
    const navigate = useNavigate();

    // filter product
    const filterProduct = getAllProduct.filter((obj) => obj.category.includes(categoryname));

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
            <div>
                <div className="container">
                    <h3 className="text-center"> {categoryname} </h3>

                    {loading ?
                        <div>
                            <Loader />
                        </div>

                        :

                        <div className="wrapper_productCards">
                            <div className="row">
                                {filterProduct.length > 0 ?
                                    <>
                                        {filterProduct.map((item, index) => {
                                            const { id, title, price, productImageUrl } = item;
                                            return (
                                                <div key={index} className="col-12 col-md-4 col-lg-3">
                                                    <div className="wrapper_product">
                                                        <img src={productImageUrl} onClick={() => navigate(`/productInfo/${id}`)} alt="" className="img-fluid" />
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
                                    </>

                                    :

                                    <div>
                                        <p>no {categoryname} product found </p>
                                    </div>
                                }


                            </div>
                        </div>

                    }



                </div>
            </div>
        </Layout>
    )
}

export default CategoryPage
