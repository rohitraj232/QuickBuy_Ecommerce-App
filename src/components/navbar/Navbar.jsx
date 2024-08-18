import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

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
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
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
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="#">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/cart">
                  cart({cartItems.length})
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={'/user-dashboard'}>
                  user
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={'/admin-dashboard'}>
                Admin
                </Link>
              </li>
              
              {/* sign-up */}
             {!user ? <li class="nav-item">
                <Link class="nav-link" to={'/signup'}>
                Sign Up
                </Link>
              </li> : ""} 

              {/* login */}
              {!user ? <li class="nav-item">
                <Link class="nav-link" to={'/login'}>
                Login
                </Link>
              </li> : ""}
              
              {/* user */}
              {user?.role === "user" && <li class="nav-item">
                <Link class="nav-link" to={'/user-dashboard'}>
                {user?.name}
                </Link>
              </li>}

              {/* admin */}
              {user?.role === "admin" && <li class="nav-item">
                <Link class="nav-link" to={'/admin-dashboard'}>
                {user?.name}
                </Link>
              </li>}

              {user && <li class="nav-item" onClick={logout}>
                Log Out
              </li>}

            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
