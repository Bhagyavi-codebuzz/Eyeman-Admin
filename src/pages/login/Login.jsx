import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCog } from 'react-icons/fa';
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

import { loaders } from '../../components/loader/Loader';

import './Login.css'

import logo from '../../assets/images/logo.svg'
import { useDispatch, useSelector } from 'react-redux';
import { reqtoSuperAdminLogin } from '../redux-Toolkit/services/superadmin/AuthServices';

const initialState = {
    email: "",
    password: "",
}

const Login = () => {
    const [formData, setFormData] = useState(initialState);
    const [showpassword, setshowpassword] = useState(false);
    const { loader } = useSelector((state) => state.SuperAdminAuth);
    const navigate = useNavigate(); 
    const dispatch = useDispatch();

    const token = localStorage.getItem("eyeman-superAdmin-token");

    const PasswordShowHide = () => {
        setshowpassword((prevShowPassword) => !prevShowPassword);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await dispatch(reqtoSuperAdminLogin(formData));

            if (res.payload?.success) {
                navigate("/superadmin/dashboard");
                setFormData(initialState);
            }

        } catch (err) {
            throw err;
        }
    }
    return (
        <>
            <section className="login-section">
                <div className="container d-flex align-items-center justify-content-center min-vh-100">
                    <div className="row bg-white login-box w-100">
                        <div className="col-lg-6 left-box">
                            <div className="row align-items-center">
                                <div className="header-text my-4">
                                    <h4 className="mb-2">Sign In !
                                        <span>
                                            <FaUserCog style={{ marginLeft: "13px", marginBottom: "2px" }} />
                                        </span>
                                    </h4>
                                    <p>Hello there, sign in to continue!</p>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="form-label">Email:</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Enter Your Email Address"
                                            // autoComplete='off'
                                            value={formData?.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="password" className="form-label">Password:</label>
                                        <div className="input-group">
                                            <input
                                                style={{ borderRadius: "10px" }}
                                                type={showpassword ? "text" : "password"}
                                                name="password"
                                                id="password"
                                                className="form-control"
                                                placeholder="Enter Your Password"
                                                // autoComplete='off'
                                                value={formData.password}
                                                onChange={handleChange}
                                                required
                                            />
                                            <span
                                                onClick={PasswordShowHide}
                                                style={{
                                                    position: 'absolute',
                                                    right: '10px',
                                                    top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    border: "0",
                                                    color: '#000',
                                                    backgroundColor: "transparent",
                                                    cursor: 'pointer',
                                                    zIndex: "999"
                                                }}
                                            >
                                                {showpassword ? <IoEyeSharp size={24} /> : <FaEyeSlash size={24} />}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <button
                                            className={`login-btn ${loader ? 'btn-loading' : ''}`}
                                            disabled={loader}
                                        >
                                            {loader && loaders.small}
                                            {loader ? 'Signing In...' : 'Sign In'}
                                        </button>
                                        {/* <button className='login-btn'>
                                            Sign In
                                        </button> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 right-box">
                            <div className="glass-effect d-flex justify-content-center align-items-center">
                                <img src={logo} className="login-logo" draggable="false" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login