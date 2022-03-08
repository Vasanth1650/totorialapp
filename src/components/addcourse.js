import './style.css'
import React,{ useState } from "react";
import * as ReactBootStarp from 'react-bootstrap';



function AddCourse(){
    //const[courseid,setCourseid]=useState('')
    const[coursename,setCoursename]=useState('')
    const[coursedescription,setCoursedescription]=useState('')
    const[courseduration,setCourseduration]=useState('')

    
    const handleClick=(e)=>{
        e.preventDefault()
        const addcourse={coursename,coursedescription,courseduration}
        console.log(addcourse)
        fetch("http://localhost:8080/course/addCourse" ,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(addcourse)
        }).then(()=>{
            console.log("New Course Added")
        })
    }


    return(
        <div >
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




    <div>
    <ReactBootStarp.Form>
    <ReactBootStarp.Row className="mb-3">
        <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridEmail">
        <ReactBootStarp.Form.Label>CourseName</ReactBootStarp.Form.Label>
            <ReactBootStarp.Form.Control type="text" id="coursename" value={coursename}
            onChange={(e)=>setCoursename(e.target.value)} placeholder="Enter Course Name" />
        </ReactBootStarp.Form.Group>

        <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridPassword">
        <ReactBootStarp.Form.Label>Course Duration</ReactBootStarp.Form.Label>
            <ReactBootStarp.Form.Control type="text" id="courseduration" value={courseduration}
            onChange={(e)=>setCourseduration(e.target.value)} placeholder="Years/Months" />
        </ReactBootStarp.Form.Group>
    </ReactBootStarp.Row>

        <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="exampleForm.ControlTextarea1">
            <ReactBootStarp.Form.Label>Course Description</ReactBootStarp.Form.Label>
            <ReactBootStarp.Form.Control as="textarea" rows={3} id="coursedescription" value={coursedescription}
            onChange={(e)=>setCoursedescription(e.target.value)} placeholder="Description" />
        </ReactBootStarp.Form.Group>
        <div className="text-center">
            <ReactBootStarp.Button variant="success" size="lg" type="submit" onClick={handleClick} href="/admin/viewCourse">
                Submit
            </ReactBootStarp.Button>
        </div>
        </ReactBootStarp.Form>
    </div>
        </div>
    )
}

export default AddCourse;