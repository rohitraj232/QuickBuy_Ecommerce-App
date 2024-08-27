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
                        <div className="row mb-3">
                            <div className="col-12">
                                <h6>All Order</h6>
                            </div>
                        </div>

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
                                                const {id, productImageUrl, title, category, price, quantity} = item
                                                return (
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{id}</td>
                                                        <td><img src={productImageUrl} width="50" alt="product-img" /></td>
                                                        <td>{title}</td>
                                                        <td>{category}</td>
                                                        <td>{price}</td>
                                                        <td>{quantity}</td>
                                                        <td>{quantity * price}</td>
                                                        <td>{order.status}</td>
                                                        <td>{order.addressInfo.name}</td>
                                                        <td>{order.addressInfo.address}</td>
                                                        <td>{order.addressInfo.pincode}</td>
                                                        <td>{order.addressInfo.mobileNumber}</td>
                                                        <td>{order.email}</td>
                                                        <td>{order.date}</td>
                                                        <td onClick={() => orderDelete(order.id)}>Delete</td>
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
            </section>
        </>
    )
}

export default OrderDetail
