import "./JobColumn.css";
import "./JobCard.css";

const JobColumn = ({ colName }) => {
  return (
    <div className="job-column">
      <h2>{colName}</h2>

      <div className="job-card">
        <h3>Frontend Developer</h3>
        <p>Google</p>
      </div>

      <div className="job-card">
        <h3>React Developer</h3>
        <p>Amazon</p>
      </div>
    </div>
  );
};
export default JobColumn