import { useState } from "react";
import { ProductApi } from "@/services/api/ProductApi";
import { ProductMessages } from "@/constants/messages";

export function useProductCrud() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const resetStatus = () => {
    setError(null);
    setSuccess(null);
  };

  const createProduct = async (data) => {
    setLoading(true);
    resetStatus();
    try {
      await ProductApi.createProduct({
        name: data.product_name,
        description: data.product_description,
        quantity: data.product_quantity,
        status: data.product_status,
        price: data.product_price,
        production_date: data.production_date,
        expiry_date: data.expiry_date,
      });
      setSuccess(ProductMessages.CREATE_SUCCESS);
    } catch (err) {
      console.error(err);
      setError(ProductMessages.ACTION_ERROR);
    } finally {
      setLoading(false);
    }
  };

  const updateProduct = async (id, data) => {
    setLoading(true);
    resetStatus();
    try {
      await ProductApi.updateProduct(id, {
        name: data.product_name,
        description: data.product_description,
        quantity: data.product_quantity,
        status: data.product_status,
        price: data.product_price,
        production_date: data.production_date,
        expiry_date: data.expiry_date,
      });
      setSuccess(ProductMessages.UPDATE_SUCCESS);
    } catch (err) {
      console.error(err);
      setError(ProductMessages.ACTION_ERROR);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    setLoading(true);
    resetStatus();
    try {
      await ProductApi.deleteProduct(id);
      setSuccess(ProductMessages.DELETE_SUCCESS);
    } catch (err) {
      console.error(err);
      setError(ProductMessages.ACTION_ERROR);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, createProduct, updateProduct, deleteProduct, resetStatus };
}
