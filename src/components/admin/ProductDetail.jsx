import { Link } from "react-router-dom"

const ProductDetail = () => {
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

                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">S.No.</th>
                                    <th scope="col">Location Name</th>
                                    <th scope="col">Action</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Name</td>
                                    <td>Edit</td>
                                    <td>Delete</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetail
