import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import LoginSignupPage from "./pages/LoginSignupPage";
import Profile from "./pages/Profile";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboardProgressTracker from "./pages/TeacherDashboardProgressTracker";
import TeacherProjectLibrary from "./pages/TeacherProjectLibrary";
import TeacherDashboardStudentProfiles from "./pages/TeacherDashboardStudentProfiles.js";
import TeacherDashboardHelpRequests from "./pages/TeacherDashboardHelpRequests.js";
import TeacherDashboardProjectSubmissions from "./pages/TeacherDashboardProjectSubmissions.js";
import StudentDashboardInstructions from "./pages/StudentDashboardInstructions";
import StudentDashboardVideoTutorial from "./pages/StudentDashboardVideoTutorial";
import StudentDashboardMakeProject from "./pages/StudentDashboardMakeProject";
import StudentDashboardSubmitProject from "./pages/StudentDashboardSubmitProject";
import StudentDashboardBonusChallenge from "./pages/StudentDashboardBonusChallenge";
import StudentDashboardTakeTheQuiz from "./pages/StudentDashboardTakeTheQuiz";

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
              path="/studentdashboard"
              element={<StudentDashboard />}
            />
            <Route
              path="/studentdashboard/instructions"
              element={<StudentDashboardInstructions />}
            />
            <Route
              path="/studentdashboard/videotutorial"
              element={<StudentDashboardVideoTutorial />}
            />
            <Route
              path="/studentdashboard/makeproject"
              element={<StudentDashboardMakeProject />}
            />
            <Route
              path="/studentdashboard/submitproject"
              element={<StudentDashboardSubmitProject />}
            />
            <Route
              path="/studentdashboard/bonuschallenge"
              element={<StudentDashboardBonusChallenge />}
            />
            <Route
              path="/studentdashboard/takethequiz"
              element={<StudentDashboardTakeTheQuiz />}
            />
            <Route
              path="/studentdashboard/instructions"
              element={<StudentDashboardInstructions />}
            />
            <Route
              path="/teacherdashboard/progresstracker"
              element={<TeacherDashboardProgressTracker />}
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
