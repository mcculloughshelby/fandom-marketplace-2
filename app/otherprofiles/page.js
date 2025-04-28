import pool from "../lib/db";

export const dynamic = "force-dynamic";

export default async function OtherProfilesPage() {
  // Pull all users from the DB
  const { rows: users } = await pool.query(
    "SELECT id, username, email FROM users ORDER BY id ASC"
  );

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-[#26547C]">All User Profiles</h1>
      {users.length === 0 ? (
        <div className="text-[#3D405B]">No users found. Please try again later!</div>
      ) : (
        <table className="w-full border shadow bg-white">
          <thead className="bg-[#FFE9C6] text-[#26547C]">
            <tr>
              <th className="py-2 px-2 text-left">ID</th>
              <th className="py-2 px-2 text-left">Username</th>
              <th className="py-2 px-2 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b bg-white">
                <td className="py-1 px-2 text-[#3D405B]">{user.id}</td>
                <td className="py-1 px-2 text-[#26547C] font-semibold">{user.username}</td>
                <td className="py-1 px-2 text-[#8D99AE]">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
