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
                <img src={product?.productImageUrl} alt="" width="500" height="500" className='img-fluid' />
              </div>
              <div className="col-12 col-md-6">
                <h1>Product name: {product?.title}</h1>
                <p>stars: *****</p>
                <h5>Rs. {product?.price}</h5>
                <h6>Description :</h6>
                <p>
                  {product?.description}
                </p>
                <div>
                  {cartItems.some((p) => p.id === product.id)
                    ?
                    <button onClick={() => deleteCart(product)} className="mt-2">
                      Delete from Cart
                    </button>
                    :
                    <button onClick={() => addCart(product)} className="mt-2">
                      Add to cart
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
