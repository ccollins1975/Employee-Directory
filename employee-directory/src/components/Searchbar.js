import React from "react";
function Searchbar(){
    return (
        <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">Search</span>
        </div>
        <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
      </div>
    )
}
export default Searchbar;