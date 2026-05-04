import { useState, useEffect } from "react";

export default function Habits() {
  const [puntos, setPuntos] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const usuario = localStorage.getItem("usuario") || "anonimo";

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/puntos/${usuario}`)
      .then((res) => res.json())
      .then((data) => setPuntos(data.puntos))
      .catch(() => console.log("Sin conexión al servidor"));
  }, [usuario]);

  const reportarReciclaje = async () => {
    const nuevosPuntos = 10;

    try {
      await fetch("http://127.0.0.1:5000/puntos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: usuario, puntos: nuevosPuntos })
      });

      setPuntos((prev) => prev + nuevosPuntos);
      setMensaje("✅ ¡+10 puntos guardados!");

      setTimeout(() => setMensaje(""), 3000);

    } catch (err) {
      setPuntos((prev) => prev + nuevosPuntos);
      setMensaje("⚠️ Sin conexión, puntos guardados localmente");
      setTimeout(() => setMensaje(""), 3000);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>♻️ Retos de reciclaje</h2>

      <div style={styles.card}>
        <h3>🏆 Tus puntos totales</h3>
        <p style={styles.puntos}>{puntos} pts</p>
      </div>

      <div style={styles.card}>
        <h3>📦 Reportar reciclaje</h3>
        <p>Cada reporte suma 10 puntos</p>
        <button onClick={reportarReciclaje} style={styles.button}>
          Reportar reciclaje
        </button>
        {mensaje && <p style={styles.mensaje}>{mensaje}</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    paddingBottom: "80px"
  },
  title: {
    color: "#22c55e",
    marginBottom: "20px"
  },
  card: {
    background: "#f0fdf4",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
  },
  puntos: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#22c55e"
  },
  button: {
    background: "#22c55e",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px"
  },
  mensaje: {
    marginTop: "10px",
    fontWeight: "bold"
  }
};