import { useState } from "react";

export default function Habits() {
  const [puntos, setPuntos] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>♻ Retos de reciclaje</h2>

      <button onClick={() => setPuntos(puntos + 10)}>
        Reportar reciclaje
      </button>

      <p>Puntos acumulados: {puntos}</p>
    </div>
  );
}