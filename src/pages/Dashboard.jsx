import JobColumn from "../components/JobColumn";
import Navbar from "../components/Navbar";
import "./Dashboard.css";

const Dashboard = () => {
  const columns = [
    "Applied",
    "Resume Viewed",
    "Reverted",
    "Shortlisted",
    "Interview",
    "HR Round",
    "Offer",
    "Rejected",
  ];
  return (
   <div className="dashboard">
  <Navbar />

  <div className="board">
    {columns.map((col) => (
      <JobColumn key={col} colName={col} />
    ))}
  </div>
</div>
  );
};
export default Dashboard;
