

const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem('users'));

  return (
    <div>
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
    </div>
  )
}

export default UserDashboard
