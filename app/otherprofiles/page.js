// app/profile/[id]/page.js
import pool from "../lib/db";

export default async function ProfilePage({ params }) {
  const userId = params.id;

  // Query user from the database
  const { rows } = await pool.query(
    "SELECT id, username, email FROM users WHERE id = $1",
    [userId]
  );
  const user = rows[0];

  if (!user) {
    return (
      <div className="max-w-xl mx-auto py-10 text-center text-[#FF6B6B]">
            This user was unable to be found. Please try again. If you are the user, please make sure you are logged in and have a profile created.
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto py-10 text-center">
      <h1 className="text-3xl font-bold text-[#26547C] mb-2">
        {user.username}
      </h1>
      <p className="text-[#3D405B] mb-4">{user.email}</p>
      <div className="bg-[#FAF3E0] py-6 px-4 rounded-lg shadow text-[#3D405B]">
        <span className="text-xs text-[#8D99AE]">
          User ID: {user.id}
        </span>
      </div>
    </div>
  );
}
