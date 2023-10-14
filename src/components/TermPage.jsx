import { useState } from "react";
import Modal from "./Modal";
import CourseList from "./CourseList";
import CoursePlan from "./CoursePlan";
import TermSelector from "./TermSelector"
import { useProfile } from "../utilities/profile";

const terms = {
  Fall: 'Fall',
  Winter: 'Winter',
  Spring: 'Spring'
};

const Term = ({termFilter}) => (
  <div className="card" >
      { terms[termFilter] }
  </div>
);

const TermPage = ({courses}) => {
  const [termFilter, setTermFilter] = useState(() => Object.keys(terms)[0]);
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const toggleSelected = (course) => setSelected(
    selected.includes(course)
    ? selected.filter(x => x !== course)
    : [...selected, course]
  );

  const [profile, profileLoading, profileError] = useProfile();
  if (profileError) return <h1>Error loading profile: {`${profileError}`}</h1>;
  if (profileLoading) return <h1>Loading user profile</h1>;
  if (!profile) return <h1>No profile data</h1>;

  return (
    <div>
      <nav className='d-flex'>
        <TermSelector terms={terms} termFilter={termFilter} setTermFilter={setTermFilter} />
        <button className="btn btn-outline-dark ms-auto" onClick={openModal}><b className="bi bi-cart4"> Course Plan</b></button>
      </nav>
      <Modal open={open} close={closeModal}>
        <CoursePlan selected={selected} />
      </Modal>
      <CourseList termFilter={termFilter} courses={courses} profile={profile} selected={selected} toggleSelected={toggleSelected}/>
    </div>
  );
}

export default TermPage;