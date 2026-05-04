export default function Profile({ profilePic, handleFileChange }) {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Perfil de Usuario</h2>
      {profilePic ? (
        <img src={profilePic} alt="Perfil" className="w-24 h-24 rounded-full mb-4" />
      ) : (
        <div className="mb-4 text-sm text-gray-600">No has subido una foto de perfil.</div>
      )}
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
}