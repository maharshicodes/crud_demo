import React, { Fragment } from 'react';
import {Button, Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from './Employees';
import {Link, useNavigate} from 'react-router-dom'
function Home (){

    let history = useNavigate();

    const handleDelte = (id) => {
        var index = Employee.map(function(e){
            return e.id
        }).indexOf(id);

        Employee.splice (index,1);
        history('/');
    }
    const handleEdit = (id, name, age) => {
     localStorage.setItem ('Name', name);
     localStorage.setItem ('Age', age);
     localStorage.setItem ('Id', id);

    }

    return (
            <Fragment>
                <div style={{margin: "10rem"}}> 
                <Table striped bordered hover size= "sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Action
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employee && Employee.length > 0 
                            ?
                            Employee.map((item)=>{
                                return(
                                    <tr>
                                     <td>
                                        {item.Name}
                                     </td>
                                    <td>
                                        {item.Age}
                                    </td>
                                    <td>
                                        <Link to={`/edit`}>
                                        <Button onClick={()=> handleEdit(item.id,item.Age,item.Name)}>
                                            Edit
                                        </Button>
                                        </Link>
                                        &nbsp;
                                        <Button onClick={()=> handleDelte(item.id)}>
                                            Delete
                                        </Button> 
                                    </td>
                                    </tr>
                                )
                            })
                            :
                            "NO Data available"
                        }
                    </tbody>
                </Table>
                <br>
                </br>
                <Link className= "d-grid gap-2" to= "/create">
                    <Button size="sm">
                        Create

                    </Button>
                </Link>
                
                </div>
            </Fragment>
    )
}

export default Home;