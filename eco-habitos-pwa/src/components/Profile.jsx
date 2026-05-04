import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [profilePic, setProfilePic] = useState(
    localStorage.getItem("profilePic") || null
  );
  const usuario = localStorage.getItem("usuario") || "Usuario";
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      localStorage.setItem("profilePic", reader.result);
      setProfilePic(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    localStorage.removeItem("profilePic");
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>👤 Mi Perfil</h2>

      <div style={styles.card}>
        <div style={styles.avatarContainer}>
          {profilePic ? (
            <img src={profilePic} alt="Perfil" style={styles.avatar} />
          ) : (
            <div style={styles.avatarPlaceholder}>👤</div>
          )}
        </div>

        <h3 style={styles.username}>{usuario}</h3>

        <label style={styles.uploadButton}>
          📷 Cambiar foto
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </label>
      </div>

      <div style={styles.card}>
        <h3>⚙️ Cuenta</h3>
        <button onClick={handleLogout} style={styles.logoutButton}>
          🚪 Cerrar sesión
        </button>
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
    padding: "20px",
    margin: "10px 0",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
    textAlign: "center"
  },
  avatarContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px"
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #22c55e"
  },
  avatarPlaceholder: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    background: "#dcfce7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "48px"
  },
  username: {
    color: "#22c55e",
    marginBottom: "15px"
  },
  uploadButton: {
    background: "#22c55e",
    color: "white",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    display: "inline-block"
  },
  logoutButton: {
    background: "#ef4444",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    width: "100%"
  }
};