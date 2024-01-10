import React, {useState} from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const ExperienceInfo = ({onSubmit, data}) => {
    const [companyName, setCompanyName] = useState(data.companyName || '');
    const [positionTitle, setPositionTitle] = useState(data.positionTitle || '');
    const [responsibilities, setResponsibilities] = useState(data.responsibilities || '');
    const [workDate, setWorkDate] =useState(data.workDate ? new Date(data.workDate) : new Date());

    const handleChangeDate = (date) => {
        setWorkDate(date);
    };

    const handleSubmit = () => {
        onSubmit({companyName, positionTitle, responsibilities, workDate});
    };

    return(
        <div>
        <h2>Experience Information.</h2>
        <label>Company Name:</label>
        <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)}></input>
        <label>Position Held:</label>
       <input type="text" value={positionTitle} onChange={(e) => setPositionTitle(e.target.value)}></input>
       <label>Duties and Responsibilities:</label>
       <input type="text" value={responsibilities} onChange={(e) => setResponsibilities(e.target.value)}></input>
       <label>Work Date:</label>
       <DatePicker selected={workDate} onChange={handleChangeDate} />
        <button onClick={handleSubmit}> Submit Experience Information</button>
        </div>
    );
};
export default ExperienceInfo;