import { Link, useNavigate } from "react-router-dom";
import '../../App.css'
import { IoMdKey } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";


const Login = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  // navigate
  const navigate = useNavigate();

  // user login state
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: ""
  });

  // user login function
  const userLoginFunction = async () => {
    // validation
    if(userLogin.email === "" || userLogin.password === "") {
      return toast.error("All Fields are Required")
    }

    setLoading(true);

    try {
      const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
      console.log(users);

      try {
        const q = query(
          collection(fireDB, "user"),
          where('uid', '==', users?.user?.uid)
        );

        const data = onSnapshot(q, (QuerySnapshot) => {
          let user;
          QuerySnapshot.forEach((doc) => user = doc.data());
          localStorage.setItem("users", JSON.stringify(user));
          setUserLogin({
            email: "",
            password: ""
          })
          toast.success("Login Successfully");
          setLoading(false);

          if(user.role === "user") {
            navigate('/user-dashboard');
          } else {
            navigate('/admin-dashboard')
          }
        })

        return () => data;

      } catch (error) {
        console.log(error);
        setLoading(false);
      }
      
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

  }

  return (
    <>
      <section className="d-flex justify-content-center align-items-center full-height">
        <div className="container">
          {/* loader component */}
          {loading && <Loader/>}

          <div className="wrapper_login">
            <div className="wrapper_login-form">
              <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-10">
                  <div className=" border border-1 p-3 rounded-4">
                    <div className="row">
                      <div className="col-12 col-md-7">
                        <img src="../public/assets/login.avif" loading="lazy" alt="login image" className="rounded-4 img-fluid d-none d-md-block" />
                      </div>
                      <div className="col-12 col-md-5">
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
                              value={userLogin.email}
                              onChange={(e) => {
                                setUserLogin({
                                  ...userLogin,
                                  email: e.target.value
                                })
                              }}
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
                              value={userLogin.password}
                              onChange={(e) => {
                                setUserLogin({
                                  ...userLogin,
                                  password: e.target.value
                                })
                              }}
                            />
                          </div>

                          <button onClick={userLoginFunction} type="button" class="btn btn-primary w-100">
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
