import { useContext } from "react"
import myContext from "../../context/myContext"

const OrderDetail = () => {

    // fetching all order from context(getAllOrder)
    const context = useContext(myContext);
    const { getAllOrder, orderDelete } = context;

    return (
        <>
            <section>
                <div className="container">
                    <div className="mt-5">
                        <div className="row">
                            <div className="col-12">
                                <div className="all-orders border border-1 p-3">
                                    <h6>All Orders</h6>
                                </div>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">S.No.</th>
                                        <th scope="col">Order Id</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total Price</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Pincode</th>
                                        <th scope="col">Mob No.</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {getAllOrder.map((order) => {
                                        return (
                                            <>
                                                {order.cartItems.map((item, index) => {
                                                    const { id, productImageUrl, title, category, price, quantity } = item
                                                    return (
                                                        <tr key={index}>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{id}</td>
                                                            <td><img src={productImageUrl} width="50" alt="product-img" className="img-fluid" /></td>
                                                            <td>{title}</td>
                                                            <td className="text-muted fw-semibold">{category}</td>
                                                            <td className="text-success fw-semibold"> ₹ {price}</td>
                                                            <td>{quantity}</td>
                                                            <td className="text-success fw-semibold"> ₹ {quantity * price}</td>
                                                            <td> <span className="rounded-3 bg-success text-white p-2 fw-semibold"> {order.status} </span></td>
                                                            <td>{order.addressInfo.name}</td>
                                                            <td>{order.addressInfo.address}</td>
                                                            <td>{order.addressInfo.pincode}</td>
                                                            <td>{order.addressInfo.mobileNumber}</td>
                                                            <td>{order.email}</td>
                                                            <td>{order.date}</td>
                                                            <td onClick={() => orderDelete(order.id)}>
                                                                <button type="button" class="btn btn-danger fw-semibold text-white">Delete</button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </>
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

export default OrderDetail
