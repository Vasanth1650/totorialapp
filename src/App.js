import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Dashboard  from "./dashboard/dashboard";
import AddCourse from './components/addcourse';
import ViewCourse from './components/viewcourse';
import DeleteCourse from './components/deletecourse';
import EditCourse from './components/editcourse';
import EditPage from './components/editpage'


function App() {
  return (
    <BrowserRouter>
      <div >
          <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route exact path="/admin/addCourse" element={<AddCourse/>}/>
          <Route exact path="/admin/viewCourse" element={<ViewCourse/>}/>
          <Route exact path="/admin/deleteCourse" element={<DeleteCourse/>}/>
          <Route exact path="/admin/editPage" element={<EditPage/>}/>
          <Route exact path="/admin/editCourse/:courseid" element={<EditCourse/>}/>
          
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
