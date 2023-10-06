import CourseListing from './CourseListing.jsx';
import './CourseList.css'

const filteredCourses = (courses, termFilter) => {
    return Object.entries(courses).filter(([number, course]) => course.term == termFilter)
}

const CourseList = ({termFilter, courses, selected, toggleSelected}) => (
    <div className='course-list' > 
        {filteredCourses(courses, termFilter).map(([number, course]) => <CourseListing key={number} course={course} selected={selected} toggleSelected={toggleSelected}/>)}
    </div>
);

export default CourseList;

