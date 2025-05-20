export default function SignUpPage() {
  return (
    <div className="min-h-screen flex text-black items-center justify-center bg-gray-100">
      <fieldset className="bg-white border border-base-300 rounded-box w-full max-w-xl p-6 shadow-lg">
        <legend className="text-2xl font-semibold mb-3 text-black">
          Sign Up
        </legend>

        {/* Personal Identity */}
        <div className="mb-6">
          <h3 className="font-bold mb-4 text-black">Personal Identity</h3>

          {/* Fullname & Gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                name="fullname"
                className="w-full border rounded px-3 py-2"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Gender</label>
              <select name="gender" className="w-full border rounded px-3 py-2">
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
        </div>

        {/* Date of Birth & Phone Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-1 font-medium">Date of Birth</label>
            <input
              type="date"
              className="input bg-white border border-base-300 "
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 border border-r-0 rounded-l bg-gray-100 text-gray-600">
                +62
              </span>
              <input
                type="tel"
                name="phone"
                className="w-full border border-l-0 rounded-r px-3 py-2"
                placeholder="812345678"
              />
            </div>
          </div>
        </div>

        {/* Security Account */}
        <div className="mb-6">
          <h3 className="font-bold mb-4 text-black">Security Account</h3>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-black">
              Username
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-black">
              Email
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              required
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
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-black">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
        </div>

        {/* Submit */}
        <div className="mt-5">
          <button className="w-full bg-slate-900 text-white py-2 rounded hover:bg-slate-800 transition duration-300">
            Sign Up
          </button>
          <p className="text-center mt-5 text-sm text-blue-600 hover:underline cursor-pointer">
            Already have an account? Login
          </p>
        </div>
      </fieldset>
    </div>
  );
}
