import { useProduct } from "../../../hook/useProduct"

const DashboardProducts = () => {
  const { products } = useProduct();

  return (
    <div className="">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100 border-b border-gray-200">
          <tr>
            <th className="text-left py-3 px-4 font-semibold w-20  text-gray-700">ID</th>
            <th className="text-left py-3 px-4 font-semibold w-32 text-gray-700">Product Name</th>
            <th className="text-left py-3 px-4 font-semibold  text-gray-700">Product Image</th>
            <th className="text-left py-3 px-4 font-semibold w-20 text-gray-700">Price</th>
            <th className="text-left py-3 px-4 font-semibold  text-gray-700">Quantity</th>
            <th className="text-left py-3 px-4 font-semibold  text-gray-700">Description</th>
            <th className="text-left py-3 px-4 font-semibold  text-gray-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="py-3 px-4">{product.id}</td>
              <td className="py-3 px-4">{product.name}</td>
              <td className="py-3 px-4 w-3 h-1 "><img src={product.image} alt="" className="h-32" /></td>
              <td className="py-3 px-4">{product.price}</td>
              <td className="py-3 px-4 w-24 h-24">{product.quantity}</td>
              <td className="py-3 px-4 w-24 h-24">{product.description}</td>
              <td className="py-3 px-4 w-24 h-24">
                <button className="bg-sky-400 p-3 rounded text-white mr-2">Cập nhật</button>
                <button className="bg-red-400 p-3 rounded text-white">Xóa</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


  )
}

export default DashboardProducts