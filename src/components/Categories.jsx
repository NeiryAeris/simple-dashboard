import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Categories = ({ categories, handleEdit, handleDelete, renderForm }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Category Management</h2>
      <div className="min-w-full bg-white">
        <div className="flex text-center items-center">
          <p className="font-bold w-1/3">Name</p>
          <p className="font-bold w-1/3">Description</p>
          <p className="font-bold w-1/3">Actions</p>
        </div>
        <div className="border border-solid justify-around">
          {categories.map((category) => (
            <div className="flex text-center items-center min-w-full">
              <p className="w-1/3">{category.name}</p>
              <p className="w-1/3">{category.description}</p>
              <div className="w-1/3">
                <button onClick={() => handleEdit(category)}>
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(category.id)}>
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {renderForm && renderForm()}
    </div>
  );
};

export default Categories;
