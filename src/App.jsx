import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import EducationInfo from './components/EducationInfo';
import ExperienceInfo from './components/ExperienceInfo';
import SubmitButton from './components/SubmitButton';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';
const App = () => {
  const [currentSection, setCurrentSection] = useState('personalInfo');
  const [personalInfo, setPersonalInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState({});
  const [experienceInfo, setExperienceInfo] = useState({});

  const handlePersonalSubmit = (data) => {
    setPersonalInfo(data);
    setCurrentSection('educationInfo');
  };
  

  const handleEducationSubmit = (data) => {
    setEducationInfo(data);
    setCurrentSection('experienceInfo');
  }; 

  const handleExperienceSubmit = (data) => {
    setExperienceInfo(data);
  setCurrentSection('submit')
  }; 
  
return(
  <div className='app'>
{currentSection === 'personalInfo' && (
  <PersonalInfo onSubmit={handlePersonalSubmit} data={personalInfo} />
)}
{currentSection === 'educationInfo' && (
  <EducationInfo onSubmit={handleEducationSubmit} data={educationInfo} />
)}
{currentSection === 'experienceInfo' && (
  <ExperienceInfo onSubmit={handleExperienceSubmit} data={experienceInfo}>
  </ExperienceInfo>  
)}
{currentSection === 'submit' && (
        <SubmitButton label="Submit CV" />
      )}
  </div>
);
}; 


export default App;
