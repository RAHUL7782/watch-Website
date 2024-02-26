import "./AdminAddProduct.css";
const AdminAddProduct = () => {
  return (
    <>
      <div className="AdminAddProduct-main">
      <div className="AdminAddProduct-container">
      <h1>Add Product</h1>
      <input type="text" placeholder="Product Name.." />
      <input type="text" placeholder="Product Color.." />
      <input type="text" placeholder="Original Price.." />
      <input type="text" placeholder="Discounted Price.." />
         
      </div>
        
      </div>
    </>
  )
}

export default AdminAddProduct
