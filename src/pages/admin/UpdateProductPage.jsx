import { useContext, useState, useEffect } from "react"
import myContext from "../../context/myContext"
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import Loader from "../../components/loader/Loader";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";


const categoryList = [
  {
    name: 'Fashion'
  },
  {
    name: 'Shirt'
  },
  {
    name: 'Jacket'
  },
  {
    name: 'Mobile'
  },
  {
    name: 'Laptop'
  },
  {
    name: 'Shoe'
  },
  {
    name: 'Headphone'
  },
  {
    name: 'Wireless Controller'
  },
  {
    name: 'Keyboard'
  },
  {
    name: 'Camera'
  },
  {
    name: 'Speaker'
  },
  {
    name: 'Mouse'
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

          <div className="wrapper_update-product border border-1 py-4 rounded-3">
            <h3 className="mx-3 my-2">Update Product....</h3>
            <div class="row">
              <div className="col-12 col-md-6">
                <div className="wrapper_update-details m-3">
                  <div className="row g-3">
                    <div className="col-12">
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

                    <div className="col-12">
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

                    <div className="col-12">
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
                        <label for="exampleFormControlTextarea1" class="form-label fw-semibold">Product Description:</label>
                        <textarea
                          value={product.description}
                          onChange={(e) => {
                            setProduct({
                              ...product,
                              description: e.target.value
                            })
                          }}
                          class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
                      </div>
                    </div>

                    <div className="col-12">
                      <button onClick={updateProduct} type="button" class="btn btn-primary text-center">Update Product</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="wrapper_update-img">
                  <img src="/assets/vectors/update-product.avif" alt="update-product img" className="img-fluid" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default UpdateProductPage
