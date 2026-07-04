import { getAllStudents, deleteStudent,} from "../Services/api";


export default function StudentList({ students, setStudents, selectedStudentId, setSelectedStudentId , setResultId}) {

   


    

    const handleDelete = async (id) => {
        await deleteStudent(id);

        const res = await getAllStudents();

       setStudents(prev =>
      prev.filter(student => student.id !== id)
    );
    };

    


    return (
        <>
            <h2 className="mb-4">All Students</h2>
            {students.map(student => (
                <div className="card" key={student.id}>
                    <div className="student-header">
                        <div className="student-info">
                            <h3>{student.name}</h3>
                            <p>{student.email} • Roll No: {student.rollNumber || 'N/A'}</p>
                        </div>
                        <div className="button-group" style={{ marginTop: 0 }}>
                            <button className="btn-primary" onClick={() => setSelectedStudentId(student.id)}>
                                Add Subject
                            </button>
                            <button className="btn-success" onClick={()=> setResultId(student.id)}>
                                View Result
                            </button>
                            <button className="btn-danger" onClick={() => handleDelete(student.id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                    
                    <h4 className="mt-4" style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>Subjects</h4>
                    { (!student.subjects || student.subjects.length === 0)
                    ? <div className="empty-state">No subjects added yet.</div>
                    : (
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Subject</th>
                                        <th>Marks Obtained</th>
                                        <th>Total Marks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {student.subjects.map(subject =>(
                                        <tr key={subject.id}>
                                            <td>{subject.name}</td>
                                            <td>{subject.marksObtained}</td>
                                            <td>{subject.totalMarks}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            ))}
        </>
    )

}
