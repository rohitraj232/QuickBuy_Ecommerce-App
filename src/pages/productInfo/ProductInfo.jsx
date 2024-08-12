import { useContext, useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/myContext'
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';
import Loader from '../../components/loader/Loader';

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
      setProduct(productTemp.data());
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

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
                <button type='btn' className='btn btn-primary'>Add to cart</button>
              </div>
            </div>

        }

      </div>
    </Layout>
  )
}

export default ProductInfo
