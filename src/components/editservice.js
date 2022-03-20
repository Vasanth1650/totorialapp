import axios from "axios";

const EDIT_BASE_REST_API_URL = 'http://localhost:8080/course';

class EditService{
   addCourse(course){
       return axios.post(EDIT_BASE_REST_API_URL+'/'+course)
   }
   getCourseById(courseid){
       return axios.get(EDIT_BASE_REST_API_URL+'/'+courseid)
   }
   updateCourse(courseid,course){
       return axios.put(EDIT_BASE_REST_API_URL+'/updatecourse/'+courseid,course);
   }

}

export default new EditService();