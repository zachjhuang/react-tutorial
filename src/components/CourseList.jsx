import CourseListing from './CourseListing.jsx';
import './CourseList.css'

const CourseList = ({selection, courses}) => (
    <div className='course-list' > 
        {Object.entries(courses).filter(([number, course]) => course.term == selection).map(([number, course]) => <CourseListing key={number} course={course}/>)}
    </div>
);

export default CourseList;

