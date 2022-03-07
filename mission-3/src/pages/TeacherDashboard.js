import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../App.css';
import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar.js'
import ProgressTracker from '../components/ProgressTracker.js'
import StudentProfiles from '../components/StudentProfiles.js'
import HelpRequests from '../components/HelpRequest.js'
import ProjectSubmissions from '../components/ProjectSubmissions.js'
import { Link } from 'react-router-dom';

export default function TeacherDashboard() {
    return (
        <div>
            <div>
                {/* <Header /> */}
            </div>
            <div class='Dashboard'> 
                <SideBar />
                <BrowserRouter>
                    <Routes>
                        <Route path="/teacherdashboard" element={<ProgressTracker />} />
                        <Route path="/teacherdashboard/progresstracker" element={<ProgressTracker />} />
                        <Route path="/teacherdashboard/studentprofiles" element={<StudentProfiles />} />
                        <Route path="/teacherdashboard/helprequests" element={<HelpRequests />} />
                        <Route path="/teacherdashboard/projectsubmissions" element={<ProjectSubmissions />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}