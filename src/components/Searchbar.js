import React from "react";
function Searchbar(props){
    return (
        <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
        </div>
        <input onChange={e => props.handleSearch(e)} type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
      </div>
    )
}
export default Searchbar;