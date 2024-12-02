import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Categories = ({ categories, handleEdit, handleDelete, renderForm }) => {
  return (
    <div className="space-y-4 p-4 text-gray-400">
      <h2 className="text-2xl font-bold">Category Management</h2>
      <div className="min-w-full bg-gray-950">
        <div className="flex text-center items-center">
          <p className="font-bold w-1/3 hover:bg-gray-800">Name</p>
          <p className="font-bold w-1/3 hover:bg-gray-800">Description</p>
          <p className="font-bold w-1/3 hover:bg-gray-800">Actions</p>
        </div>
        <div className="justify-around">
          {categories.map((category) => (
            <div className="flex text-center items-center min-w-full hover:bg-gray-800 py-2">
              <p className="w-1/3">{category.name}</p>
              <p className="w-1/3">{category.description}</p>
              <div className="w-1/3 justify-around">
                <button className="pr-10 hover:text-blue-500" onClick={() => handleEdit(category)}>
                  <FaEdit />
                </button>
                <button className=" hover:text-blue-500" onClick={() => handleDelete(category.id)}>
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
