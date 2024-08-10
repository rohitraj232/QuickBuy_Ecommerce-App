import { useContext } from "react"
import { Link } from "react-router-dom"
import myContext from "../../context/myContext"
import Loader from "../loader/Loader";

const ProductDetail = () => {

    const context = useContext(myContext);
    const { loading, getAllProduct } = context;

    // console.log(getAllProduct);

    return (
        <>
            <section>
                <div className="container">
                    <div className="mt-5">
                        <div className="row mb-3">
                            <div className="col-6">
                                <h6>All Product</h6>
                            </div>
                            <div className="col-6">
                                <Link to="/add-product">
                                    <button type="button" class="btn btn-primary">Add Product</button>
                                </Link>
                            </div>
                        </div>

                        {/* loader component */}
                        {loading && <Loader/>}

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
                                    const {id, title, price, category, date, productImageUrl} = item
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}.</th>
                                            <td><img width="50" src={productImageUrl} alt="product image" /></td>
                                            <td>{title}</td>
                                            <td>{price}</td>
                                            <td>{category}</td>
                                            <td>{date}</td>
                                            <td>Edit</td>
                                            <td>Delete</td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetail
