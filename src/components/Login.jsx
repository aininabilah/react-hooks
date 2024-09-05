import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("login") === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    sessionStorage.setItem("login", "true");
    setIsLoggedIn(true);
    navigate("/");
    window.location.reload(); 
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container my-3 mt-8">
      <h1 className="text-center text-3xl font-bold mt-8">Login</h1>
      <div className="flex justify-center mt-3">
        <p
          className="text-center bg-sky-400 rounded-2xl p-2 font-semibold dark:text-black"
          style={{ width: "32rem" }}
        >
          Tekan tombol di bawah untuk login.
        </p>
      </div>
      <div className="flex justify-center mt-3">
        <button
          onClick={handleLogin}
          className="font-bold text-white bg-emerald-400 hover:bg-emerald-700 py-2 px-4 rounded-4xl"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
