import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      sessionStorage.setItem("session", "active"); // se borra al cerrar la pestaña
      setLoading(false);
      navigate("/items");
    }, 2000);
  };

  return (
    <div className="login-container">
      <img src="/logo.png" alt="Campus Manager" />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? <Spinner /> : "Iniciar sesión"}
      </button>
    </div>
  );
}