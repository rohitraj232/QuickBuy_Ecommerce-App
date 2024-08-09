import { useContext, useState } from "react"
import myContext from "../../context/myContext"
import { useNavigate } from "react-router-dom";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";

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


const AddProductPage = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  // navigate
  const navigate = useNavigate();

  // product state
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    quantity: 1,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  })

  // add product function
  const addProductFunction = async () => {
    // validation
    if(product.title === "" || product.price === "" || product.productImageUrl === "" || product.category === "" || product.description === "") {
      return toast.error("All fields are required")
    }

    setLoading(true);

    try {
      const productRef = collection(fireDB, 'product');
      await addDoc(productRef, product);
      toast.success("Product added Successfully");
      navigate('/admin-dashboard');
      setLoading(false);
    } catch(error) {
      // console.log(error);
      setLoading(false);
      toast.error("Product add failed");
    }
  }

  return (
    <>
      <section>
        <div className="container my-5">
          {/* loader component */}
          {loading && <Loader/>}

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
              <button type="button" onClick={addProductFunction} class="btn btn-primary text-center">Add Product</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AddProductPage
