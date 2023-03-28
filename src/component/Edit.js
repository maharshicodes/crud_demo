import React,{useState,useEffect}from 'react';
import { Button,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from './Employees';
import { Link, useNavigate } from 'react-router-dom';
import {v4 as uuid} from "uuid"

function Edit(){
    const [name, setName] = useState ('');
    const [age, setAge] = useState ('');

    const [id, setId] = useState ('');

    let history = useNavigate();
    var index = Employee.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => { 
        e.preventDefault();
      
        let a = Employee [index];
        a.Name = name;
        a.Age = age;
      
        history.push("/");
      }

      useEffect(()=> {
          setName(localStorage.getItem('Name'))
          setAge(localStorage.getItem('Age'))
          setId(localStorage.getItem('Id'))
      })

    return(
        <div>
            <Form className= "d-grid gap-2" style={{margin:"15 rem"}}>
            <Form.Group className= "mb-3" controlId="formName">
                <Form.Control type="text" placeholder=" Enter your name" value={name} required 
                onChange={(e) => setName(e.target.value)}>
                </Form.Control>

            </Form.Group>
            <Form.Group className= "mb-3" controlId="formAge">
                <Form.Control type="text" placeholder=" Enter your Age" value={age} required 
                onChange={(e) => setAge(e.target.value)}>
                </Form.Control>

            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit"> Update</Button>
        </Form>
        </div>
    )
}

export default Edit