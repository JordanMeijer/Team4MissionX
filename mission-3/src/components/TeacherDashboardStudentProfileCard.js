import './TeacherDashboardStudentProfileCard.css'

export default function TeacherDashboardStudentProfileCard({name, studentProfilePicture}
    ) {
    return (   
    <div className="studentProfileCard">
        <img src={studentProfilePicture} alt="dashboard_icon" className='studentProfilePicture'/>
        <h1 className='studentProfileText'>{name}</h1>
    </div>
    )
}