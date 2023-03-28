import React,{useState,useEffect}from 'react';
import { Button,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from './Employees';
import { Link, useNavigate } from 'react-router-dom';
import {v4 as uuid} from "uuid"

function Add () {

    const [name, SetName] = useState ('');
    const [age, SetAge] = useState ('');

    let history = useNavigate();

    const handleSubmit = (e) => { 
        e.preventDefault();
      
        const ids = uuid();
        let uniqueId = ids.slice(0, 8);
      
        let a = name;
        let b = age;
      
        Employee.push({ id: uniqueId, Name: a, Age: b });
      
        history("/");
      }

return (
    <div>
        <Form className= "d-grid gap-2" style={{margin:"15 rem"}}>
            <Form.Group className= "mb-3" controlId="formName">
                <Form.Control type="text" placeholder=" Enter your name" required 
                onChange={(e) => SetName(e.target.value)}>
                </Form.Control>

            </Form.Group>

            <Form.Group className= "mb-3" controlId="formAge">
                <Form.Control type="text" placeholder=" Enter your Age" required 
                onChange={(e) => SetAge(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e)=> handleSubmit(e)} type="submit"> Submit</Button>
        </Form>
    </div>

    )
}
export default Add;
