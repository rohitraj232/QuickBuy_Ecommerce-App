import { Link } from "react-router-dom";
import '../../App.css'
import { IoMdKey } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Login = () => {
  return (
    <>
      <section className="d-flex justify-content-center align-items-center full-height">
        <div className="container">
          <div className="wrapper_login">
            <div className="wrapper_login-form">
              <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-8">
                    <div className=" border border-1 p-3 rounded-4">
                  <div className="row">
                    <div className="col-12 col-md-5">
                      <img src="https://picsum.photos/300/500" alt="login image" className="rounded-4 img-fluid d-none d-md-block" />
                    </div>
                    <div className="col-12 col-md-7">
                      <div className="form mt-3 mt-md-5">
                        <h3 className="text-center">Login</h3>

                        <div class="mb-3">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                           <MdEmail />
                           <span className="ms-1">Email</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Enter Email:"
                          />
                        </div>

                        <div class="mb-3">
                          <label
                            for="exampleFormControlInput2"
                            className="form-label"
                          >
                            <IoMdKey />
                            <span className="ms-1">Password</span>
                          </label>
                          <input
                            type="Password"
                            className="form-control"
                            id="exampleFormControlInput2"
                            placeholder="Enter Your Password:"
                          />
                        </div>

                        <button type="button" class="btn btn-primary w-100">
                          Log In
                        </button>

                        <p className="text-center mt-3">or login with</p>

                        <div className="login-with text-center">
                          <button type="button" class="btn btn-primary">
                          <FaFacebookF />
                          <span className="ms-1">Facebook</span>
                          </button>
                          <button type="button" class="btn btn-primary ms-2">
                          <FaGoogle />
                          <span className="ms-1">Google</span>
                          </button>
                        </div>

                        <p className="text-center mt-4">Don't Have an account <Link to={'/signup'}>Signup</Link></p>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
