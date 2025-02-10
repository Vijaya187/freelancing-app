import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/register.css";

const RegisterForm = () => {
  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // State for user role selection
  const [userRole, setUserRole] = useState("Freelancer");

  const navigate = useNavigate(); // For navigation

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Redirect based on selected user role
    if (userRole === "Freelancer") {
      navigate("/freelancerdashboard");
    } else {
      navigate("/clientdashboard");
    }
  };

  return (
    <section className="vh-100 bg-image p-3 mb-2">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>

                  <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div className="form-outline mb-4">
                      <label className="form-label">Your Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div className="form-outline mb-4">
                      <label className="form-label">Your Email</label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        required
                      />
                    </div>

                    {/* Password Field */}
                    <div className="form-outline mb-4 position-relative">
                      <label className="form-label">Password</label>
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control form-control-lg"
                        required
                      />
                      <i
                        className={`bi ${
                          showPassword ? "bi-eye" : "bi-eye-slash"
                        }`}
                        style={{
                          cursor: "pointer",
                          position: "absolute",
                          right: "10px",
                          top: "38px",
                        }}
                        onClick={() => setShowPassword(!showPassword)}
                      ></i>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="form-outline mb-4 position-relative">
                      <label className="form-label">Confirm Password</label>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        className="form-control form-control-lg"
                        required
                      />
                      <i
                        className={`bi ${
                          showConfirmPassword ? "bi-eye" : "bi-eye-slash"
                        }`}
                        style={{
                          cursor: "pointer",
                          position: "absolute",
                          right: "10px",
                          top: "38px",
                        }}
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      ></i>
                    </div>

                    {/* User Type Selection (Freelancer/Client) */}
                    <div className="form-outline mb-4">
                      <label className="form-label">Register As</label>
                      <select
                        className="form-control form-control-lg"
                        value={userRole}
                        onChange={(e) => setUserRole(e.target.value)}
                        required
                      >
                        <option value="Freelancer">Freelancer</option>
                        <option value="Client">Client</option>
                      </select>
                    </div>

                    {/* Register Button */}
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg"
                      >
                        Register
                      </button>
                    </div>

                    {/* Link to Login Page */}
                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <Link to="/login" className="fw-bold text-body">
                        <u>Login here</u>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
