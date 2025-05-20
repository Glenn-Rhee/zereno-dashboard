export default function LoginPage() {
  return (
    <div className="min-h-screen flex text-black items-center justify-center bg-gray-100">
      <fieldset className="bg-white border border-base-300 rounded-box w-full max-w-2xl p-6 shadow-lg">
        <legend className="text-2xl font-semibold mb-3 text-black ">
          Login
        </legend>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-black">
            Email
          </label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-black">
            Password
          </label>
          <input
            type="password"
            placeholder="********"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mt-4">
          <button className="btn btn-neutral mt-6 w-full">Login</button>
          <p className="text-center mt-5 text-sm text-blue-600 hover:underline cursor-pointer">
            Forgot Password?
          </p>

          <p className="text-center mt-4 text-sm text-blue-600 hover:underline cursor-pointer">
            Already have an Account?
          </p>
        </div>
      </fieldset>
    </div>
  );
}
