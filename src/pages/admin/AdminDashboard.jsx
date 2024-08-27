import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import ProductDetail from "../../components/admin/ProductDetail"
import OrderDetail from "../../components/admin/OrderDetail"
import UserDetail from "../../components/admin/UserDetail"
import { useContext } from "react"
import myContext from "../../context/myContext"

const AdminDashboard = () => {
    const user = JSON.parse(localStorage.getItem('users'));

    const context = useContext(myContext);
    const { getAllProduct, getAllOrder, getAllUser } = context;

    // console.log(getAllProduct.length);

    return (
        <>
            <section>
                <div className="container">
                    <h2 className="text-center"> Admin </h2>

                    <p className="mt-2">Name: {user?.name}</p>
                    <p className="mt-2">Email: {user?.email}</p>
                    <p className="mt-2">Date: {user?.date}</p>
                    <p className="mt-2">Role: {user?.role}</p>

                    <Tabs>
                        <TabList className="row">
                            <Tab className="col-12 col-md-4">
                                <div className="p-2 border border-1">
                                    <h4>Total product: {getAllProduct.length}</h4>
                                </div>
                            </Tab>
                            <Tab className="col-12 col-md-4">
                                <div className="p-2 border border-1">
                                    <h4>Total order: {getAllOrder.length}</h4>
                                </div>
                            </Tab>
                            <Tab className="col-12 col-md-4">
                                <div className="p-2 border border-1">
                                    <h4>Total user: {getAllUser.length}</h4>
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
