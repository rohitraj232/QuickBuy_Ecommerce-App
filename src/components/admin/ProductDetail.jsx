import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import myContext from "../../context/myContext"
import Loader from "../loader/Loader";
import { deleteDoc, doc } from "firebase/firestore";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";

const ProductDetail = () => {

    const context = useContext(myContext);
    const { loading, setLoading, getAllProduct, getAllProductFunction } = context;

    // console.log(getAllProduct);

    // navigate
    const navigate = useNavigate();

    // delete product function
    const deleteProduct = async (id) => {
        setLoading(true);
        try {
            await deleteDoc(doc(fireDB, 'product', id))
            toast.success("Product deleted Successfully");
            getAllProductFunction();
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    return (
        <>
            <section>
                <div className="container">
                    <div className="mt-5">
                        <div className="prod-header border border-1">
                            <div className="row m-3 align-items-center justify-content-between">
                                <div className="col-6">
                                    <h6>All Products</h6>
                                </div>
                                <div className="col-6">
                                    <Link to="/add-product" className="float-end">
                                        <button type="button" class="btn btn-primary fw-semibold">Add Product</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* loader component */}
                        {loading && <Loader />}

                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">S.No.</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Action</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {getAllProduct.map((item, index) => {
                                        const { id, title, price, category, date, productImageUrl } = item
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}.</th>
                                                <td><img width="50" src={productImageUrl} alt="product image" className="img-fluid" /></td>
                                                <td>{title}</td>
                                                <td className="text-success fw-semibold"> ₹ {price}</td>
                                                <td className="text-muted fw-semibold">{category}</td>
                                                <td className="text-muted fw-semibold">{date}</td>
                                                <td onClick={() => navigate(`/update-product/${id}`)}>
                                                    <button type="button" class="btn btn-warning fw-semibold text-white">Update</button>
                                                </td>
                                                <td onClick={() => deleteProduct(id)}>
                                                    <button type="button" class="btn btn-danger fw-semibold text-white">Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetail
