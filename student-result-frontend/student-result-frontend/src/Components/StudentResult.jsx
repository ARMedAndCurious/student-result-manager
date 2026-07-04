import { useEffect, useState } from "react";
import { getResult } from "../Services/api";

export default function StudentResult({ studentId, setResultId }) {

    const [result, setResult] = useState(null)

    const fetchResult = async () => {
        const res = await getResult(studentId)
        setResult(res.data)
    }

    useEffect(() => {

        fetchResult();
    }, [studentId])

    if (!result) {
    return <p>Loading...</p>;
}

    return (
        <>
            <h2 className="modal-title" style={{ marginTop: 0 }}>Student Result</h2>
            <div className="flex" style={{ flexDirection: 'column', gap: '1rem' }}>
                <div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Name</p>
                    <p style={{ fontWeight: 600, fontSize: '1.1rem' }}>{result.studentName}</p>
                </div>

                <div className="flex justify-between items-center" style={{ backgroundColor: 'var(--background)', padding: '1rem', borderRadius: '8px' }}>
                    <div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Marks</p>
                        <p style={{ fontWeight: 600 }}>{result.totalMarksObtained} / {result.totalMarks}</p>
                    </div>
                    <div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Percentage</p>
                        <p style={{ fontWeight: 600 }}>{result.percentage}%</p>
                    </div>
                    <div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Status</p>
                        <span className={`badge ${result.status === 'PASS' ? 'badge-success' : 'badge-danger'}`}>
                            {result.status}
                        </span>
                    </div>
                </div>

                <div className="button-group justify-between mt-4">
                    <div style={{ flex: 1 }}></div>
                    <button className="btn-secondary" onClick={() => setResultId(null)}>
                        Close
                    </button>
                </div>
            </div>
        </>
    )

}