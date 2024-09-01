import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import ProductDetail from "../../components/admin/ProductDetail"
import OrderDetail from "../../components/admin/OrderDetail"
import UserDetail from "../../components/admin/UserDetail"
import { useContext } from "react"
import myContext from "../../context/myContext"
import '../../App.css'

const AdminDashboard = () => {
    const user = JSON.parse(localStorage.getItem('users'));

    const context = useContext(myContext);
    const { getAllProduct, getAllOrder, getAllUser } = context;

    // console.log(getAllProduct.length);

    return (
        <>
            <section>
                <div className="container my-4">
                    <h2 className="text-center mb-3"> Admin Dashboard </h2>

                    <div className="wrapper_admin-details m-5">
                        <p className="mb-2 font-15"> <span className="fw-semibold me-1">Name:</span> {user?.name}</p>
                        <p className="mb-2 font-15"> <span className="fw-semibold me-1">Email:</span>  {user?.email}</p>
                        <p className="mb-2 fony-15"> <span className="fw-semibold me-1">Date:</span>  {user?.date}</p>
                        <p className="mb-2 font-15"> <span className="fw-semibold me-1">Role:</span>  {user?.role}</p>
                    </div>

                    <Tabs>
                        <TabList className="row">
                            <Tab className="col-12 col-md-4 list-unstyled">
                                <div className="cursor-pointer p-2 shadow-sm rounded-3 d-flex align-items-center justify-content-around bg-primary mb-3">
                                    <div className="wrapper_prod text-white">
                                        <h4>Total Products: </h4>
                                        <h5>{getAllProduct.length}</h5>
                                    </div>
                                    <img src="/assets/icons/products.png" alt="icons" className="img-fluid" width="70" />
                                </div>
                            </Tab>
                            <Tab className="col-12 col-md-4 list-unstyled">
                                <div className="cursor-pointer p-2 shadow-sm rounded-3 d-flex align-items-center justify-content-around bg-success mb-3">
                                    <div className="wrapper_order text-white">
                                        <h4>Total Orders: </h4>
                                        <h5>{getAllOrder.length}</h5>
                                    </div>
                                    <img src="/assets/icons/order.png" alt="icons" className="img-fluid" width="70" />
                                </div>
                            </Tab>
                            <Tab className="col-12 col-md-4 list-unstyled">
                                <div className="cursor-pointer p-2 shadow-sm rounded-3 d-flex align-items-center justify-content-around bg-info">
                                    <div className="wrapper_user text-white">
                                        <h4>Total Users: </h4>
                                        <h5>{getAllUser.length}</h5>
                                    </div>
                                    <img src="/assets/icons/boy.png" alt="icons" className="img-fluid" width="70" />
                                </div>
                            </Tab>
                        </TabList>

                        <TabPanel>
                            <ProductDetail />
                        </TabPanel>

                        <TabPanel>
                            <OrderDetail />
                        </TabPanel>

                        <TabPanel>
                            <UserDetail />
                        </TabPanel>
                    </Tabs>
                </div>
            </section>
        </>
    )
}

export default AdminDashboard
