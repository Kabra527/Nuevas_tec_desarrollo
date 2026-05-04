export default function Home() {
  const usuario = localStorage.getItem("usuario") || "Usuario";

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🌍 Bienvenido, {usuario}</h2>

      <div style={styles.card}>
        <h3>🔥 Reto del día</h3>
        <p>Recicla 3 botellas hoy y gana 30 puntos</p>
      </div>

      <div style={styles.card}>
        <h3>💡 Consejo del día</h3>
        <p>Apaga las luces que no estés usando</p>
      </div>

      <div style={styles.card}>
        <h3>🌱 Dato verde</h3>
        <p>Reciclar una lata de aluminio ahorra energía para 3 horas de TV</p>
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
  }
};