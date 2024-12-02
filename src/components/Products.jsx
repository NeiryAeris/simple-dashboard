import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Products = ({ products, handleEdit, handleDelete, renderForm }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Product Management</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td>{product.stock}</td>
              <td>
                <button onClick={() => handleEdit(product)}>
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(product.id)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {renderForm && renderForm()}
    </div>
  );
};

export default Products;
