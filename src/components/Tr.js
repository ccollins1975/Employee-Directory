import React from "react";



function Tablerow(props) {
    return (
        <tr key={props.keyProp}>
            <td><img src={props.image} alt={props.name[0]}></img></td>
            <td>{props.name[0]} {props.name[1]}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.DOB}</td>
        </tr>
    );
}


export default Tablerow;