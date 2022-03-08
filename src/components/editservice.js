import axios from "axios";

const VIEW_BASE_REST_API_URL = 'http://localhost:8080/course';

class EditService{
    getCourseById(courseid){
        return axios.get(VIEW_BASE_REST_API_URL+'/'+courseid);
    }

    updateCourse(courseid,course){
        return axios.put(VIEW_BASE_REST_API_URL+'/'+course+'/'+courseid);
    }   

    createCourse(addCourse){
        return axios.post(VIEW_BASE_REST_API_URL+'/'+addCourse);
    }


}

export default new EditService();