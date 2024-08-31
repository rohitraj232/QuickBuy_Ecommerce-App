import { useContext, useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/myContext'
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';
import Loader from '../../components/loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../../redux/cartSlice';
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import "../../App.css";

const ProductInfo = () => {

  // getting context
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const [product, setProduct] = useState('');
  const { id } = useParams();

  // get product data
  const getProductData = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, 'product', id));
      setProduct({ ...productTemp.data(), id: productTemp.id });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // add to cart function
  const addCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Add to cart")
  }

  // delete function
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete cart")
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <Layout>
      <div className="container my-5">
        {
          loading ?
            <>
              <div>
                <Loader />
              </div>
            </>

            :

            <div className="row">
              <div className="col-12 col-md-6">
                <img src={product?.productImageUrl} alt="productimg" width="500" height="500" className='img-fluid mx-auto d-block rounded-3 mb-3' />
              </div>
              <div className="col-12 col-md-6">
                <h2 className='mb-3'> {product?.title} </h2>
                <div className="highlight mb-3">
                  <p className='mb-1'><FaCheckCircle className='text-success' /> In Stock </p>
                  <p className='mb-1'><FaCheckCircle className='text-success' /> Free Delivery Available </p>
                  <p className='mb-1'><FaCheckCircle className='text-success' /> Sales 30% Off Use Code: <span className='fw-semibold'>QUICKBUY30 </span> </p>
                </div>
                <h5 className='text-primary'> ₹ {product?.price} </h5>
                <h6 className='fs-5'>Description :</h6>
                <p className='text-justify'>
                  {product?.description}
                </p>
                <div>
                  {cartItems.some((p) => p.id === product.id)
                    ?
                    <button onClick={() => deleteCart(product)} type="button" class="btn btn-primary mt-3">
                      Delete from Cart <MdDelete />
                    </button>
                    :
                    <button onClick={() => addCart(product)} type="button" class="btn btn-primary mt-3 w-100">
                      Add to Cart <FaShoppingCart />
                    </button>
                  }
                </div>
              </div>
            </div>

        }

      </div>
    </Layout>
  )
}

export default ProductInfo
