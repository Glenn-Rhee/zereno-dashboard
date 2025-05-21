import Container from "../Components/Container";

export default function ProductPage() {
  return (
    <Container>
      <div className="overflow-x-auto">
        <div className="relative z-30">
          <button className="btn bg-green-500">Insert</button>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className="grow" placeholder="Search" />
            <kbd className="kbd kbd-sm">⌘</kbd>
            <kbd className="kbd kbd-sm">K</kbd>
          </label>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="ps-20">Products</th>
              <th>Category</th>
              <th className="ps-7">Price</th>
              <th>Stock</th>
              <th className="ps-15">Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://images.tokopedia.net/img/cache/700/VqbcmM/2024/9/5/250f96df-1b57-4ff8-aa60-be6b6d6db356.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Monitor Lg 200 hz</div>
                  </div>
                </div>
              </td>
              <td>Elektronik</td>
              <td>Rp.2.150.000</td>

              <td className="ps-6">
                <span className=" text-center">23</span>
              </td>

              <th>
                <button className="btn mr-5 bg-yellow-500">Edit</button>
                <button className="btn bg-red-500">Del</button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://nixx.co.id/wp-content/uploads/2024/11/NEON-GREEN.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Nixx filter+</div>
                  </div>
                </div>
              </td>
              <td>Cigaretes</td>
              <td>Rp.450.000</td>

              <td className="ps-6">
                <span className=" text-center">11</span>
              </td>

              <th>
                <button className="btn mr-5 bg-yellow-500">Edit</button>
                <button className="btn bg-red-500">Del</button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQptuCciJDa4voaRTRMytrg5s_iU_-2gYvdgQ&s"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Adidas Samba</div>
                  </div>
                </div>
              </td>
              <td>Fashion</td>
              <td>Rp.1.800.000</td>

              <td className="ps-6">
                <span className=" text-center">9</span>
              </td>

              <th>
                <button className="btn mr-5 bg-yellow-500">Edit</button>
                <button className="btn bg-red-500">Del</button>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://down-id.img.susercontent.com/file/id-11134201-7r98q-lpj4mzp1rmqnd3"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Vortex xera-87</div>
                  </div>
                </div>
              </td>
              <td>Elektronik</td>
              <td>Rp.650.000</td>

              <td className="ps-6">
                <span className=" text-center">17</span>
              </td>

              <th>
                <button className="btn mr-5 bg-yellow-500">Edit</button>
                <button className="btn bg-red-500">Del</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
}
