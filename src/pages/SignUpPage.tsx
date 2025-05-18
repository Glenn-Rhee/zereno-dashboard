export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-xl bg white p-8 rounded-lg shadow-lg border border-gray-200">
        <h1 className="text-2x1 font-bold mb-6 text-center">Sign Up</h1>
        <div className="mb-6">
          <h3 className="font-bold mb-4">Personal Identity</h3>
          <div>
            <label className="block text-sm font-medium mb-1 ">FullName</label>
            <input
              type="text"
              placeholder="Davy Wibowo"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mt-5">
            <label className="block text-sm font-medium mb-1">Gender</label>
            <select className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200">
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <label className="block text-sm font-medium mb-1">Date of Bird</label>
        <input
          type="date"
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
        />
        <div className="mt-5">
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <div className="flex">
            <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 rounded-1-md text-sm">
              +62
            </span>
            <input
              type="text"
              placeholder="Your Number"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
        </div>
        {/* security */}
        <div className="mb-6">
          <h3 className="font-bold mb-4 mt-5">Security Account</h3>
          <div>
            <label className="block text-sm font-medium mb-1 ">Username</label>
            <input
              type="text"
              placeholder="Davy Wibowo"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mt-5">
            <label className="block text-sm font-medium mb-1 ">Email</label>
            <input
              type="text"
              placeholder="example@gmail.com"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="********"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mt-5">
          <label className="block text-sm font-medium mb-1">
            Confirmation Password
          </label>
          <input
            type="password"
            placeholder="********"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* submit */}
        <div className="mt-5">
          <button className="w-full bg-slate-900 text-white py-2 rounded hover:bg-slate-800 transition duration-300">
            SignUp
          </button>

          <p className="text-center mt-5 text-sm text-blue-600 hover:underline cursor-pointer">
            Already have an Account?
          </p>
        </div>
      </div>
    </div>
  );
}
