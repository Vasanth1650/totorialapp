import  { useEffect } from "react";
import React,{useState} from 'react';
import * as ReactBootStarp from 'react-bootstrap';
import viewservice from "./viewservice";

const  ViewCourse = () =>{

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
        <ReactBootStarp.Nav.Link href="/admin/editPage">Edit-Course</ReactBootStarp.Nav.Link>
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
            <ReactBootStarp.Card.Header>Info : {course.courseid}</ReactBootStarp.Card.Header>
        <ReactBootStarp.Card.Body>
        <ReactBootStarp.Card.Title>Course Name: {course.coursename}</ReactBootStarp.Card.Title>
        <ReactBootStarp.Card.Text>Course Description: {course.coursedescription}</ReactBootStarp.Card.Text>
        <ReactBootStarp.Card.Text>Course Duration: {course.courseduration}</ReactBootStarp.Card.Text>
        </ReactBootStarp.Card.Body>
    </ReactBootStarp.Card>
            </div>
    )
    }
        </div>
    )
}

export default ViewCourse;