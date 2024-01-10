import React, {useState} from "react";
import '../styles/PersonalInfo.css'

const PersonalInfo = ({ onSubmit, data}) => {
const [name, setName ] = useState(data.name || '');
const [email, setEmail] = useState(data.email || '');
const [phone, setPhone] = useState (data.phone || '');



const handleSubmit = () => {
    onSubmit({ name, email, phone});
};

return(
    <div className="personal-info">
<h2>Personal Information.</h2>
  <input type="text" value={name} placeholder="Your Full Name " onChange = {(e) => setName(e.target.value)} />  
  <input type="text" value={email}  placeholder="Your email adress " onChange = {(e) => setEmail(e.target.value)} />  
  <input type="text"  value={phone} placeholder="Your Phone Number " onChange = {(e) => setPhone(e.target.value)} />  
  <button onClick={handleSubmit}>Submit Personal Information</button>
  </div>
);
};
export default PersonalInfo;