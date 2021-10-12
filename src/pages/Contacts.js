import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';


const Contacts = () => {
    const [stateList, setStateList] = useState([]);
    const [myQuery, setMyQuery] = useState({_sort:'', _order:''});

    useEffect(async () => {
        const myRes = await axios.get('http://jsonplaceholder.typicode.com/users', { params: myQuery });
        setStateList(myRes.data);        
    }, [myQuery] );

    const klikSort = () => {
        let noviQuery = {...myQuery, _sort:'username', _order:'asc'};
        setMyQuery(noviQuery);
    }
    const klikSort1 = () => {
        let noviQuery = {...myQuery, _sort:'username', _order:'desc'};
        setMyQuery(noviQuery);
    }
    const klikSort2 = () => {
        let noviQuery = { _sort:'', _order:''};
        setMyQuery(noviQuery);
    }


    return (
        <div>
        <table className="content-table">
            <thead>
                <tr>
                    <td>Name</td>
                    <td> Surname </td>
                    <td>Email</td>
                    <td>Address</td>
                    <td>Street</td>
                </tr>
            </thead>    
            <tbody>
                {stateList.map((item)=>(
                <tr>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.username}</td>
                    <td>{item.address.street}</td>
                </tr>
                ))}
            </tbody>
            
        </table>  
            <div className="dropdown">
                <div className="dropdown-hover">Sort by: 
                     <button className="dropdown-hover" onClick={klikSort}>|ASC|</button>
                    <button className="dropdown-hover" onClick={klikSort1}>|DESC|</button>
                    <button className="dropdown-hover" onClick={klikSort2}>|REFRESH|</button>
                </div> 
            </div>

        </div>  
        
    )
   
}

export default Contacts;
