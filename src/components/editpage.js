import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import viewservice from './viewservice';
import * as ReactBootStarp from 'react-bootstrap';

class ViewCourse extends Component{
    

    render(){
        return(
            <div>
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
                    <ReactBootStarp.Button variant="primary" onClick={()=>this.editCourse()}>
                    Update</ReactBootStarp.Button>
                    </ReactBootStarp.Card.Body>
                </ReactBootStarp.Card>
                        </div>
                )
                } 
            </div>
        )
    }

}

export default ViewCourse;