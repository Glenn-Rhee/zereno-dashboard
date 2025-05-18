export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-xl bg white p-8 rounded-lg shadow-lg border border-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <div className="mt-5">
          <label className="block text-sm font-medium mb-1 ">Email</label>
          <input
            type="text"
            placeholder="example@gmail.com"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mt-5">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="********"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mt-5">
          <button className="w-full bg-slate-900 text-white py-2 rounded hover:bg-slate-800 transition duration-300">
            Login
          </button>
          <p className="text-center mt-5 text-sm text-blue-600 hover:underline cursor-pointer">
            Dont't have an Acount?
          </p>
        </div>
      </div>
    </div>
  );
}
