export default function Navigation({ setCurrentPage }) {
  return (
    <div style={styles.nav}>
      <button onClick={() => setCurrentPage("home")}>Inicio</button>
      <button onClick={() => setCurrentPage("habits")}>Retos</button>
      <button onClick={() => setCurrentPage("tips")}>Consejos</button>
      <button onClick={() => setCurrentPage("profile")}>Perfil</button>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-around",
    background: "#22c55e",
    padding: "10px"
  }
};