import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Dashboard  from "./dashboard/dashboard";
import AddCourse from './components/addcourse';
import ViewCourse from './components/viewcourse';
import DeleteCourse from './components/deletecourse';
import EditCourse from './components/editcourse';
import Profile from './moreinfo/profile';


function App() {
  return (
    <BrowserRouter>
      <div >
          <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route exact path="/admin/addCourse" element={<AddCourse/>}/>
          <Route exact path="/admin/viewCourse" element={<ViewCourse/>}/>
          <Route exact path="/admin/deleteCourse" element={<DeleteCourse/>}/>
          <Route exact path="/admin/editCourse/:id" element={<EditCourse/>}/>
          <Route exact path="/admin/Profile" element={<Profile/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
