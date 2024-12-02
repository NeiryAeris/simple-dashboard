import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Categories = ({ categories, handleEdit, handleDelete, renderForm }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Category Management</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>{category.description}</td>
              <td>
                <button onClick={() => handleEdit(category)}>
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(category.id)}>
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

export default Categories;
