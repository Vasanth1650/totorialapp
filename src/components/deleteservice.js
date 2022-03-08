import axios from "axios";

const VIEW_BASE_REST_API_URL = 'http://localhost:8080/course';

class DeleteService{
    deleteCourseById(courseid){
        return axios.delete(VIEW_BASE_REST_API_URL+'/'+courseid)
    }
    
}

export default new DeleteService();