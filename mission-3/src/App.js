import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import LoginSignupPage from "./pages/LoginSignupPage";
import Profile from "./pages/Profile";
import StudentProjectBuilder from "./pages/StudentProjectBuilder";
import StudentProjectLibrary from "./pages/StudentsProjectLibrary";
import TeacherDashboardProgressTracker from "./pages/TeacherDashboardProgressTracker";
import TeacherProjectBuilder from "./pages/TeacherProjectBuilder";
import TeacherProjectLibrary from "./pages/TeacherProjectLibrary";
import TeacherDashboardStudentProfiles from "./pages/TeacherDashboardStudentProfiles.js";
import TeacherDashboardHelpRequests from "./pages/TeacherDashboardHelpRequests.js";
import TeacherDashboardProjectSubmissions from "./pages/TeacherDashboardProjectSubmissions.js";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loginSignupPage" element={<LoginSignupPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/studentprojectbuilder"
              element={<StudentProjectBuilder />}
            />
            <Route
              path="/studentprojectlibrary"
              element={<StudentProjectLibrary />}
            />
            <Route
              path="/teacherdashboard/progresstracker"
              element={<TeacherDashboardProgressTracker />}
            />
            <Route
              path="/teacherdashboard"
              element={<TeacherDashboardProgressTracker />}
            />
            <Route
              path="/teacherprojectbuilder"
              element={<TeacherProjectBuilder />}
            />
            <Route
              path="/teacherprojectlibrary"
              element={<TeacherProjectLibrary />}
            />
            <Route
              path="/teacherdashboard/studentprofiles"
              element={<TeacherDashboardStudentProfiles />}
            />
            <Route
              path="/teacherdashboard/helprequests"
              element={<TeacherDashboardHelpRequests />}
            />
            <Route
              path="/teacherdashboard/projectsubmissions"
              element={<TeacherDashboardProjectSubmissions />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
