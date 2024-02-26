import "./AdminAllProduct.css";
import { CiEdit } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const AdminAllProduct = () => {
  return (
    <>
      <table width="100%" border={1} className="AdminAllProduct-table">
        <thead>
          <th>S.No</th>
          <th>Name</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Value</th>
          <th>Action</th>
        </thead>
        <tr>
          <td>1</td>
          <td width="30%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nulla?</td>
          <td>Titan</td>
          <td>5000</td>
          <td>10</td>
          <td>50000</td>
          <td> <span  className="AdminAllProduct-icon-span"><FaEye /></span><span  className="AdminAllProduct-icon-span"><CiEdit /></span><span className="AdminAllProduct-icon-span"><MdDelete /> </span></td>
        </tr>
      </table>
    </>
  )
}

export default AdminAllProduct
