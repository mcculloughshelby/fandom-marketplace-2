import pool from "../lib/db"; // Adjust the import path as necessary

export default async function MyProfilePage() {
  const { rows } = await pool.query(
    "SELECT id, username, email FROM users LIMIT 1"
  );
  const user = rows[0];

  if (!user) {
    return <div className="max-w-xl mx-auto py-10 text-center text-[#FF6B6B]">No user profile found. Please create a profile or make sure you're logged in!</div>;
  }

  return (
    <div className="max-w-xl mx-auto py-10 text-center">
      <h1 className="text-3xl font-bold text-[#26547C] mb-2">{user.username}</h1>
      <p className="text-[#3D405B] mb-4">{user.email}</p>
      <div className="bg-[#FAF3E0] py-6 px-4 rounded-lg shadow text-[#3D405B]">
        <span className="text-xs text-[#8D99AE]">User ID: {user.id}</span>
      </div>
    </div>
  );
}
