import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllEmpAPI, deleteEmpAPI } from '../services/allAPI';

const Home = () => {
  const [allEmp, setAllEmp] = useState([]);

  useEffect(() => {
    getAllEmp();
  }, []);

  const getAllEmp = async () => {
    try {
      const result = await getAllEmpAPI();
      if (result.status >= 200 && result.status < 300) {
        setAllEmp(result.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      const result = await deleteEmpAPI(id);
      if (result.status >= 200 && result.status < 300) {
        alert('Employee deleted successfully');
        getAllEmp(); 
      } else {
        alert('Failed to delete employee');
      }
    } catch (err) {
      console.error(err);
      alert('Error occurred while deleting the employee');
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>List Of Employees</h1>
      <div className="w-75 rounded bg-white border shadow p-3">
        <div className="d-flex justify-content-center">
          <Link to="/add" className="btn btn-success">
            Add +
          </Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allEmp.map((emp, index) => (
              <tr key={emp.id}>
                <td>{index + 1}</td>
                <td>{emp.username}</td>
                <td>{emp.email}</td>
                <td>{emp.status}</td>
                <td>
                  <Link to={`/edit/${emp.id}`} className="btn btn-sm btn-primary me-2">
                    Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteEmployee(emp.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
