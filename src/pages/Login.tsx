import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css"; // Import external CSS

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Please sign in to continue</p>

        {error && <p className="error-message">{error}</p>}

        <div className="input-group">
          {/* Username Field */}
          <div className="input-container">
            <label htmlFor="username" className="input-label">
              Username
            </label>
            <div className="input-wrapper">
              <FaUser className="input-icon" />
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="login-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="input-container">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <div className="input-wrapper">
              <FaLock className="input-icon" />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button onClick={handleLogin} className="login-button">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
