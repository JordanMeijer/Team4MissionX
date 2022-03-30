//This file is for hosting student profile data, as multiple pages need to import images and the like.
// Instead of importing image on each page mutliple times, just import studentProfiles from student
// This is acting as a placeholder as data extracted with an api from our sql database.
// For mission 4 we can just use this file to gather the information and we dont need to change anything else

import StudentProfilePicture1 from './images/Teacher Areas/Ellipse -1.png'
import StudentProfilePicture2 from './images/Teacher Areas/Ellipse -2.png'
import StudentProfilePicture3 from './images/Teacher Areas/Ellipse -3.png'
import StudentProfilePicture4 from './images/Teacher Areas/Ellipse -4.png'
import StudentProfilePicture5 from './images/Teacher Areas/Ellipse -5.png'
import StudentProfilePicture6 from './images/Teacher Areas/Ellipse -6.png'
import StudentProfilePicture7 from './images/Teacher Areas/Ellipse -7.png'
import StudentProfilePicture8 from './images/Teacher Areas/Ellipse -8.png'
import StudentProfilePicture9 from './images/Teacher Areas/Ellipse -9.png'
import StudentProfilePicture10 from './images/Teacher Areas/Ellipse -10.png'
import StudentProfilePicture11 from './images/Teacher Areas/Ellipse -11.png'
import StudentProfilePicture12 from './images/Teacher Areas/Ellipse -12.png'
import StudentProfilePicture13 from './images/Teacher Areas/Ellipse -13.png'
import StudentProfilePicture14 from './images/Teacher Areas/Ellipse -14.png'
import StudentProfilePicture15 from './images/Teacher Areas/Ellipse -15.png'
]

let StudentProfiles = [
    { name: "AIDEN ANDREWS", studentProfilePicture: StudentProfilePicture1, gender: "male", helpRequested: true, dateSubmited: "Tue 28 April 2020", timeSubmited: "10:43 AM" },
    { name: "TOKIO HAN", studentProfilePicture: StudentProfilePicture2, gender: "female", helpRequested: false },
    { name: "HARRY MCRATH", studentProfilePicture: StudentProfilePicture3, gender: "male", helpRequested: false },
    { name: "COURTNEY BRISTOL", studentProfilePicture: StudentProfilePicture4, gender: "female", helpRequested: true, dateSubmited: "Tue 28 April 2020", timeSubmited: "9:52 AM" },
    { name: "LISA HORAN", studentProfilePicture: StudentProfilePicture5, gender: "male", helpRequested: true, dateSubmited: "Mon 27 April 2020", timeSubmited: "4:59 PM" },
    { name: "LUCIA MENDEZ", studentProfilePicture: StudentProfilePicture6, gender: "male", helpRequested: true, dateSubmited: "Mon 27 April 2020", timeSubmited: "3:00 PM" },
    { name: "NAGANI CORTES", studentProfilePicture: StudentProfilePicture7, gender: "female", helpRequested: false },
    { name: "ALICE KINDELLAN", studentProfilePicture: StudentProfilePicture8, gender: "female", helpRequested: false },
    { name: "HANU NEPE", studentProfilePicture: StudentProfilePicture9, gender: "female", helpRequested: false },
    { name: "RAWIRI FLETCHER", studentProfilePicture: StudentProfilePicture10, gender: "male", helpRequested: true, dateSubmited: "Mon 27 April 2020", timeSubmited: "11:23 AM" },
    { name: "SIMON LAINE", studentProfilePicture: StudentProfilePicture11, gender: "male", helpRequested: false },
    { name: "SHANE O'MONAHAN", studentProfilePicture: StudentProfilePicture12, gender: "female", helpRequested: false },
    { name: "JAVIER FUEGO", studentProfilePicture: StudentProfilePicture13, gender: "male", helpRequested: false },
    { name: "NEVEAH MACHENRY", studentProfilePicture: StudentProfilePicture14, gender: "male", helpRequested: false },
    { name: "MARK O'LEARY", studentProfilePicture: StudentProfilePicture15, gender: "male", helpRequested: false },
]
export default StudentProfiles

