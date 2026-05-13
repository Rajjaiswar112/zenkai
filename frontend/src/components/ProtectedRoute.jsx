export default function Admin() {
  return (
    <div className="min-h-screen bg-black text-white p-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-10">
        <div>
          <h1 className="text-5xl font-bold tracking-wider bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            ZENKAI ADMIN
          </h1>
          <p className="text-gray-400 mt-2">Manage your anime store</p>
        </div>

        <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/30">
          + Add Product
        </button>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:scale-105 transition-all duration-300">
          <h2 className="text-gray-400 text-sm uppercase">Total Products</h2>
          <p className="text-5xl font-bold mt-4">128</p>
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:scale-105 transition-all duration-300">
          <h2 className="text-gray-400 text-sm uppercase">Orders</h2>
          <p className="text-5xl font-bold mt-4">52</p>
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:scale-105 transition-all duration-300">
          <h2 className="text-gray-400 text-sm uppercase">Revenue</h2>
          <p className="text-5xl font-bold mt-4">₹48K</p>
        </div>
      </div>

      {/* Product Table */}
      <div className="relative z-10 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Products</h2>

          <input
            type="text"
            placeholder="Search products..."
            className="bg-black/40 border border-white/10 rounded-xl px-4 py-2 outline-none focus:border-purple-500"
          />
        </div>

        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-white/10 text-gray-400">
              <th className="p-4">Product</th>
              <th className="p-4">Price</th>
              <th className="p-4">Stock</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-white/5 hover:bg-white/5 transition-all">
              <td className="p-4">Gojo LED Plaque</td>
              <td className="p-4">₹1499</td>
              <td className="p-4">12</td>
              <td className="p-4 flex gap-3">
                <button className="px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/40 transition-all">
                  Edit
                </button>

                <button className="px-4 py-2 rounded-xl bg-red-500/20 hover:bg-red-500/40 transition-all">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
