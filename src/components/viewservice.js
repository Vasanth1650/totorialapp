import axios from "axios";
const VIEW_BASE_REST_API_URL = 'http://localhost:8080/course/viewCourse';

class ViewService{
    getAllCourse(){
        return axios.get(VIEW_BASE_REST_API_URL)
    }
    
}

export default new ViewService();