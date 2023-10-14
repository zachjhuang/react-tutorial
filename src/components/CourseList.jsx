import CourseListing from './CourseListing.jsx';
import './CourseList.css'

const filteredCourses = (courses, termFilter) => {
    return Object.entries(courses).filter(([id, course]) => course.term == termFilter)
}

const CourseList = ({termFilter, courses, profile, selected, toggleSelected}) => (
    <div className='course-list' > 
        {filteredCourses(courses, termFilter).map(([id, course]) => <CourseListing key={id} id={id} course={course} profile={profile} selected={selected} toggleSelected={toggleSelected}/>)}
    </div>
);

export default CourseList;

