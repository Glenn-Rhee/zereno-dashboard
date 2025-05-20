function UserPage() {
  return (
    <div className="overflow-x-auto px-54">
      <table className="table table-1xl">
        <thead>
          <tr>
            <th></th>
            <th>Nama</th>
            <th>Email/Username</th>
            <th>No.Telepon</th>
            <th>location</th>
            <th>Tanggal Transaksi</th>
            <th>Total Transaksi</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Ariel</td>
            <td>ariel@gmail.com/arielrizki</td>
            <td>085813615356</td>
            <td>depok</td>
            <td>12/16/2020</td>
            <td>Rp.200.000</td>
            <td>
              <span className="px-2 py-1 border border-green-500 text-white  bg-green-500 rounded font-semibold">
                aktif
              </span>
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>Davy</td>
            <td>davy10@yahoo.com/davywiwi</td>
            <td>081234567890</td>
            <td>Jakarta</td>
            <td>03/12/2021</td>
            <td>Rp.1.200.000</td>
            <td>
              <span className="px-2 py-1 border border-green-500 text-white  bg-green-500 rounded font-semibold">
                aktif
              </span>
            </td>
          </tr>
          <tr>
            <th>3</th>
            <td>Rudi</td>
            <td>rudi.id@gmail.com/rudikeren</td>
            <td>082112233445</td>
            <td>Bandung</td>
            <td>07/25/2022</td>
            <td>Rp.750.000</td>
            <td>
              <span className="px-2 py-1 border border-red-500 text-white bg-red-500 rounded font-semibold">
                nonaktif
              </span>
            </td>
          </tr>
          <tr>
            <th>4</th>
            <td>Fira</td>
            <td>fira_love@hotmail.com/fira</td>
            <td>085212312312</td>
            <td>Surabaya</td>
            <td>01/18/2023</td>
            <td>Rp.950.000</td>
            <td>
              <span className="px-2 py-1 border border-green-500 text-white  bg-green-500 rounded font-semibold">
                aktif
              </span>
            </td>
          </tr>
          <tr>
            <th>5</th>
            <td>Bayu</td>
            <td>bayu78@gmail.com/bayuboss</td>
            <td>083844556677</td>
            <td>Yogyakarta</td>
            <td>09/30/2021</td>
            <td>Rp.430.000</td>
            <td>
              <span className="px-2 py-1 border border-green-500 text-white  bg-green-500 rounded font-semibold">
                aktif
              </span>
            </td>
          </tr>
          <tr>
            <th>6</th>
            <td>Nina</td>
            <td>nina_cantik@yahoo.com/ninanii</td>
            <td>081356789012</td>
            <td>Malang</td>
            <td>05/04/2020</td>
            <td>Rp.820.000</td>
            <td>
              <span className="px-2 py-1 border border-green-500 text-white  bg-green-500 rounded font-semibold">
                aktif
              </span>
            </td>
          </tr>
          <tr>
            <th>7</th>
            <td>Aldi</td>
            <td>aldi_88@gmail.com/aldivibes</td>
            <td>082334455667</td>
            <td>Semarang</td>
            <td>11/22/2022</td>
            <td>Rp.150.000</td>
            <td>
              <span className="px-2 py-1 border border-red-500 text-white bg-red-500 rounded font-semibold">
                nonaktif
              </span>
            </td>
          </tr>
          <tr>
            <th>8</th>
            <td>Maya</td>
            <td>maya.works@gmail.com/mayastar</td>
            <td>085799988877</td>
            <td>Bogor</td>
            <td>06/10/2021</td>
            <td>Rp.1.050.000</td>
            <td>
              <span className="px-2 py-1 border border-green-500 text-white  bg-green-500 rounded font-semibold">
                aktif
              </span>
            </td>
          </tr>
          <tr>
            <th>9</th>
            <td>Fikri</td>
            <td>fikri11@yahoo.com/fikriman</td>
            <td>082198765432</td>
            <td>Bekasi</td>
            <td>10/08/2022</td>
            <td>Rp.620.000</td>
            <td>
              <span className="px-2 py-1 border border-green-500 text-white  bg-green-500 rounded font-semibold">
                aktif
              </span>
            </td>
          </tr>
          <tr>
            <th>10</th>
            <td>Lina</td>
            <td>lina_shop@gmail.com/linacantik</td>
            <td>081245678912</td>
            <td>Tangerang</td>
            <td>04/14/2020</td>
            <td>Rp.1.500.000</td>
            <td>
              <span className="px-2 py-1 border border-green-500 text-white  bg-green-500 rounded font-semibold">
                aktif
              </span>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Nama</th>
            <th>Email/Username</th>
            <th>No.Telepon</th>
            <th>location</th>
            <th>Tanggal Transaksi</th>
            <th>Total Transaksi</th>
            <th>Status</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default UserPage;
