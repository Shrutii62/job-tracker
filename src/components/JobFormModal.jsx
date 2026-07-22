import { useState } from "react";
import styles from "./JobFormModal.module.css";
const JobFormModal = ({ handleCloseModal }) => {
  const [jobForm, SetJobForm] = useState({
    comName: "",
    role: "",
    description: "",
    jobLink: "",
    jobPortal: "",
  });
  const handleJobFormChng = (targetVal) => {
    const {name, value} = targetVal;
    SetJobForm(prev=>({
        ...prev, [name] : value
    }))
  }
  const handleSave = () => {
    console.log(jobForm, "jobform")
    handleCloseModal()
  }
  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles.modal}>
        <h2>Add Job</h2>

        <input type="text" placeholder="Company Name" value={jobForm.comName} name="comName" onChange={(e)=>handleJobFormChng(e.target)}/>
        <input type="text" placeholder="Role" value={jobForm.role} name="role" onChange={(e)=>handleJobFormChng(e.target)}/>
        <input type="text" placeholder="Description" value={jobForm.description} name="description" onChange={(e)=>handleJobFormChng(e.target)}/>
        <input type="text" placeholder="Job Link" value={jobForm.jobLink} name="jobLink" onChange={(e)=>handleJobFormChng(e.target)}/>
        <input type="text" placeholder="Linkdin/naukri/.." value={jobForm.jobPortal} name="jobPortal" onChange={(e)=>handleJobFormChng(e.target)}/>

        <button onClick={handleSave}>Save</button>
        <button onClick={handleCloseModal}>Close</button>
      </div>
    </div>
  );
};

export default JobFormModal;
