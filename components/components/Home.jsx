export default function Home() {
  return (
    <div style={styles.container}>
      <h2>🌍 Bienvenido a EcoHábitos</h2>

      <div style={styles.card}>
        <h3>🔥 Reto del día</h3>
        <p>Recicla 3 botellas hoy</p>
      </div>

      <div style={styles.card}>
        <h3>💡 Consejo</h3>
        <p>Apaga las luces que no uses</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px"
  },
  card: {
    background: "#f0fdf4",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "10px"
  }
};