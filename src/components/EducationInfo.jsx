import React, {useState} from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const EducationInfo = ({onSubmit, data}) => {
    const [schoolName, setSchoolName] = useState(data.schoolName || '');
    const [courseName, setCourseName] = useState(data.courseName || '');
    const [studyDate, setStudyDate] = useState(data.studyDate ? new Date(data.studyDate) : new Date());

    const handleChangeDate = (date) => {
        setStudyDate(date);
    }; 

    const handleSubmit = () => {
        onSubmit({schoolName, courseName, studyDate});
    };

    return(
        <div>
<h2>Education Information.</h2>
<label>School Name:</label>
<input type="text" value={schoolName} onChange={(e) => setSchoolName(e.target.value)}></input>
<label>Course Name:</label>
<input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)}></input>
<label>Study Date:</label>
<DatePicker selected={studyDate} onChange={handleChangeDate}  />
 <button onClick={handleSubmit}>Submit Education Information</button>      
        </div>
    );
};
export default EducationInfo;