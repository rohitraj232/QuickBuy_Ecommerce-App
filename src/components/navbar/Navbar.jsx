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
      <nav class="navbar navbar-expand-lg bg-body-tertiary py-3 px-4 nav-sticky bottom-shadow">
        <div class="container-fluid">
          <Link class="navbar-brand" to="#">
            QuickBuy
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="ms-md-4">
            <SearchBar />
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active fw-semibold" aria-current="page" to="#">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link fw-semibold" to={'/user-dashboard'}>
                  User
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link fw-semibold" to={'/admin-dashboard'}>
                  Admin
                </Link>
              </li>

              {/* sign-up */}
              {!user ? <li class="nav-item">
                <Link class="nav-link fw-semibold" to={'/signup'}>
                  Sign Up
                </Link>
              </li> : ""}

              {/* login */}
              {!user ? <li class="nav-item">
                <Link class="nav-link fw-semibold" to={'/login'}>
                  Login
                </Link>
              </li> : ""}

              {/* user */}
              {user?.role === "user" && <li class="nav-item">
                <Link class="nav-link fw-semibold" to={'/user-dashboard'}>
                  {user?.name}
                </Link>
              </li>}

              {/* admin */}
              {user?.role === "admin" && <li class="nav-item">
                <Link class="nav-link fw-semibold" to={'/admin-dashboard'}>
                  {user?.name}
                </Link>
              </li>}

              {user && <li class="nav-item" onClick={logout}>
                <Link className="nav-link fw-semibold">Log Out</Link>
              </li>}

              <li class="nav-item mx-4">
                <Link class="nav-link position-relative" to="/cart">
                  {/* cart({cartItems.length}) */}
                  <IoCartOutline className="fs-4" />
                  <span class="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItems.length}
                    <span class="visually-hidden">cart messages</span>
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
