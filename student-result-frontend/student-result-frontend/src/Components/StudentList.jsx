import { useState, useEffect} from "react";
import { getAllStudents } from "../Services/api";

export default function StudentList(){
    const[students, setStudents] = useState([]);

    useEffect(()=>{
        getAllStudents().then(res => setStudents(res.data))
    }, [])


    return(
        <>
        <h2>All Students :</h2>
        {students.map(student =>(
            <div key={student.id}>
                <p>{student.name}- {student.email}</p>
            </div>
        ))}
        </>
    )

}
