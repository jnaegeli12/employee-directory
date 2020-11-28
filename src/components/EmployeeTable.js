import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import EmployeeListHeader from './EmployeeListHeader';
import SearchBar from './SearchBar';

function EmployeeTable() {
  const [employees, setEmployees] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortedField, setSortedField] = useState();

  useEffect(() => {
    loadEmployees();
  }, []);

  useEffect(() => {
    sortEmployees();
  });

  function loadEmployees() {
    API.getEmployeeList()
      .then(employees => {
        setEmployees(employees.data.results);
      })
      .catch(err => console.log(err));
  };

  function sortEmployees() {
      let sortedEmployees = [...employees];
      sortedEmployees.sort((a, b) => {
          console.log(a);
          if (a[sortedField] < b[sortedField]) {
              return -1;
          }
          if (a[sortedField] > b[sortedField]) {
              return 1;
          }
          return 0;
      });
  }

  if (employees.length > 0) {
    return (
        <div className="container">
        <SearchBar setSearchValue={setSearchValue} />
        <EmployeeListHeader />
        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col"><button className="btn btn-outline-dark" type="button" onClick={() => setSortedField('first')}>First Name</button></th>
            <th scope="col"><button className="btn btn-outline-dark" type="button" onClick={() => setSortedField('last')}>Last Name</button></th>
            <th scope="col"><button className="btn btn-outline-dark" type="button" onClick={() => setSortedField('username')}>Username</button></th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {employees.filter((line) => {if (line.name.last.includes(searchValue)) {
              return line;
          }}).map((employee, i) => {
              return (
                <tr key={i}>
                    <td><img src={employee.picture.thumbnail} alt="Thumbnail" /></td>
                    <td>{employee.name.first}</td>
                    <td>{employee.name.last}</td>
                    <td>{employee.login.username}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                  </tr>
                )
              })
          }  
        </tbody>
      </table>
      </div>
    )
  }
  return <p>Loading...</p>
}

export default EmployeeTable;