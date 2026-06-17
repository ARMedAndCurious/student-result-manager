import { useState, useEffect } from "react";
import { addStudent } from "../Services/api";

export default function AddStudent(){

    const [student, setStudent] = useState({
  name: '',
  email: '',
  rollNumber: ''
})

const handleSubmit = () => {
  addStudent(student).then(() => {
    alert('Student added!')
    setStudent({ name: '', email: '', rollNumber: '' })
  })
}

    return (
  <>
    <input 
      placeholder="Name"
      value={student.name}
      onChange={e => setStudent({...student, name: e.target.value})}
    />
    <input 
      placeholder="Email"
      value={student.email}
      onChange={e => setStudent({...student, email: e.target.value})}
    />
    <input 
      placeholder="Roll Number"
      value={student.rollNumber}
      onChange={e => setStudent({...student, rollNumber: e.target.value})}
    />
    <button onClick={handleSubmit}>Add Student</button>
  </>
)
}