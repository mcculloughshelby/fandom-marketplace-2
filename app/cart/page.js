import pool from "../lib/db";
import { revalidatePath } from "next/cache";

// Server action to remove a cart item
export async function removeFromCart(formData) {
  "use server";
  const cartId = formData.get("cartId");
  await pool.query("DELETE FROM cart WHERE id = $1", [cartId]);
  revalidatePath("/cart");
}

export const dynamic = "force-dynamic";

export default async function CartPage() {
  // Fetch cart items with post details
  const { rows: cartItems } = await pool.query(`
    SELECT cart.id, cart.user_id, cart.post_id,
           posts.title, posts.price, posts.image_url
    FROM cart
    JOIN posts ON cart.post_id = posts.id
    ORDER BY cart.id ASC
  `);

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-[#26547C]">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-[#3D405B]">Your cart is empty.</div>
      ) : (
        <table className="w-full border shadow bg-white">
          <thead className="bg-[#FFE9C6] text-[#26547C]">
            <tr>
              <th className="py-2 px-2 text-left">Image</th>
              <th className="py-2 px-2 text-left">Title</th>
              <th className="py-2 px-2 text-left">Price</th>
              <th className="py-2 px-2 text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id} className="border-b bg-white">
                <td className="py-1 px-2">
                  {item.image_url ? (
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-16 h-12 object-cover rounded"
                    />
                  ) : (
                    <span className="text-[#8D99AE]">No image</span>
                  )}
                </td>
                <td className="py-1 px-2 text-[#26547C] font-semibold">{item.title}</td>
                <td className="py-1 px-2 text-[#3D405B]">${Number(item.price).toFixed(2)}</td>
                <td className="py-1 px-2">
                  <form
                    action={removeFromCart}
                    // Use classic HTML confirmation so no React client code is needed!
                    onSubmit="return confirm('Remove this item from your cart?')"
                  >
                    <input type="hidden" name="cartId" value={item.id} />
                    <button
                      type="submit"
                      className="bg-[#FF6B6B] hover:bg-[#26547C] text-white px-2 py-1 rounded"
                    >
                      Remove
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            {/* Total row */}
            <tr>
              <td colSpan={2} className="text-right font-bold py-2 text-[#26547C]">Total:</td>
              <td colSpan={2} className="font-bold py-2 text-[#26547C]">
                ${cartItems.reduce((acc, item) => acc + Number(item.price), 0).toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
