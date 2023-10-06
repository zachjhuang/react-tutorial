import { useState } from "react";
import CourseList from "./CourseList";
import TermSelector from "./TermSelector"

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

  const toggleSelected = (course) => setSelected(
    selected.includes(course)
    ? selected.filter(x => x !== course)
    : [...selected, course]
  );

  return (
    <div>
      <TermSelector terms={terms} termFilter={termFilter} setTermFilter={setTermFilter} />
      <CourseList termFilter={termFilter} courses={courses} selected={selected} toggleSelected={toggleSelected}/>
    </div>
  );
}

export default TermPage;