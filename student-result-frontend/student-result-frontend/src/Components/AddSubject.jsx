import { useState } from "react";
import { addSubject } from "../Services/api";

export default function AddSubject({ studentId, setSelectedStudentId, fetchStudent}) {

    const [subject, setSubject] = useState({
        name: "",
        marksObtained: "",
        totalMarks: ""
    });

    const handleSubmit = async () => {

        try {
            await addSubject(studentId, subject);

            await fetchStudent();

            setSelectedStudentId(null)
            setSubject({
                name: "",
                marksObtained: "",
                totalMarks: ""
            });
        } catch(err){
            console.error(err);
        }

    }

    return (
        <>
            <h2 className="modal-title" style={{ marginTop: 0 }}>Add Subject</h2>
            
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Subject Name"
                    value={subject.name}
                    onChange={(e) => setSubject({ ...subject, name: e.target.value })} />
            </div>

            <div className="input-group">
                <input
                    type="number"
                    placeholder="Marks Obtained"
                    value={subject.marksObtained}
                    onChange={(e) => setSubject({ ...subject, marksObtained: e.target.value })} />
            </div>

            <div className="input-group">
                <input
                    type="number"
                    placeholder="Total Marks"
                    value={subject.totalMarks}
                    onChange={(e) => setSubject({ ...subject, totalMarks: e.target.value })
                    } />
            </div>

            <div className="button-group justify-between mt-4">
                <button className="btn-secondary" onClick={() => setSelectedStudentId(null)}>
                    Cancel
                </button>
                <button className="btn-primary" onClick={() => handleSubmit()}>
                    Save Subject
                </button>
            </div>
        </>
    )
}