import React from 'react'

const Adminorders = () => {
  return (
 <>
  <table width="100%" border={1} className="AdminAllProduct-table">
        <thead >
          <th>S.No</th>
          <th>Date</th>
          <th>Order Id</th>
          <th>Amount</th>
          <th>Order Status</th>
        </thead>
       <tr>
        <td>1</td>
        <td>Wed jan 22 2024 at 3:09 AM</td>
        <td>65000f55f550df4s2df1f111sdf0</td>
        <td>INR 1000</td>
        <td><select style={{border:"none"}}>
          <option>Processing...</option>
          <option value="">Delivered</option>
          <option value="">Shipped</option>
          <option value="">Cancelled</option>
        </select></td>
       </tr>
      </table>
 </>
  )
}

export default Adminorders
