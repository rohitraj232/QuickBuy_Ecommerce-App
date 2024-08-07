import { Link, useNavigate } from "react-router-dom";
import '../../App.css'
import { FaUser } from "react-icons/fa";
import { IoMdKey } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";


const Signup = () => {
    const context = useContext(myContext);
    const {loading, setLoading} = context;

    const navigate = useNavigate();

    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
        role: "user",
    });

    // user signup function
    const userSignupFunction = async () => {
        // validation
        if(userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
            return toast.error("All fields are required")        
        }
    }

    return (
        <>
            <section className="d-flex justify-content-center align-items-center full-height">
                <div className="container">
                    <div className="wrapper_signup">
                        <div className="wrapper_signup-form">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-12 col-md-8">
                                    <div className=" border border-1 p-3 rounded-4">
                                        <div className="row">
                                            <div className="col-12 col-md-5">
                                                <img src="https://picsum.photos/300/500" alt="login image" className="rounded-4 img-fluid d-none d-md-block" />
                                            </div>
                                            <div className="col-12 col-md-7">
                                                <div className="form">
                                                    <h3 className="text-center">Sign Up</h3>

                                                    <div class="mb-3">
                                                        <label
                                                            for="exampleFormControlInput1"
                                                            className="form-label"
                                                        >
                                                            <FaUser />
                                                            <span className="ms-1">Name</span>
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="exampleFormControlInput1"
                                                            placeholder="Enter Name:"
                                                        />
                                                    </div>

                                                    <div class="mb-3">
                                                        <label
                                                            for="exampleFormControlInput2"
                                                            className="form-label"
                                                        >
                                                            <MdEmail />
                                                            <span className="ms-1">Email</span>
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="exampleFormControlInput2"
                                                            placeholder="Enter Email:"
                                                        />
                                                    </div>

                                                    <div class="mb-3">
                                                        <label
                                                            for="exampleFormControlInput3"
                                                            className="form-label"
                                                        >
                                                            <IoMdKey />
                                                            <span className="ms-1">Password</span>
                                                        </label>
                                                        <input                                                       type="Password"
                                                            className="form-control"
                                                            id="exampleFormControlInput3"
                                                            placeholder="Enter Your Password:"
                                                        />
                                                    </div>

                                                    <button type="button" class="btn btn-primary w-100">
                                                        Sign Up
                                                    </button>

                                                    <p className="text-center mt-3">or sign up with</p>

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

                                                    <p className="text-center mt-4"> Have an account <Link to={'/login'}>Log In</Link></p>
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

export default Signup;
