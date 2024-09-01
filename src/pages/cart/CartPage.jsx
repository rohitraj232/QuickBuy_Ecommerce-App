import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";
import { decrementQuantity, deleteFromCart, incrementQuantity } from "../../redux/cartSlice";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import BuyNowModal from "../../components/buyNowModal/BuyNowModal";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import { Navigate } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const products = [
  {
    id: 1,
    name: "Nike Air Force 1 07 LV8",
    href: "#",
    price: "₹47,199",
    originalPrice: "₹48,900",
    discount: "5% Off",
    color: "Orange",
    size: "8 UK",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png",
  },
  {
    id: 2,
    name: "Nike Blazer Low 77 SE",
    href: "#",
    price: "₹1,549",
    originalPrice: "₹2,499",
    discount: "38% off",
    color: "White",
    leadTime: "3-4 weeks",
    size: "8 UK",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48d6035-bd8a-4747-9fa1-04ea596bb074/blazer-low-77-se-shoes-0w2HHV.png",
  },
  {
    id: 3,
    name: "Nike Air Max 90",
    href: "#",
    price: "₹2219 ",
    originalPrice: "₹999",
    discount: "78% off",
    color: "Black",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png",
  },
];

const CartPage = () => {

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // delete from cart function
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete Cart");
  }

  // increment quantity function
  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  // decrement quantity function
  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  }

  // cartItemTotal function
  const cartItemTotal = cartItems.map(item => item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);

  // cartTotal function
  const cartTotal = cartItems.map(item => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])


  // Buy Now Section starts here
  // user
  const user = JSON.parse(localStorage.getItem('users'));

  // address info state
  const [addressInfo, setAddressInfo] = useState({
    name: "",
    address: "",
    pincode: "",
    mobileNumber: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  });

  // Buy Now Function
  const buyNowFunction = () => {
    // validation
    if (addressInfo.name === "" || addressInfo.address === "" || addressInfo.pincode === "" || addressInfo.mobileNumber === "") {
      return toast.error("All fields are required")
    }


    // order info
    const orderInfo = {
      cartItems,
      addressInfo,
      email: user.email,
      userid: user.uid,
      status: "confirmed",
      time: Timestamp.now(),
      date: new Date().toLocaleString(
        "en-US",
        {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }
      )
    }

    try {
      const orderRef = collection(fireDB, 'order');
      addDoc(orderRef, orderInfo);
      setAddressInfo({
        name: "",
        address: "",
        pincode: "",
        mobileNumber: "",
      })
      toast.success("Order Placed Successfully")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <section>
        <div className="wrapper_cart">
          <div className="my-3 container">
            <div className="wrapper_cart-product-details ms-2 mt-2">
              <h4>My Cart</h4>
            </div>

            <div className="row">
              <div className="col-12 col-md-8">


                {cartItems.length > 0 ?
                  <>
                    {cartItems.map((item, index) => {
                      const { id, title, price, productImageUrl, quantity, category } = item;
                      return (
                        <div key={index} className="row my-3 border border-1 py-3 rounded-3 mx-2">
                          <div className="col-12">
                            <div className="row align-items-center">
                              <div className="col-4 col-lg-2">

                                <img src={productImageUrl} alt="product Image" width="100" />
                              </div>
                              <div className="col-8 col-lg-6">
                                <h4 className="mb-1 font-13">{category}</h4>
                                <h5 className="font-15">{title}</h5>
                                <p className="fw-bold text-success mb-0"> ₹ {price}</p>
                                <p className="mb-1 font-13 mb-0 fw-semibold">Quantity: {quantity}</p>
                              </div>
                              <div className="col-12 col-lg-3 mt-2 mt-lg-1">
                                <div className="d-flex mb-2">
                                  <button type="button" class="btn border border-1 rounded-0" onClick={() => handleDecrement(id)}><FaMinusCircle className="text-muted" /></button>
                                  <input type="text" value={quantity} className="w-50 border border-1 text-center" />
                                  <button type="button" class="btn border border-1 rounded-0" onClick={() => handleIncrement(id)}><FaPlusCircle className="text-muted" /></button>
                                </div>
                                <button type="button" class="btn btn-danger" onClick={() => deleteCart(item)}>Remove <MdDelete /></button>
                              </div>

                            </div>
                          </div>

                        </div>
                      );
                    })}
                  </>
                  :
                  <h5 className="text-center my-5">No product found, Please add any product....</h5>
                }

              </div>
              <div className="col-12 col-md-4">
                <div className="wrapper_total p-3 mt-3 border border-1 rounded-3">
                  <h4 className="mb-3">Price Details:</h4>
                  <div className="row">

                    <div className="col-6">
                      <p className="mb-0">Price ({cartItemTotal} items): </p>
                    </div>
                    <div className="col-6">
                      <p className="text-end text-success fw-bold mb-0">₹ {cartTotal}</p>
                    </div>

                    <div className="col-6">
                      <p className="mb-0">Delivery Charges: </p>
                    </div>
                    <div className="col-6">
                      <p className="text-end text-success mb-0">Free Delivery</p>
                    </div>

                    <div className="col-8">
                      <p>Secured Packaging Fee </p>
                    </div>
                    <div className="col-4">
                      <p className="text-end text-success fw-semibold"> ₹ 149</p>
                    </div>

                    <div className="col-6">
                      <p className="fw-semibold">Total Amount:</p>
                    </div>
                    <div className="col-6">
                      <p className="text-end text-success fw-bold"> ₹ {cartTotal + 149}</p>
                    </div>

                  </div>
                  {/* buy now modal btn */}
                  {user ?
                    <BuyNowModal
                      addressInfo={addressInfo}
                      setAddressInfo={setAddressInfo}
                      buyNowFunction={buyNowFunction}
                    />
                    :
                    <Navigate to={'/login'} />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CartPage;
