import Button from "../ui/Button";

function ProductRow({ product, onEdit, onDelete }) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-6 py-4">{product.product_name}</td>
      <td className="px-6 py-4">{product.product_description}</td>
      <td className="px-6 py-4">{product.product_quantity}</td>
      <td className={`px-6 py-4 font-semibold ${product.product_status==="available"?"text-green-600":"text-red-600"}`}>
        {product.product_status}
      </td>
      <td className="px-6 py-4">{product.product_price}</td>
      <td className="px-6 py-4">{product.production_date}</td>
      <td className="px-6 py-4">{product.expiry_date}</td>
      <td className="px-6 py-4 space-x-2">
        <Button onClick={() => onEdit(product)}>Edit</Button>
        <Button onClick={() => onDelete(product.id)} className="bg-red-500 hover:bg-red-600">Delete</Button>
      </td>
    </tr>
  );
}

export default ProductRow;
