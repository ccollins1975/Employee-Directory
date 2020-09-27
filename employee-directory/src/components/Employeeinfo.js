import React from "react";
function Employeeinfo(){
    return (
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Pic</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>age</td>
          </tr>
          <tr>
            <th scope="row">Pic</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>age</td>
          </tr>
          <tr>
            <th scope="row">Pic</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>age</td>
          </tr>
        </tbody>
      </table>
    )
}
export default Employeeinfo;