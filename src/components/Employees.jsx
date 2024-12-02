import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Employees = ({ employees, handleEdit, handleDelete, renderForm }) => {
  return (
    <div className="space-y-4 p-4 text-gray-100">
      <h2 className="text-2xl font-bold">Employee Management</h2>

      {/* Header */}
      <div className="grid grid-cols-6 gap-4 font-bold bg-gray-200 p-4 text-black">
        <div>Name</div>
        <div>Email</div>
        <div>Position</div>
        <div>Phone</div>
        <div className="text-right col-span-2">Actions</div>
      </div>

      {/* Employee Rows */}
      {employees.map((employee) => (
        <div key={employee.id} className="grid grid-cols-6 gap-4 p-4 border-b items-center">
          <div>{employee.name}</div>
          <div>{employee.email}</div>
          <div>{employee.position}</div>
          <div>{employee.phone}</div>
          <div className="flex justify-end space-x-2 col-span-2">
            <button
              onClick={() => handleEdit(employee)}
              className="text-blue-500 hover:text-blue-700"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => handleDelete(employee.id)}
              className="text-red-500 hover:text-red-700"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}

      {/* Render Form */}
      {renderForm && renderForm()}
    </div>
  );
};

export default Employees;
