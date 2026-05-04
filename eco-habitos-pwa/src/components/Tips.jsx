const consejos = [
  { emoji: "💡", titulo: "Ahorra energía", texto: "Apaga las luces que no estés usando y desconecta los aparatos en standby." },
  { emoji: "🚿", titulo: "Ahorra agua", texto: "Cierra el grifo mientras te cepillas los dientes. Ahorras hasta 12 litros por minuto." },
  { emoji: "🛍️", titulo: "Reduce el plástico", texto: "Lleva tu bolsa reutilizable al supermercado y evita bolsas de un solo uso." },
  { emoji: "🚲", titulo: "Movilidad sostenible", texto: "Usa la bici o camina para trayectos cortos. Reduces CO₂ y haces ejercicio." },
  { emoji: "♻️", titulo: "Recicla correctamente", texto: "Separa papel, plástico, vidrio y orgánicos. Cada material tiene su contenedor." },
  { emoji: "🌱", titulo: "Planta algo", texto: "Una planta en casa mejora el aire y te conecta con la naturaleza." },
];

export default function Tips() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>💡 Consejos Verdes</h2>

      {consejos.map((consejo, index) => (
        <div key={index} style={styles.card}>
          <h3>{consejo.emoji} {consejo.titulo}</h3>
          <p>{consejo.texto}</p>
        </div>
      ))}
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