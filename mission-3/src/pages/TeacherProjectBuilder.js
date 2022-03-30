import React from "react";
import StudentTeacherHeader from "../components/StudentTeacherHeader";

export default function TeacherProjectBuilder() {
  return (
    <>
      <StudentTeacherHeader
        render_project_bar={true}
        text_middle="Help Centre"
      />
    </>
  );
}
