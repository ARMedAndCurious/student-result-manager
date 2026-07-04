import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="main-content">
      <h1 className="mb-4">Welcome to Student Result Manager</h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
        A comprehensive system to manage student profiles, add subjects, and automatically calculate performance results.
      </p>

      <div className="add-student-form" style={{ gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="card" style={{ marginBottom: 0 }}>
          <h3 className="mb-4">Add Students</h3>
          <p style={{ color: 'var(--text-muted)' }}>Quickly register new students with their roll numbers and email addresses.</p>
        </div>
        <div className="card" style={{ marginBottom: 0 }}>
          <h3 className="mb-4">Add Subjects</h3>
          <p style={{ color: 'var(--text-muted)' }}>Assign subjects to individual students along with marks obtained.</p>
        </div>
        <div className="card" style={{ marginBottom: 0 }}>
          <h3 className="mb-4">View Results</h3>
          <p style={{ color: 'var(--text-muted)' }}>Generate instant result cards showing overall percentage and pass/fail status.</p>
        </div>
        <div className="card" style={{ marginBottom: 0 }}>
          <h3 className="mb-4">Automatic Calculation</h3>
          <p style={{ color: 'var(--text-muted)' }}>Let the system handle the percentage calculations and status evaluation automatically.</p>
        </div>
      </div>

      <button className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }} onClick={() => navigate('/students')}>
        Go to Students
      </button>
    </div>
  );
}
