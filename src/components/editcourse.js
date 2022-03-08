import React, { Component } from 'react'
import editservice from './editservice';
import * as ReactBootStarp from 'react-bootstrap';
import { useParams } from 'react-router-dom';



class editcourse extends Component {
    constructor(props){
        super(props)
        const {id}=useParams
        this.state ={
            coursename:'',
            courseduration:'',
            coursedescription:''
        }
        this.changeCourseNameHandler = this.changeCourseNameHandler.bind(this);
        this.changeCourseDurationHandler = this.changeCourseDurationHandler.bind(this);
        this.changeCourseDescriptionHandler = this.changeCourseDescriptionHandler.bind(this);

    }

    componentDidMount(){
        editservice.getCourseById(this.state.courseid).then( (res) =>{
            let course = res.data;
            this.setState({coursename: course.coursename,
                courseduration: course.courseduration,
                coursedescription: course.courseduration
            });
        });
    }

    updatecourse=(e)=>{
        e.preventDefault();
        let course={coursename:this.state.coursename,courseduration:this.state.courseduration
        ,coursedescription:this.state.coursedescription};
        console.log('course=>'+JSON.stringify(course));
        console.log('courseid=>'+JSON.stringify(this.state.courseid));
        editservice.updatecourse(course,this.state.courseid).then(res=>{
            this.props.history.push('/course');
        })
    }
    changeCourseNameHandler=(event)=>{
        this.setState({coursename:event.target.value});
    }
    changeCourseDurationHandler=(event)=>{
        this.setState({courseduration:event.target.value});
    }
    changeCourseDescriptionHandler=(event)=>{
        this.setState({coursedescription:event.target.value});
    }
    cancel(){
        this.props.history.push('/course');
    }

  render() {
    return (
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
        <ReactBootStarp.Nav.Link href="/admin/editCourse/:id">Edit-Course</ReactBootStarp.Nav.Link>
        <ReactBootStarp.Nav.Link href="/">News Feed</ReactBootStarp.Nav.Link>
    </ReactBootStarp.Nav>
    <ReactBootStarp.Nav>
      <ReactBootStarp.NavDropdown title="More Info" id="collasible-nav-dropdown">
        <ReactBootStarp.NavDropdown.Item href="/admin/Profile">Profile</ReactBootStarp.NavDropdown.Item>
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
            <ReactBootStarp.Form.Control type="text" id="coursename" value={this.state.coursename}
            onChange={this.changeCourseNameHandler} placeholder="Enter Course Name" />
        </ReactBootStarp.Form.Group>

        <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridPassword">
        <ReactBootStarp.Form.Label>Course Duration</ReactBootStarp.Form.Label>
            <ReactBootStarp.Form.Control type="text" id="courseduration" value={this.state.courseduration}
            onChange={this.changeCourseDurationHandler} placeholder="Years/Months" />
        </ReactBootStarp.Form.Group>
    </ReactBootStarp.Row>

        <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="exampleForm.ControlTextarea1">
            <ReactBootStarp.Form.Label>Course Description</ReactBootStarp.Form.Label>
            <ReactBootStarp.Form.Control as="textarea" rows={3} id="coursedescription" value={this.state.coursedescription}
            onChange={this.changeCourseDescriptionHandler} placeholder="Description" />
        </ReactBootStarp.Form.Group>
        <div className="text-center">
            <ReactBootStarp.Button variant="success" size="lg" type="submit" onClick={this.updatecourse} >
                Submit
            </ReactBootStarp.Button>
        </div>
        </ReactBootStarp.Form>
    </div>
      </div>
    )
  }
}

export default editcourse;
