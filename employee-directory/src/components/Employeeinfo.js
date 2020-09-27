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
            <th scope="row">./image/Boba2.jpg</th>
            <td>Boba Fett</td>
            <td>555-555-5555</td>
            <td>bountyhuntersarecute2@mdo.sw</td>
            <td>ageless</td>
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