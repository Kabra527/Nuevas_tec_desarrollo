import { useNavigate, useLocation } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { path: "/home", label: "🏠 Inicio" },
    { path: "/habits", label: "♻️ Retos" },
    { path: "/tips", label: "💡 Consejos" },
    { path: "/profile", label: "👤 Perfil" },
  ];

  return (
    <div style={styles.nav}>
      {tabs.map((tab) => (
        <button
          key={tab.path}
          onClick={() => navigate(tab.path)}
          style={{
            ...styles.button,
            background: location.pathname === tab.path ? "#15803d" : "transparent"
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-around",
    background: "#22c55e",
    padding: "10px",
    position: "fixed",
    bottom: 0,
    width: "100%"
  },
  button: {
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "13px"
  }
};