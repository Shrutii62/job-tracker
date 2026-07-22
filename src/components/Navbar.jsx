import { useState } from "react";
import "./Navbar.css";
import JobFormModal from "./JobFormModal";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal((prev) => (prev = true));
  };
  const handleCloseModal = () => {
    setOpenModal((prev) => prev= false);
  };
  return (
    <nav className="navbar">
      <h1>Job Tracker</h1>
      <button onClick={handleOpenModal}>Add Job</button>
      {openModal && <JobFormModal handleCloseModal={handleCloseModal}/>}
    </nav>
  );
};

export default Navbar;
