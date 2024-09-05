import { useContext } from "react";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";


const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem('users'));

  const context = useContext(myContext);
  const { loading, getAllOrder } = context;

  return (
    <>
      <section>
        <div className="container">
          <div className="wrapper_user-dashboard my-5">
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
            <p>Date: {user?.date}</p>
            <p>Role: {user?.role}</p>
          </div>
        </div>
      </section>

      <div className="container">
        <h4 className="mt-4 mb-3">Order Details</h4>
        <div>
          {loading && <Loader />}
        </div>

        {getAllOrder.filter((obj) => obj.userid === user?.uid).map((order, index) => {
          return (
            <div key={index}>
              {order.cartItems.map((item, index) => {
                const { id, date, quantity, price, title, productImageUrl, category } = item
                return (
                  <div key={index}>
                    <div className="wrapper_user-orders border border-1 mb-3 rounded-3 pt-2 px-4 shadow-sm">
                      <div className="row align-items-center">
                      <div className="col-12 col-md-6">
                          <div className="d-flex align-items-center mb-2">
                          <div className="order-img me-3">
                              <img src={productImageUrl} alt="photo" width="150" className="img-fluid rounded-3" />
                            </div>
                            <div className="order-title">
                              <h6 className="text-muted fw-bold font-13 mb-1">{category}</h6>
                              <h6 className="text-muted">{title}</h6>
                              <p className="mb-1 text-muted">Quantity: {quantity}</p>
                              <p className="text-success fw-bold"> ₹  {price}</p>
                            </div>                            
                          </div>
                        </div>

                        <div className="col-12 col-md-6">
                          <div className="order-ids">
                            <p className="mb-2 font-13"><span className="bg-primary text-white py-1 px-2 rounded-2 fw-semibold"> Order Id: {id} </span></p>
                             <p className="mb-2 font-13"> <span className="bg-info text-white py-1 px-2 rounded-2 fw-semibold"> Date: {date} </span> </p>
                            <p className="mb-2 font-13"> <span className="bg-warning text-white py-1 px-2 rounded-2 fw-semibold">Total Amount: ₹ {price * quantity} </span></p>
                            <p className="mb-2 font-13"> <span className="bg-success text-white py-1 px-2 rounded-2 fw-semibold">Order Status: {order.status} </span> </p>
                          </div>
                        </div>

                      </div>



                    </div>
                  </div>

                )
              })}
            </div>
          )
        })}

      </div>



    </>
  )
}

export default UserDashboard
