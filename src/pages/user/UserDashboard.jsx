import { useContext } from "react";
import myContext from "../../context/myContext";


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
        <h2 className="mt-4">Order Details</h2>

        {getAllOrder.filter((obj) => obj.userid === user?.uid).map((order, index) => {
          return (
            <div key={index}>
              {order.cartItems.map((item, index) => {
                const { id, date, quantity, price, title, productImageUrl, catergory } = item
                return (
                  <div key={index}>
                    <h5>Order Id: {id}</h5>
                    <h5>Date: {date}</h5>
                    <h5>Total Amount: Rs. {price * quantity}</h5>
                    <h5>Order Status: {order.status}</h5>

                    <div className="container">
                      <img src={productImageUrl} alt="photo" width="200" />
                      <p>{title}</p>
                      <p>{catergory}</p>
                      <p>{quantity}</p>
                      <p>Rs. {price}</p>
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
