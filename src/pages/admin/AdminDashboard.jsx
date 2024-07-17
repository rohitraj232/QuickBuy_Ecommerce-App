import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import ProductDetail from "../../components/admin/ProductDetail"
import OrderDetail from "../../components/admin/OrderDetail"
import UserDetail from "../../components/admin/UserDetail"

const AdminDashboard = () => {
    return (
        <>
            <section>
                <div className="container">
                    <h2 className="text-center"> Admin </h2>

                    <p className="mt-2">Name: kwelkmdc</p>
                    <p className="mt-2">Email: kwelkmdc@gmail.com</p>

                    <Tabs>
                        <TabList className="row">
                            <Tab className="col-12 col-md-4">
                                <div className="p-2 border border-1">
                                    <h4>Total product: 20</h4>
                                </div>
                            </Tab>
                            <Tab className="col-12 col-md-4">
                                <div className="p-2 border border-1">
                                    <h4>Total order: 10</h4>
                                </div>
                            </Tab>
                            <Tab className="col-12 col-md-4">
                                <div className="p-2 border border-1">
                                    <h4>Total user: 10</h4>
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
