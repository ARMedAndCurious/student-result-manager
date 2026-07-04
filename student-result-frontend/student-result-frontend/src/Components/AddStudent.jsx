import { useState } from "react";
import { addStudent } from "../Services/api";

export default function AddStudent({fetchStudent}){

  const [student, setStudent] = useState({
  name: '',
  email: '',
  rollNumber: ''
});



const handleSubmit = async () => {
  console.log("BUTTON CLICKED");
  console.log(student);
  await addStudent(student)
  await fetchStudent();

  setStudent({
    name:"",
    email:"",
    rollNumber:""
  })

  
  alert("Student added!");
  
};

  return (
  <div className="add-student-form">
    <div className="input-group" style={{ marginBottom: 0 }}>
      <input 
        placeholder="Name"
        value={student.name}
        onChange={e => setStudent({...student, name: e.target.value})}
      />
    </div>
    <div className="input-group" style={{ marginBottom: 0 }}>
      <input 
        placeholder="Email"
        value={student.email}
        onChange={e => setStudent({...student, email: e.target.value})}
      />
    </div>
    <div className="input-group" style={{ marginBottom: 0 }}>
      <input 
        placeholder="Roll Number"
        value={student.rollNumber}
        onChange={e => setStudent({...student, rollNumber: e.target.value})}
      />
    </div>
    <button className="btn-primary" onClick={handleSubmit}>Add Student</button>
  </div>
)
}