import { useContext, useState, useEffect } from "react"
import myContext from "../../context/myContext"
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import Loader from "../../components/loader/Loader";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";


const categoryList = [
  {
    name: 'fashion'
  },
  {
    name: 'shirt'
  },
  {
    name: 'jacket'
  },
  {
    name: 'mobile'
  },
  {
    name: 'laptop'
  },
  {
    name: 'shoes'
  },
  {
    name: 'home'
  },
  {
    name: 'books'
  }
]



const UpdateProductPage = () => {

  const context = useContext(myContext);
  const { loading, setLoading, getAllProductFunction } = context;

  // navigate
  const navigate = useNavigate();
  const { id } = useParams();

  // product state
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
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


  // Get Single Product Function
  const getSingleProductFunction = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, 'product', id));
      const product = productTemp.data();
      // console.log(product)

      setProduct({
        title: product?.title,
        price: product?.price,
        productImageUrl: product?.productImageUrl,
        category: product?.category,
        description: product?.description,
        quantity: product?.quantity,
        time: product?.time,
        date: product?.date
      })
      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }


  // update product
  const updateProduct = async () => {
    setLoading(true);
    try {
      await setDoc(doc(fireDB, 'product', id), product)
      toast.success("Product Updated Successfully")
      getAllProductFunction();
      setLoading(false)
      navigate('/admin-dashboard')
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getSingleProductFunction();
  }, []);

  return (
    <>
      <section>
        <div className="container my-5">
          {/* loader component */}
          {loading && <Loader />}

          <div class="row g-3">
            <div class="col-12">
              <input type="text" class="form-control"
                value={product.title}
                onChange={(e) => {
                  setProduct({
                    ...product,
                    title: e.target.value
                  })
                }}
                placeholder="Product title" aria-label="Product title" />
            </div>
            <div class="col-12">
              <input type="number" class="form-control"
                value={product.price}
                onChange={(e) => {
                  setProduct({
                    ...product,
                    price: e.target.value
                  })
                }}
                placeholder="Product price" aria-label="Product price" />
            </div>
            <div class="col-12">
              <input type="url" class="form-control"
                value={product.productImageUrl}
                onChange={(e) => {
                  setProduct({
                    ...product,
                    productImageUrl: e.target.value
                  })
                }}
                placeholder="Product Img url" aria-label="Product Img url" />
            </div>

            <div className="col-12">
              <select
                value={product.category}
                onChange={(e) => {
                  setProduct({
                    ...product,
                    category: e.target.value
                  })
                }}
                class="form-select" aria-label="Default select example">
                <option selected>Select Product category...</option>
                {categoryList.map((value, index) => {
                  const { name } = value
                  return (
                    <option value={name} key={index}>{name}</option>
                  )
                })}
              </select>
            </div>

            <div className="col-12">
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Product description</label>
                <textarea
                  value={product.description}
                  onChange={(e) => {
                    setProduct({
                      ...product,
                      description: e.target.value
                    })
                  }}
                  class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </div>
            <div className="col-12">
              <button onClick={updateProduct} type="button" class="btn btn-primary text-center">update Product</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default UpdateProductPage
