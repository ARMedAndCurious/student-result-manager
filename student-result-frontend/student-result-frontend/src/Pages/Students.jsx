import { useState, useEffect } from "react";
import StudentList from "../Components/StudentList";
import AddStudent from "../Components/AddStudent";
import AddSubject from "../Components/AddSubject";
import StudentResult from "../Components/StudentResult";
import { getAllStudents } from "../Services/api";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [resultId, setResultId] = useState(null);

  const fetchStudent = async () => {
    const res = await getAllStudents();
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  return (
    <main className="main-content">
      <div className="card mb-4">
        <h2 className="modal-title" style={{ marginTop: 0 }}>Add New Student</h2>
        <AddStudent fetchStudent={fetchStudent} />
      </div>
      
      <StudentList 
        students={students}
        setStudents={setStudents}
        selectedStudentId={selectedStudentId}
        setSelectedStudentId={setSelectedStudentId} 
        setResultId={setResultId}
      />

      {selectedStudentId && (
        <div className="modal-overlay">
          <div className="modal-content">
            <AddSubject 
              studentId={selectedStudentId}
              setSelectedStudentId={setSelectedStudentId}
              fetchStudent={fetchStudent}
            />
          </div>
        </div>
      )} 

      {resultId && (
        <div className="modal-overlay">
          <div className="modal-content">
            <StudentResult studentId={resultId} setResultId={setResultId} />
          </div>
        </div>
      )} 
    </main>
  );
}
