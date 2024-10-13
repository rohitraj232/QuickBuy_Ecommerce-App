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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import Loader from "../../components/loader/Loader";
import { auth, fireDB } from "../../firebase/FirebaseConfig";


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

        setLoading(true);

        try {
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

            // create user object
            const user = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                )
            }

            // create user reference
            const userReference = collection(fireDB, "user");

            // Add user detail
            addDoc(userReference, user)

            setUserSignup({
                name: "",
                email: "",
                password: ""
            })

            toast.success("Signup Successfully");
            setLoading(false);
            navigate('/login')

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

                    <div className="wrapper_signup">
                        <div className="wrapper_signup-form">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-12 col-md-10">
                                    <div className=" border border-1 p-3 rounded-4">
                                        <div className="row">
                                            <div className="col-12 col-md-7">
                                                <img src="/assets/signup.avif" loading="lazy" alt="login image" className="rounded-4 img-fluid d-none d-md-block" />
                                            </div>
                                            <div className="col-12 col-md-5">
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
                                                            value={userSignup.name}
                                                            onChange={(e) => {
                                                                setUserSignup({
                                                                    ...userSignup,
                                                                    name: e.target.value
                                                                })
                                                            }}
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
                                                            value={userSignup.email}
                                                            onChange={(e) => {
                                                                setUserSignup({
                                                                    ...userSignup,
                                                                    email: e.target.value
                                                                })
                                                            }}
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
                                                            value={userSignup.password}
                                                            onChange={(e) => {
                                                                setUserSignup({
                                                                    ...userSignup,
                                                                    password: e.target.value
                                                                })
                                                            }}
                                                        />
                                                    </div>

                                                    <button onClick={userSignupFunction} type="button" class="btn btn-primary w-100">
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
