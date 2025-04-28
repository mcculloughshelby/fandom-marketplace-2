// import pool from "../lib/db";
// import { redirect } from "next/navigation";

// export const dynamic = "force-dynamic";

// export default function CreateListingPage() {
//   async function createListing(formData) {
//     "use server";
//     const title = formData.get("title");
//     const price = formData.get("price");
//     const description = formData.get("description");
//     const image_url = formData.get("image_url");

//     await pool.query(
//       "INSERT INTO posts (title, price, description, image_url) VALUES ($1, $2, $3, $4)",
//       [title, price, description, image_url]
//     );
//     redirect("/listings");
//   }

//   return (
//     <div className="max-w-xl mx-auto py-10">
//       <h1 className="text-2xl font-bold mb-6 text-[#26547C]">Create a New Listing</h1>
//       <form action={createListing} className="flex flex-col gap-4 bg-[#FFF] p-6 rounded shadow">
//         <label className="font-semibold text-[#3b49c7]">Title</label>
//         <input name="title" required className="border p-2 rounded" />

//         <label className="font-semibold text-[#3b49c7]">Price</label>
//         <input name="price" type="number" step="0.01" required className="border p-2 rounded" />

//         <label className="font-semibold text-[#3b49c7]">Description</label>
//         <textarea name="description" required className="border p-2 rounded" />

//         <label className="font-semibold text-[#3b49c7]">Image URL</label>
//         <input name="image_url" className="border p-2 rounded" />

        

//         <button
//           type="submit"
//           className="mt-4 bg-[#FF6B6B] text-white px-4 py-2 rounded hover:bg-[#26547C]"
//         >
//           Create Listing
//         </button>
//       </form>
//     </div>
//   );
// }


import pool from "../lib/db";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default function CreateListingPage() {
  async function createListing(formData) {
    "use server";
    const title = formData.get("title");
    const price = formData.get("price");
    const description = formData.get("description");
    const image_url = formData.get("image_url");

    await pool.query(
      "INSERT INTO posts (title, price, description, image_url) VALUES ($1, $2, $3, $4)",
      [title, price, description, image_url]
    );
    redirect("/listings");
  }

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6 text-[#26547C]">Create a New Listing</h1>
      <form action={createListing} className="flex flex-col gap-4 bg-[#FFF] p-6 rounded shadow">
        <label className="font-semibold text-[#26547C]">Title</label>
        <input
          name="title"
          required
          className="border p-2 rounded text-[#26547C] placeholder-[#8D99AE]"
          placeholder="Listing title"
        />

        <label className="font-semibold text-[#26547C]">Price</label>
        <input
          name="price"
          type="number"
          step="0.01"
          required
          className="border p-2 rounded text-[#26547C] placeholder-[#8D99AE]"
          placeholder="0.00"
        />

        <label className="font-semibold text-[#26547C]">Description</label>
        <textarea
          name="description"
          required
          className="border p-2 rounded text-[#26547C] placeholder-[#8D99AE]"
          placeholder="Describe your item..."
        />

        <label className="font-semibold text-[#26547C]">Image URL</label>
        <input
          name="image_url"
          className="border p-2 rounded text-[#26547C] placeholder-[#8D99AE]"
          placeholder="https://..."
        />

        <button
          type="submit"
          className="mt-4 bg-[#FF6B6B] text-white px-4 py-2 rounded hover:bg-[#26547C]"
        >
          Create Listing
        </button>
      </form>
    </div>
  );
}
