import  { useEffect } from "react";
import React,{useState} from 'react';
import * as ReactBootStarp from 'react-bootstrap';
import viewservice from "./viewservice";
import deleteservice from "./deleteservice";
const DeleteCourse = () => {

    const[course,setCourse] = useState([])

    useEffect(()=> {
        getAllCourse();
    },[])

    const getAllCourse=()=>{
        viewservice.getAllCourse().then((response)=>{
            setCourse(response.data)
            console.log(response.data)
        }).catch(error=>{
            console.log(error);
        })
    }

    const deleteCourseById = (courseid)=>{
        deleteservice.deleteCourseById(courseid).then((response)=>{
            getAllCourse();
        }).catch(error=>{
            console.log(error);
        })
    }


    return(
        <div>
            <ReactBootStarp.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <ReactBootStarp.Container>
        <ReactBootStarp.Navbar.Brand href="/">Course_Management</ReactBootStarp.Navbar.Brand>
        <ReactBootStarp.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStarp.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStarp.Nav className="me-auto">
        <ReactBootStarp.Nav.Link href="/admin/addCourse">Add-Course</ReactBootStarp.Nav.Link>
        <ReactBootStarp.Nav.Link href="/admin/viewCourse">View-Course</ReactBootStarp.Nav.Link>
        <ReactBootStarp.Nav.Link href="/admin/deleteCourse">Delete-Course</ReactBootStarp.Nav.Link>
        <ReactBootStarp.Nav.Link href="/admin/editCourse/:courseid">Edit-Course</ReactBootStarp.Nav.Link>
        <ReactBootStarp.Nav.Link href="/">News Feed</ReactBootStarp.Nav.Link>
    </ReactBootStarp.Nav>
    <ReactBootStarp.Nav>
      <ReactBootStarp.NavDropdown title="More Info" id="collasible-nav-dropdown">
        <ReactBootStarp.NavDropdown.Item href="#action/3.1">Profile</ReactBootStarp.NavDropdown.Item>
        <ReactBootStarp.NavDropdown.Item href="#action/3.2">Help&Support</ReactBootStarp.NavDropdown.Item>
        <ReactBootStarp.NavDropdown.Item href="#action/3.3">About</ReactBootStarp.NavDropdown.Item>
        <ReactBootStarp.NavDropdown.Divider />
        <ReactBootStarp.NavDropdown.Item href="#action/3.4">LogOut</ReactBootStarp.NavDropdown.Item>
        </ReactBootStarp.NavDropdown>
      </ReactBootStarp.Nav>
      </ReactBootStarp.Navbar.Collapse>
    </ReactBootStarp.Container>
    </ReactBootStarp.Navbar>
    {
    course.map(
            course=>
            <div>
    <ReactBootStarp.Card>
            <ReactBootStarp.Card.Header>{course.courseid}</ReactBootStarp.Card.Header>
        <ReactBootStarp.Card.Body>
        <ReactBootStarp.Card.Title>{course.coursename}</ReactBootStarp.Card.Title>
        <ReactBootStarp.Card.Text>
             {course.coursedescription}
        </ReactBootStarp.Card.Text>
        <ReactBootStarp.Card.Text>
             {course.courseduration}
        </ReactBootStarp.Card.Text>
        <ReactBootStarp.Button variant="primary" onClick={()=>deleteCourseById(course.courseid)}>
        Delete</ReactBootStarp.Button>
        </ReactBootStarp.Card.Body>
    </ReactBootStarp.Card>
    
    </div>
    )
    }
        </div>
    )
}

export default DeleteCourse;

