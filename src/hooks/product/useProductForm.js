import { useState } from "react";
import { PRODUCT_FIELDS } from "@/constants/fields";
import { ProductMessages } from "@/constants/messages";

export function useProductForm(initialData = null) {
  const [form, setForm] = useState(initialData || PRODUCT_FIELDS);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.product_name) newErrors.product_name = ProductMessages.REQUIRED;
    if (!form.product_quantity) newErrors.product_quantity = ProductMessages.REQUIRED;
    if (!form.product_price) newErrors.product_price = ProductMessages.REQUIRED;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    form,
    errors,
    handleChange,
    validate,
    setForm,
  };
}
