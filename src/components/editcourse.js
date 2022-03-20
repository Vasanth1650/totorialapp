import React,{useState,useEffect} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import EditService from './editservice'
import * as ReactBootStarp from 'react-bootstrap';

const UpdateComponent = () =>{
    const[coursename,setCoursename]=useState('')
    const[coursedescription,setCoursedescription]=useState('')
    const[courseduration,setCourseduration]=useState('')
    const navigate = useNavigate();
    const{courseid}=useParams();

    const UpdateCourse = (e)=>{
        e.preventDefault();
        const course = {coursename,coursedescription,courseduration}
        if(courseid){
            EditService.updateCourse(courseid,course).then((response)=>{
                navigate('/admin/editPage')
            }).catch(error=>{
                console.log(error)
            })
        }else{
            EditService.addCourse(course).then((response)=>{
                console.log(response.data)
                navigate('/admin/editPage')
            }).catch(error=>{
                console.log(error)
            })
        }
    }

    useEffect(()=>{
        EditService.getCourseById(courseid).then((response)=>{
            setCoursename(response.data.coursename)
            setCoursedescription(response.data.coursedescription)
            setCourseduration(response.data.courseduration)
        }).catch(error=>{
            console.log(error)
        })
    },[])


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
            <ReactBootStarp.Button variant="success" size="lg" type="submit" onClick={(e)=>UpdateCourse(e)} >
                Submit
            </ReactBootStarp.Button>
        </div>
        </ReactBootStarp.Form>
        </div>




        </div>
    )

}

export default UpdateComponent