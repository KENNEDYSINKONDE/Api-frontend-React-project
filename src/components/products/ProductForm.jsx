import { useState, useEffect } from "react";
import Button from "../ui/Button";
import { ProductMessages } from "@/constants/messages";

function ProductForm({ initialData = null, onSubmit, onClose }) {
  const [form, setForm] = useState({
    product_name: "",
    product_description: "",
    product_quantity: "",
    product_status: "available",
    product_price: "",
    production_date: "",
    expiry_date: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setForm({ ...initialData });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.product_name) newErrors.product_name = ProductMessages.REQUIRED;
    if (!form.product_quantity) newErrors.product_quantity = ProductMessages.REQUIRED;
    if (!form.product_price) newErrors.product_price = ProductMessages.REQUIRED;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(form);
  };

  return (
    <div className="bg-white shadow-md rounded p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4">{initialData ? "Update Product" : "Add Product"}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField label="Name" name="product_name" value={form.product_name} onChange={handleChange} error={errors.product_name} />
        <TextareaField label="Description" name="product_description" value={form.product_description} onChange={handleChange} />
        <InputField label="Quantity" name="product_quantity" value={form.product_quantity} onChange={handleChange} error={errors.product_quantity} />
        <SelectField label="Status" name="product_status" value={form.product_status} onChange={handleChange} options={["available","out of stock"]} />
        <InputField label="Price" name="product_price" value={form.product_price} onChange={handleChange} error={errors.product_price} />
        <InputField label="Production Date" name="production_date" type="date" value={form.production_date} onChange={handleChange} />
        <InputField label="Expiry Date" name="expiry_date" type="date" value={form.expiry_date} onChange={handleChange} />
        <div className="flex justify-end space-x-2">
          <Button type="submit">{initialData ? "Update" : "Add"}</Button>
          <Button type="button" onClick={onClose} className="bg-gray-500 hover:bg-gray-600">Cancel</Button>
        </div>
      </form>
    </div>
  );
}

// Reusable Inputs for DRY
function InputField({ label, name, value, onChange, type = "text", error }) {
  return (
    <div>
      <label className="block mb-1">{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} className="w-full border rounded px-3 py-2" />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

function TextareaField({ label, name, value, onChange }) {
  return (
    <div>
      <label className="block mb-1">{label}</label>
      <textarea name={name} value={value} onChange={onChange} className="w-full border rounded px-3 py-2" />
    </div>
  );
}

function SelectField({ label, name, value, onChange, options }) {
  return (
    <div>
      <label className="block mb-1">{label}</label>
      <select name={name} value={value} onChange={onChange} className="w-full border rounded px-3 py-2">
        {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
  );
}

export default ProductForm;
