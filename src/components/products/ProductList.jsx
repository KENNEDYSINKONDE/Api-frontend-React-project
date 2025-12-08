import { useState } from "react";
import { useProducts } from "@/hooks/product/useProducts";
import { useProductCrud } from "@/hooks/product/useProductCrud";
import ProductForm from "./ProductForm";
import ProductRow from "./ProductRow";
import ProductSearch from "./ProductSearch";
import Button from "../ui/Button";
import { ProductMessages } from "@/constants/messages";

function ProductList() {
  const { products, loading: listLoading, error: listError, refetch } = useProducts();
  const { createProduct, updateProduct, deleteProduct, loading: crudLoading, success, error: crudError, resetStatus } = useProductCrud();

  const [searchKeyword, setSearchKeyword] = useState("");
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const productsToShow = searchKeyword
    ? products.filter(p => p.product_name.toLowerCase().includes(searchKeyword.toLowerCase()))
    : products;

  const handleAddClick = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  const handleFormSubmit = async (data) => {
    if (editingProduct) await updateProduct(editingProduct.id, data);
    else await createProduct(data);

    setShowForm(false);
    resetStatus();
    refetch();
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    refetch();
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Products List</h2>

      <div className="flex justify-between items-center mb-4">
        <ProductSearch onSearch={setSearchKeyword} />
        <Button onClick={handleAddClick}>Add Product</Button>
      </div>

      {showForm && <ProductForm initialData={editingProduct} onSubmit={handleFormSubmit} onClose={() => setShowForm(false)} />}

      {(listLoading || crudLoading) && <p className="text-center text-gray-500 mt-6">Loading...</p>}
      {(listError || crudError) && <p className="text-center text-red-500 mt-6">{listError || crudError}</p>}
      {success && <p className="text-center text-green-500 mt-6">{success}</p>}

      <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200 mt-4">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Description</th>
              <th className="px-6 py-3">Quantity</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Production Date</th>
              <th className="px-6 py-3">Expiry Date</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {productsToShow.length === 0 ? (
              <tr>
                <td colSpan="8" className="px-6 py-4 text-center text-gray-500">{ProductMessages.NOT_FOUND}</td>
              </tr>
            ) : productsToShow.map(p => (
              <ProductRow key={p.id} product={p} onEdit={handleEdit} onDelete={handleDelete} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
