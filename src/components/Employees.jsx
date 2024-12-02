import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Employees = ({ employees, handleEdit, handleDelete, renderForm }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Employee Management</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.position}</td>
              <td>{employee.phone}</td>
              <td>
                <button onClick={() => handleEdit(employee)}>
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(employee.id)}>
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

export default Employees;
