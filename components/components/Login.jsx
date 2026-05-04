import { useState } from "react";

export default function Login({ handleLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });

      const data = await res.json();

      if (data.status) {
        handleLogin(e); // entra a la app
      } else {
        alert("Error en login");
      }

    } catch (error) {
      console.error("Error:", error);
      alert("No se pudo conectar con el servidor");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🌱 EcoHábitos</h1>
        <p style={styles.subtitle}>Cuida el planeta con tus acciones</p>

        {/* 👇 CAMBIO AQUÍ */}
        <form onSubmit={handleSubmit} style={styles.form}>
          
          <input
            type="text"
            placeholder="Usuario"
            style={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" style={styles.button}>
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #22c55e, #3b82f6)"
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    width: "300px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
  },
  title: {
    color: "#22c55e"
  },
  subtitle: {
    marginBottom: "20px",
    color: "#555"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },
  button: {
    background: "#22c55e",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};