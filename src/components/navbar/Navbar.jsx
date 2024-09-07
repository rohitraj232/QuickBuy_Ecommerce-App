import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import "../../App.css";
import { IoCartOutline } from "react-icons/io5";


const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("users"));
  // console.log(user);

  // navigate
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear("users");
    navigate('./login')
  }

  // cartItems
  const cartItems = useSelector((state) => state.cart);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 px-4 nav-sticky bottom-shadow">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            QuickBuy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="ms-md-4">
            <SearchBar />
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active fw-semibold" aria-current="page" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to={'/user-dashboard'}>
                  User
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to={'/admin-dashboard'}>
                  Admin
                </Link>
              </li>

              {/* sign-up */}
              {!user ? <li className="nav-item">
                <Link className="nav-link fw-semibold" to={'/signup'}>
                  Sign Up
                </Link>
              </li> : ""}

              {/* login */}
              {!user ? <li className="nav-item">
                <Link className="nav-link fw-semibold" to={'/login'}>
                  Login
                </Link>
              </li> : ""}

              {/* user */}
              {user?.role === "user" && <li className="nav-item">
                <Link className="nav-link fw-semibold" to={'/user-dashboard'}>
                  {user?.name}
                </Link>
              </li>}

              {/* admin */}
              {user?.role === "admin" && <li className="nav-item">
                <Link className="nav-link fw-semibold" to={'/admin-dashboard'}>
                  {user?.name}
                </Link>
              </li>}

              {user && <li className="nav-item" onClick={logout}>
                <Link className="nav-link fw-semibold">Log Out</Link>
              </li>}

              <li className="nav-item mx-4">
                <Link className="nav-link position-relative" to="/cart">
                  {/* cart({cartItems.length}) */}
                  <IoCartOutline className="fs-4" />
                  <span className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItems.length}
                    <span className="visually-hidden">cart messages</span>
                  </span>
                </Link>
              </li>

            </ul>



          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
